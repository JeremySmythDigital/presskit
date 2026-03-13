import { NextRequest, NextResponse } from "next/server";
import { getServerClient } from "@/lib/supabase";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId") || "demo-user-id";

    const serverClient = getServerClient();
    const { data: pitches, error } = await serverClient
      .from("pitches")
      .select(`
        id,
        subject,
        status,
        sent_at,
        opened_at,
        journalists(name, outlet, email),
        press_releases(title)
      `)
      .eq("user_id", userId)
      .order("created_at", { ascending: false });

    if (error) throw error;
    return NextResponse.json({ pitches });
  } catch (error) {
    console.error("Error fetching pitches:", error);
    return NextResponse.json({ error: "Failed to fetch pitches" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { pressReleaseId, journalistIds, subject, body: emailBody } = body;

    // TODO: Get user from auth
    const userId = "demo-user-id";

    const serverClient = getServerClient();

    // Fetch journalist emails
    const { data: journalists, error: journalistError } = await serverClient
      .from("journalists")
      .select("*")
      .in("id", journalistIds);

    if (journalistError) throw journalistError;

    // Send emails via Resend
    const sentPitches: Array<{id: string; journalist_id: string; subject: string}> = [];
    
    // Type the journalists array
    const journalistList = journalists as Array<{
      id: string;
      name: string;
      email: string;
      outlet: string;
    }>;
    
    for (const journalist of journalistList || []) {
      try {
        await resend.emails.send({
          from: "press@presskit.ai",
          to: journalist.email,
          subject,
          html: emailBody.replace(/\n/g, "<br>"),
        });

        // Track pitch - use as any to bypass strict typing
        const { data: pitch, error: pitchError } = await serverClient
          .from("pitches")
          .insert({
            user_id: userId,
            press_release_id: pressReleaseId,
            journalist_id: journalist.id,
            subject,
            body: emailBody,
            status: "sent",
            sent_at: new Date().toISOString(),
          } as any)
          .select()
          .single();

        if (pitchError) throw pitchError;
        if (pitch) {
          const pitchData = pitch as { id: string; subject: string };
          sentPitches.push({
            id: pitchData.id,
            journalist_id: journalist.id,
            subject: pitchData.subject,
          });
        }
      } catch (emailError) {
        console.error(`Failed to send to ${journalist.email}:`, emailError);
        // Continue with other journalists
      }
    }

    return NextResponse.json({ 
      success: true, 
      sent: sentPitches.length,
      pitches: sentPitches 
    });
  } catch (error) {
    console.error("Error sending pitches:", error);
    return NextResponse.json({ error: "Failed to send pitches" }, { status: 500 });
  }
}
import { NextRequest, NextResponse } from "next/server";
import { getServerClient } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password, name } = body;

    const serverClient = getServerClient();
    
    const { data, error } = await serverClient.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
        },
      },
    });

    if (error) throw error;

    // User record will be created via Supabase trigger or manually later
    // For now, just return success

    return NextResponse.json({ user: data.user, session: data.session });
  } catch (error) {
    console.error("Error signing up:", error);
    return NextResponse.json(
      { error: "Failed to create account" },
      { status: 500 }
    );
  }
}
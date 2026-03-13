import { NextRequest, NextResponse } from "next/server";
import { getServerClient } from "@/lib/supabase";

export async function GET(req: NextRequest) {
  try {
    const serverClient = getServerClient();
    const { data: releases, error } = await serverClient
      .from("press_releases")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;
    return NextResponse.json({ releases });
  } catch (error) {
    console.error("Error fetching press releases:", error);
    return NextResponse.json({ error: "Failed to fetch press releases" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, content } = body;

    // TODO: Get user from auth
    const userId = "demo-user-id";

    const serverClient = getServerClient();
    const { data: release, error } = await serverClient
      .from("press_releases")
      .insert({
        user_id: userId,
        title,
        content,
        status: "draft",
      } as any)
      .select()
      .single();

    if (error) throw error;
    return NextResponse.json({ release });
  } catch (error) {
    console.error("Error creating press release:", error);
    return NextResponse.json({ error: "Failed to create press release" }, { status: 500 });
  }
}
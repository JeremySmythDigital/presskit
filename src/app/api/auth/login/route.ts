import { NextRequest, NextResponse } from "next/server";
import { getServerClient } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password } = body;

    const serverClient = getServerClient();
    
    const { data, error } = await serverClient.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    return NextResponse.json({ user: data.user, session: data.session });
  } catch (error) {
    console.error("Error logging in:", error);
    return NextResponse.json(
      { error: "Invalid email or password" },
      { status: 401 }
    );
  }
}
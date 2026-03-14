import { NextRequest, NextResponse } from "next/server";
import { getServerClient } from "@/lib/supabase";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search");
    const beat = searchParams.get("beat");
    const outlet = searchParams.get("outlet");
    const limit = parseInt(searchParams.get("limit") || "50");

    const supabase = getServerClient();
    let query = supabase
      .from("journalists")
      .select("*")
      .limit(limit);

    if (search) {
      query = query.or(`name.ilike.%${search}%,outlet.ilike.%${search}%`);
    }
    if (beat) {
      query = query.eq("beat", beat);
    }
    if (outlet) {
      query = query.eq("outlet", outlet);
    }

    const { data: journalists, error } = await query;

    if (error) throw error;

    // If no journalists in DB, return seed data
    if (!journalists || journalists.length === 0) {
      const seedJournalists = [
        { id: "1", name: "Sarah Johnson", email: "sarah@techcrunch.com", outlet: "TechCrunch", beat: "Technology", location: "San Francisco", notes: "Covers early-stage startups" },
        { id: "2", name: "Mike Chen", email: "mike@theverge.com", outlet: "The Verge", beat: "Technology", location: "New York", notes: "Focus on AI/ML companies" },
        { id: "3", name: "Emily Davis", email: "emily@wired.com", outlet: "Wired", beat: "Technology", location: "San Francisco", notes: "Enterprise tech focus" },
        { id: "4", name: "James Wilson", email: "james@forbes.com", outlet: "Forbes", beat: "Business", location: "New York", notes: "VC and funding coverage" },
        { id: "5", name: "Lisa Park", email: "lisa@venturebeat.com", outlet: "VentureBeat", beat: "AI/ML", location: "San Francisco", notes: "Deep tech expert" },
        { id: "6", name: "David Brown", email: "david@businessinsider.com", outlet: "Business Insider", beat: "Startups", location: "New York", notes: "Startup ecosystem" },
        { id: "7", name: "Anna White", email: "anna@fastcompany.com", outlet: "Fast Company", beat: "Innovation", location: "New York", notes: "Design and innovation" },
        { id: "8", name: "Robert Lee", email: "robert@inc.com", outlet: "Inc.", beat: "Startups", location: "New York", notes: "Founder stories" },
        { id: "9", name: "Jennifer Kim", email: "jennifer@entrepreneur.com", outlet: "Entrepreneur", beat: "Startups", location: "Los Angeles", notes: "Small business focus" },
        { id: "10", name: "Mark Taylor", email: "mark@ars Technica.com", outlet: "Ars Technica", beat: "Technology", location: "Boston", notes: "Deep technical coverage" },
      ];
      return NextResponse.json({ journalists: seedJournalists });
    }

    return NextResponse.json({ journalists });
  } catch (error) {
    console.error("Error fetching journalists:", error);
    return NextResponse.json({ error: "Failed to fetch journalists" }, { status: 500 });
  }
}
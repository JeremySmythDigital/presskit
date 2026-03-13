import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // Dynamically import Mistral to handle ESM
    const Mistral = (await import("@mistralai/mistralai")).default;
    
    const body = await req.json();
    const { companyName, headline, newsType, summary, quotes, contactEmail, contactPhone, website } = body;

    const prompt = `You are an expert PR professional. Write a professional press release with the following details:

Company: ${companyName}
Headline: ${headline}
News Type: ${newsType}
Summary: ${summary}
${quotes ? `Key Quotes: ${quotes}` : ""}
Contact Email: ${contactEmail}
${contactPhone ? `Contact Phone: ${contactPhone}` : ""}
${website ? `Website: ${website}` : ""}

Write a complete press release in standard format including:
- FOR IMMEDIATE RELEASE header
- Headline
- Location and date line
- Body paragraphs (3-4 paragraphs with details)
- Quotes (use provided quotes or create realistic ones)
- About section for the company
- Media contact section

Keep it professional, newsworthy, and under 500 words. Make it compelling for journalists to cover.`;

    const client = new Mistral(process.env.MISTRAL_API_KEY || '');

    const response = await client.chat({
      model: "mistral-small-latest",
      messages: [{ role: "user", content: prompt }],
    });

    const content = response.choices?.[0]?.message?.content || "";

    return NextResponse.json({ content });
  } catch (error) {
    console.error("Error generating press release:", error);
    return NextResponse.json(
      { error: "Failed to generate press release" },
      { status: 500 }
    );
  }
}
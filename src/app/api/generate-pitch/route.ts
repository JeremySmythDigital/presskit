import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // Dynamically import Mistral to handle ESM
    const Mistral = (await import("@mistralai/mistralai")).default;
    
    const body = await req.json();
    const { pressReleaseId, journalistIds, customMessage } = body;

    // TODO: Fetch press release and journalist details from database
    // For now, use mock data

    const prompt = `You are an expert at writing personalized pitch emails to journalists.

Write a compelling pitch email for the following:
- Press Release: [Press release content would be fetched here]
- Journalist: [Journalist details would be fetched here]
- Custom Message: ${customMessage || "None"}

Create a short, personalized pitch email that:
1. Has a compelling subject line (under 60 characters)
2. Starts with a personalized hook mentioning the journalist's recent work
3. Briefly summarizes the news in one sentence
4. Explains why it's relevant to the journalist's beat
5. Ends with a clear call-to-action
6. Is under 150 words total

Return JSON format:
{
  "subject": "Subject line here",
  "body": "Full email body here"
}`;

    const client = new Mistral(process.env.MISTRAL_API_KEY || '');

    const response = await client.chat({
      model: "mistral-small-latest",
      messages: [{ role: "user", content: prompt }],
    });

    const content = response.choices?.[0]?.message?.content || "";
    
    // Parse the JSON from the response
    if (typeof content === 'string') {
      try {
        const parsed = JSON.parse(content);
        return NextResponse.json(parsed);
      } catch {
        // If not valid JSON, extract subject and body
        const lines = content.split("\n");
        const subject = lines.find(l => l.includes("Subject:"))?.replace(/Subject:\s*/i, "") || "Pitch";
        return NextResponse.json({
          subject: subject.substring(0, 60),
          body: content,
        });
      }
    }
    return NextResponse.json({ subject: "Pitch", body: String(content) });
  } catch (error) {
    console.error("Error generating pitch:", error);
    return NextResponse.json(
      { error: "Failed to generate pitch" },
      { status: 500 }
    );
  }
}
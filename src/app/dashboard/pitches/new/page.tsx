"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function NewPitchPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    pressReleaseId: searchParams.get("release") || "",
    journalistIds: searchParams.get("journalist") ? [searchParams.get("journalist")!] : [] as string[],
    customMessage: "",
  });
  const [generatedPitch, setGeneratedPitch] = useState<{ subject: string; body: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/generate-pitch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setGeneratedPitch(data);
    } catch (error) {
      console.error("Error generating pitch:", error);
      alert("Failed to generate pitch. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSend = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/pitches", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          ...generatedPitch,
        }),
      });
      if (res.ok) {
        alert("Pitches sent successfully!");
        router.push("/dashboard/pitches");
      }
    } catch (error) {
      console.error("Error sending pitches:", error);
      alert("Failed to send pitches. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Send Pitches
      </h1>

      {!generatedPitch ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="card">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              1. Select Press Release
            </h2>
            <select
              className="input"
              required
              value={formData.pressReleaseId}
              onChange={(e) => setFormData({ ...formData, pressReleaseId: e.target.value })}
            >
              <option value="">Choose a press release...</option>
              {/* Will be populated from API */}
            </select>
            <p className="text-sm text-gray-500 mt-2">
              <a href="/dashboard/releases/new" className="text-primary-600 hover:text-primary-700">
                Create a new press release →
              </a>
            </p>
          </div>

          <div className="card">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              2. Select Journalists
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Select journalists from the database to send personalized pitches.
            </p>
            <a
              href="/dashboard/journalists"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              Browse Journalists →
            </a>
          </div>

          <div className="card">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              3. Add Personal Touch (Optional)
            </h2>
            <textarea
              rows={3}
              className="input"
              placeholder="Add a personal note or angle for this pitch..."
              value={formData.customMessage}
              onChange={(e) => setFormData({ ...formData, customMessage: e.target.value })}
            />
          </div>

          <button type="submit" disabled={loading} className="btn-primary w-full">
            {loading ? "Generating..." : "Generate AI Pitch ✨"}
          </button>
        </form>
      ) : (
        <div className="space-y-6">
          <div className="card">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Generated Pitch
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject Line
                </label>
                <input
                  type="text"
                  className="input"
                  value={generatedPitch.subject}
                  onChange={(e) => setGeneratedPitch({ ...generatedPitch, subject: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Body
                </label>
                <textarea
                  rows={10}
                  className="input font-mono text-sm"
                  value={generatedPitch.body}
                  onChange={(e) => setGeneratedPitch({ ...generatedPitch, body: e.target.value })}
                />
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <button onClick={() => setGeneratedPitch(null)} className="btn-secondary flex-1">
              ← Regenerate
            </button>
            <button onClick={handleSend} disabled={loading} className="btn-primary flex-1">
              {loading ? "Sending..." : "Send Pitch →"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
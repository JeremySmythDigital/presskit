"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewPressReleasePage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    headline: "",
    newsType: "product",
    summary: "",
    quotes: "",
    contactEmail: "",
    contactPhone: "",
    website: "",
  });
  const [generatedRelease, setGeneratedRelease] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/generate-release", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setGeneratedRelease(data.content);
      setStep(3);
    } catch (error) {
      console.error("Error generating press release:", error);
      alert("Failed to generate press release. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/releases", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: formData.headline,
          content: generatedRelease,
        }),
      });
      if (res.ok) {
        router.push("/dashboard/releases");
      }
    } catch (error) {
      console.error("Error saving press release:", error);
      alert("Failed to save press release. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Create Press Release
      </h1>

      {/* Progress */}
      <div className="flex items-center gap-4 mb-8">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-medium ${
              s <= step ? "bg-primary-600 text-white" : "bg-gray-200 text-gray-600"
            }`}>
              {s}
            </div>
            {s < 3 && (
              <div className={`w-20 h-1 ${s < step ? "bg-primary-600" : "bg-gray-200"}`} />
            )}
          </div>
        ))}
      </div>

      {step === 1 && (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company Name *
            </label>
            <input
              type="text"
              required
              className="input"
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              placeholder="Acme Inc."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Headline *
            </label>
            <input
              type="text"
              required
              className="input"
              value={formData.headline}
              onChange={(e) => setFormData({ ...formData, headline: e.target.value })}
              placeholder="Acme Launches Revolutionary AI Platform"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              News Type *
            </label>
            <select
              className="input"
              value={formData.newsType}
              onChange={(e) => setFormData({ ...formData, newsType: e.target.value })}
            >
              <option value="product">Product Launch</option>
              <option value="funding">Funding Announcement</option>
              <option value="partnership">Partnership</option>
              <option value="milestone">Company Milestone</option>
              <option value="award">Award/Recognition</option>
              <option value="executive">Executive Hire</option>
            </select>
          </div>

          <button type="submit" className="btn-primary w-full">
            Continue →
          </button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              News Summary *
            </label>
            <textarea
              required
              rows={4}
              className="input"
              value={formData.summary}
              onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
              placeholder="Describe your news in 2-3 sentences..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Key Quotes
            </label>
            <textarea
              rows={3}
              className="input"
              value={formData.quotes}
              onChange={(e) => setFormData({ ...formData, quotes: e.target.value })}
              placeholder="Quotes from executives or stakeholders..."
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contact Email *
              </label>
              <input
                type="email"
                required
                className="input"
                value={formData.contactEmail}
                onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                placeholder="press@company.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contact Phone
              </label>
              <input
                type="tel"
                className="input"
                value={formData.contactPhone}
                onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Website
            </label>
            <input
              type="url"
              className="input"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              placeholder="https://company.com"
            />
          </div>

          <div className="flex gap-4">
            <button type="button" onClick={() => setStep(1)} className="btn-secondary flex-1">
              ← Back
            </button>
            <button type="submit" disabled={loading} className="btn-primary flex-1">
              {loading ? "Generating..." : "Generate Press Release ✨"}
            </button>
          </div>
        </form>
      )}

      {step === 3 && generatedRelease && (
        <div className="space-y-6">
          <div className="card">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Generated Press Release</h2>
              <button
                onClick={() => navigator.clipboard.writeText(generatedRelease)}
                className="text-primary-600 hover:text-primary-700 text-sm font-medium"
              >
                Copy to Clipboard
              </button>
            </div>
            <div className="prose prose-sm max-w-none bg-gray-50 p-6 rounded-lg whitespace-pre-wrap font-mono text-sm">
              {generatedRelease}
            </div>
          </div>

          <div className="flex gap-4">
            <button onClick={() => setStep(2)} className="btn-secondary flex-1">
              ← Edit Details
            </button>
            <button onClick={handleSave} disabled={loading} className="btn-primary flex-1">
              {loading ? "Saving..." : "Save Press Release"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
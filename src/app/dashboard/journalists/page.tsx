"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface Journalist {
  id: string;
  name: string;
  email: string;
  outlet: string;
  beat: string;
  location: string;
  notes: string | null;
}

export default function JournalistsPage() {
  const [journalists, setJournalists] = useState<Journalist[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterBeat, setFilterBeat] = useState("");
  const [filterOutlet, setFilterOutlet] = useState("");

  useEffect(() => {
    fetchJournalists();
  }, [search, filterBeat, filterOutlet]);

  const fetchJournalists = async () => {
    setLoading(true);
    const params = new URLSearchParams();
    if (search) params.append("search", search);
    if (filterBeat) params.append("beat", filterBeat);
    if (filterOutlet) params.append("outlet", filterOutlet);

    const res = await fetch(`/api/journalists?${params}`);
    const data = await res.json();
    setJournalists(data.journalists || []);
    setLoading(false);
  };

  const beats = [
    "Technology",
    "Business",
    "Finance",
    "Healthcare",
    "SaaS",
    "AI/ML",
    "Startups",
    "Venture Capital",
    "Consumer Tech",
    "Enterprise",
  ];

  const outlets = [
    "TechCrunch",
    "The Verge",
    "Wired",
    "Forbes",
    "Business Insider",
    "VentureBeat",
    "Ars Technica",
    "Fast Company",
    "Inc.",
    "Entrepreneur",
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Journalist Database</h1>
        <Link href="/dashboard/pitches/new" className="btn-primary">
          Send Pitches →
        </Link>
      </div>

      {/* Search and Filters */}
      <div className="card mb-6">
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <input
              type="text"
              placeholder="Search journalists..."
              className="input"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div>
            <select
              className="input"
              value={filterBeat}
              onChange={(e) => setFilterBeat(e.target.value)}
            >
              <option value="">All Beats</option>
              {beats.map((beat) => (
                <option key={beat} value={beat}>{beat}</option>
              ))}
            </select>
          </div>
          <div>
            <select
              className="input"
              value={filterOutlet}
              onChange={(e) => setFilterOutlet(e.target.value)}
            >
              <option value="">All Outlets</option>
              {outlets.map((outlet) => (
                <option key={outlet} value={outlet}>{outlet}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results */}
      {loading ? (
        <div className="text-center py-12">
          <div className="text-gray-500">Loading journalists...</div>
        </div>
      ) : (
        <div className="space-y-3">
          {journalists.map((journalist) => (
            <div key={journalist.id} className="card hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">{journalist.name}</h2>
                  <p className="text-gray-600">{journalist.outlet}</p>
                  <div className="flex gap-2 mt-2">
                    <span className="px-2 py-1 bg-primary-100 text-primary-700 text-sm rounded-full">
                      {journalist.beat}
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                      {journalist.location}
                    </span>
                  </div>
                  {journalist.notes && (
                    <p className="text-sm text-gray-500 mt-2">{journalist.notes}</p>
                  )}
                </div>
                <Link
                  href={`/dashboard/pitches/new?journalist=${journalist.id}`}
                  className="btn-primary text-sm"
                >
                  Pitch
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
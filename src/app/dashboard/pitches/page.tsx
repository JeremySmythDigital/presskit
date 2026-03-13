import Link from "next/link";
import { requireAuth } from "@/lib/auth";
import { supabase } from "@/lib/supabase";

interface Pitch {
  id: string;
  subject: string;
  status: string;
  sent_at: string | null;
  opened_at: string | null;
  journalists: { name: string; outlet: string; email: string } | null;
  press_releases: { title: string } | null;
}

export default async function PitchesPage() {
  const user = await requireAuth();

  const { data } = await supabase
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
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  const pitches = (data || []) as Pitch[];

  const totalSent = pitches.filter(p => p.status !== 'pending').length;
  const opened = pitches.filter(p => p.status === 'opened' || p.status === 'responded').length;
  const responded = pitches.filter(p => p.status === 'responded').length;
  const openRate = totalSent > 0 ? Math.round((opened / totalSent) * 100) + '%' : 'N/A';

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Pitches</h1>
        <Link href="/dashboard/pitches/new" className="btn-primary">
          + New Pitch
        </Link>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <div className="card">
          <div className="text-sm text-gray-600 dark:text-gray-400">Total Sent</div>
          <div className="text-2xl font-bold text-gray-900">{totalSent}</div>
        </div>
        <div className="card">
          <div className="text-sm text-gray-600 dark:text-gray-400">Opened</div>
          <div className="text-2xl font-bold text-green-600">{opened}</div>
        </div>
        <div className="card">
          <div className="text-sm text-gray-600 dark:text-gray-400">Open Rate</div>
          <div className="text-2xl font-bold text-primary-600">{openRate}</div>
        </div>
        <div className="card">
          <div className="text-sm text-gray-600 dark:text-gray-400">Responses</div>
          <div className="text-2xl font-bold text-yellow-600">{responded}</div>
        </div>
      </div>

      {/* Pitch List */}
      {pitches.length > 0 ? (
        <div className="space-y-3">
          {pitches.map((pitch) => (
            <div key={pitch.id} className="card hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-1">
                    {pitch.subject}
                  </h2>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    to {pitch.journalists?.name} ({pitch.journalists?.outlet})
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Press Release: {pitch.press_releases?.title}
                  </p>
                  {pitch.sent_at && (
                    <p className="text-xs text-gray-400 mt-1">
                      Sent: {new Date(pitch.sent_at).toLocaleString()}
                    </p>
                  )}
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  pitch.status === 'responded' ? 'bg-green-100 text-green-700' :
                  pitch.status === 'opened' ? 'bg-blue-100 text-blue-700' :
                  pitch.status === 'sent' ? 'bg-gray-100 text-gray-700' :
                  'bg-yellow-100 text-yellow-700'
                }`}>
                  {pitch.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="card text-center py-12">
          <p className="text-gray-600 dark:text-gray-400 mb-4">No pitches yet.</p>
          <Link href="/dashboard/pitches/new" className="btn-primary">
            Send Your First Pitch
          </Link>
        </div>
      )}
    </div>
  );
}
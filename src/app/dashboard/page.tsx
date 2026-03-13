import Link from "next/link";
import { requireAuth } from "@/lib/auth";
import { supabase } from "@/lib/supabase";
import { FileText, Database, Send, TrendingUp } from "lucide-react";

export default async function DashboardPage() {
  const user = await requireAuth();

  // Fetch stats
  const { count: releasesCount } = await supabase
    .from("press_releases")
    .select("*", { count: "exact", head: true })
    .eq("user_id", user.id);

  const { count: pitchesCount } = await supabase
    .from("pitches")
    .select("*", { count: "exact", head: true })
    .eq("user_id", user.id);

  const { data } = await supabase
    .from("pitches")
    .select(`
      id,
      subject,
      status,
      sent_at,
      journalists(name, outlet)
    `)
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })
    .limit(5);

  const recentPitches = data as Array<{
    id: string;
    subject: string;
    status: string;
    sent_at: string | null;
    journalists: { name: string; outlet: string } | null;
  }> | null;

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <StatCard
          icon={<FileText className="w-6 h-6 text-primary-600" />}
          label="Press Releases"
          value={releasesCount || 0}
        />
        <StatCard
          icon={<Send className="w-6 h-6 text-primary-600" />}
          label="Pitches Sent"
          value={pitchesCount || 0}
        />
        <StatCard
          icon={<TrendingUp className="w-6 h-6 text-primary-600" />}
          label="Open Rate"
          value="42%"
        />
        <StatCard
          icon={<Database className="w-6 h-6 text-primary-600" />}
          label="Journalists"
          value="10,000+"
        />
      </div>

      {/* Quick Actions */}
      <div className="card mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/dashboard/releases/new" className="btn-primary text-center block">
            + New Press Release
          </Link>
          <Link href="/dashboard/journalists" className="btn-secondary text-center block">
            Browse Journalists
          </Link>
          <Link href="/dashboard/pitches/new" className="btn-secondary text-center block">
            Send Pitches
          </Link>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="card">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Pitches</h2>
        {recentPitches && recentPitches.length > 0 ? (
          <div className="space-y-3">
            {recentPitches.map((pitch) => (
              <div key={pitch.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium text-gray-900">{pitch.subject}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    to {pitch.journalists?.name} ({pitch.journalists?.outlet})
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  pitch.status === 'opened' ? 'bg-green-100 text-green-700' :
                  pitch.status === 'sent' ? 'bg-blue-100 text-blue-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {pitch.status}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-600 dark:text-gray-400">
            No pitches yet. Create your first pitch!
          </div>
        )}
      </div>
    </div>
  );
}

function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string | number }) {
  return (
    <div className="card">
      <div className="flex items-center gap-3 mb-2">
        {icon}
        <span className="text-sm text-gray-600 dark:text-gray-400">{label}</span>
      </div>
      <div className="text-2xl font-bold text-gray-900">{value}</div>
    </div>
  );
}
import Link from "next/link";
import { requireAuth } from "@/lib/auth";
import { supabase } from "@/lib/supabase";

interface Release {
  id: string;
  title: string;
  status: string;
  created_at: string;
}

export default async function PressReleasesPage() {
  const user = await requireAuth();

  const { data } = await supabase
    .from("press_releases")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  const releases = (data || []) as Release[];

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Press Releases</h1>
        <Link href="/dashboard/releases/new" className="btn-primary">
          + New Press Release
        </Link>
      </div>

      {releases.length > 0 ? (
        <div className="space-y-4">
          {releases.map((release) => (
            <div key={release.id} className="card hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-1">
                    {release.title}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {new Date(release.created_at).toLocaleDateString()}
                  </p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  release.status === 'published' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {release.status}
                </span>
              </div>
              <div className="mt-4 flex gap-3">
                <Link 
                  href={`/dashboard/releases/${release.id}`}
                  className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                >
                  View →
                </Link>
                <Link
                  href={`/dashboard/pitches/new?release=${release.id}`}
                  className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                >
                  Send as Pitch →
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="card text-center py-12">
          <p className="text-gray-500 mb-4">No press releases yet.</p>
          <Link href="/dashboard/releases/new" className="btn-primary">
            Create Your First Press Release
          </Link>
        </div>
      )}
    </div>
  );
}
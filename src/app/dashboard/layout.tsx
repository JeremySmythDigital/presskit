import Link from "next/link";
import { requireAuth } from "@/lib/auth";
import { FileText, Database, Send, BarChart3 } from "lucide-react";
import { ReactNode } from "react";

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const user = await requireAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 p-4">
        <div className="mb-8">
          <Link href="/" className="text-xl font-bold text-gray-900">
            Press<span className="text-primary-600">Kit</span>.ai
          </Link>
        </div>
        <nav className="space-y-1">
          <NavLink href="/dashboard" icon={<BarChart3 className="w-5 h-5" />}>
            Dashboard
          </NavLink>
          <NavLink href="/dashboard/releases" icon={<FileText className="w-5 h-5" />}>
            Press Releases
          </NavLink>
          <NavLink href="/dashboard/journalists" icon={<Database className="w-5 h-5" />}>
            Journalists
          </NavLink>
          <NavLink href="/dashboard/pitches" icon={<Send className="w-5 h-5" />}>
            Pitches
          </NavLink>
        </nav>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="text-sm text-gray-600">
            {user.email}
          </div>
          <form action="/api/auth/logout" method="POST">
            <button className="text-sm text-gray-500 hover:text-gray-900">
              Sign out
            </button>
          </form>
        </div>
      </aside>

      {/* Main content */}
      <main className="ml-64 p-8">{children}</main>
    </div>
  );
}

function NavLink({ href, icon, children }: { href: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
    >
      {icon}
      <span>{children}</span>
    </Link>
  );
}
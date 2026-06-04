"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function Sidebar() {
  const pathname = usePathname();

  async function handleLogout() {
    await supabase.auth.signOut();
    window.location.href = "/login";
  }

  const navItem = (
    href: string,
    label: string
  ) => {
    const active = pathname === href;

    return (
      <Link
        href={href}
        className={`
          px-4 py-3 rounded-xl transition-all
          ${
            active
              ? "bg-purple-600 text-white shadow-lg"
              : "hover:bg-white/10 text-zinc-300"
          }
        `}
      >
        {label}
      </Link>
    );
  };

  return (
    <aside className="glass-card sidebar-glow p-6 rounded-3xl h-full flex flex-col">
      <h2 className="text-2xl font-bold mb-8">
        Dashboard
      </h2>

      <nav className="flex flex-col gap-3">
        {navItem("/", "🏠 Home")}
        {navItem("/profile", "👤 Profile")}
        {navItem("/courses", "📚 Courses")}
        {navItem("/progress", "📈 Progress")}
        {navItem("/settings", "⚙️ Settings")}
      </nav>

      <button
        onClick={handleLogout}
        className="mt-auto bg-red-600 hover:bg-red-700 transition py-3 rounded-xl font-semibold"
      >
        Logout
      </button>
    </aside>
  );
}
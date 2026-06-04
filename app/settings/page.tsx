import { supabase } from "@/lib/supabase";

export default async function SettingsPage() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <main className="p-10">
      <h1 className="text-5xl font-bold mb-8">
        ⚙️ Settings
      </h1>

      <div className="glass-card p-8 rounded-3xl">
        <h2 className="text-2xl font-bold mb-4">
          Account Information
        </h2>

        <p className="text-lg mb-3">
          <strong>Email:</strong>{" "}
          {user?.email || "Not Available"}
        </p>

        <p className="text-lg">
          <strong>Role:</strong> Student
        </p>
      </div>
    </main>
  );
}
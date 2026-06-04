"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ProfilePage() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    async function getUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
console.log("USER:", user);
      if (user) {
        setEmail(user.email || "");
      }
    }

    getUser();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="glass-card p-8 rounded-3xl">
        <h1 className="text-4xl font-bold">Profile</h1>

        <p className="mt-4">Email: {email}</p>
        <p className="mt-2">Role: Student</p>
        <p className="mt-2">Learning Streak: 7 Days</p>
      </div>
    </main>
  );
}
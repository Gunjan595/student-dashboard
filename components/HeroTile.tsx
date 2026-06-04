"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function HeroTile() {
  const [name, setName] = useState("Student");

  useEffect(() => {
    async function getUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user?.email) {
        const username = user.email.split("@")[0];
        setName(username);
      }
    }

    getUser();
  }, []);

  return (
    <section className="glass-card rounded-3xl p-8 min-h-[220px] flex flex-col justify-center">
      <h1 className="text-5xl font-extrabold glow-text">
        Welcome Back, {name} 👋
      </h1>

      <p className="mt-3 text-lg text-zinc-300">
        B.Tech IT Student
      </p>

      <p className="text-zinc-400 mt-1">
        Learning Goal: Full Stack Development 🚀
      </p>

      <div className="flex gap-6 mt-6 flex-wrap">
        <div className="bg-white/5 px-4 py-3 rounded-2xl">
          <p className="text-zinc-400 text-sm">
            Learning Streak
          </p>
          <p className="text-xl font-bold">
            7 Days 🔥
          </p>
        </div>

        <div className="bg-white/5 px-4 py-3 rounded-2xl">
          <p className="text-zinc-400 text-sm">
            Focus Area
          </p>
          <p className="text-xl font-bold">
            Web Development
          </p>
        </div>
      </div>
    </section>
  );
}
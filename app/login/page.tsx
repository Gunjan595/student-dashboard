"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    async function checkSession() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        router.push("/");
      }
    }

    checkSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_IN") {
        router.push("/");
      }
    });

    return () => subscription.unsubscribe();
  }, [router]);

  return (
  <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e1b4b] p-6">
    <div className="w-full max-w-md rounded-3xl p-8 backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl">

      <h1 className="text-5xl font-extrabold text-center mb-3 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        Student Dashboard
      </h1>

      <p className="text-center text-zinc-300 mb-8">
        Welcome back 👋
      </p>

      <Auth
        supabaseClient={supabase}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: "#8B5CF6",
                brandAccent: "#EC4899",
                defaultButtonBackground: "#8B5CF6",
                defaultButtonBackgroundHover: "#7C3AED",
                inputBackground: "rgba(255,255,255,0.08)",
                inputBorder: "rgba(255,255,255,0.2)",
                inputText: "#FFFFFF",
                inputPlaceholder: "#A1A1AA",
              },
            },
          },
        }}
        providers={[]}
      />
    </div>
  </main>
)
}
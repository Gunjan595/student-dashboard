"use client";

import { supabase } from "@/lib/supabase";

type UpdateProgressButtonProps = {
  id: string;
  progress: number;
};

export default function UpdateProgressButton({
  id,
  progress,
}: UpdateProgressButtonProps) {
  async function handleUpdate() {
    const newProgress = Math.min(progress + 10, 100);

    const { error } = await supabase
      .from("courses")
      .update({
        progress: newProgress,
      })
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Progress Updated!");

    window.location.reload();
  }

  return (
    <button
      onClick={handleUpdate}
      className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl"
    >
      ➕ 10% Progress
    </button>
  );
}
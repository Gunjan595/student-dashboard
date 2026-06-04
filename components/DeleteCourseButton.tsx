"use client";

import { supabase } from "@/lib/supabase";

type DeleteCourseButtonProps = {
  id: string;
};

export default function DeleteCourseButton({
  id,
}: DeleteCourseButtonProps) {
  async function handleDelete() {
    const confirmDelete = confirm(
      "Are you sure you want to delete this course?"
    );

    if (!confirmDelete) return;

    const { error } = await supabase
      .from("courses")
      .delete()
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Course Deleted!");

    window.location.reload();
  }

  return (
    <button
      onClick={handleDelete}
      className="mt-4 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl"
    >
      🗑️ Delete
    </button>
  );
}
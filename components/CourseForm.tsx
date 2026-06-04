"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function CourseForm() {
  const [title, setTitle] = useState("");
  const [progress, setProgress] = useState("");

  async function handleAddCourse() {
    if (!title || !progress) {
      alert("Please fill all fields");
      return;
    }

    const { error } = await supabase
      .from("courses")
      .insert([
        {
          title,
          progress: Number(progress),
          icon_name: "Book",
        },
      ]);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Course Added Successfully!");

    setTitle("");
    setProgress("");

    window.location.reload();
  }

  return (
    <div className="glass-card p-6 rounded-3xl mb-8">
      <h2 className="text-2xl font-bold mb-4">
        Add New Course
      </h2>

      <input
        type="text"
        placeholder="Course Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-3 rounded-xl bg-zinc-900 border border-zinc-700 mb-4"
      />

      <input
        type="number"
        placeholder="Progress %"
        value={progress}
        onChange={(e) => setProgress(e.target.value)}
        className="w-full p-3 rounded-xl bg-zinc-900 border border-zinc-700 mb-4"
      />

      <button
        onClick={handleAddCourse}
        className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl"
      >
        Add Course
      </button>
    </div>
  );
}
import { supabase } from "@/lib/supabase";

export default async function ProgressPage() {
  const { data: courses } = await supabase
    .from("courses")
    .select("*");

  const totalCourses = courses?.length || 0;

  const averageProgress =
    totalCourses > 0
      ? Math.round(
          (courses || []).reduce(
            (sum, course) => sum + course.progress,
            0
          ) / totalCourses
        )
      : 0;

  const completedCourses =
    (courses || []).filter(
      (course) => course.progress === 100
    ).length;

  return (
    <main className="p-10">
      <h1 className="text-5xl font-bold mb-8">
        📈 Progress Overview
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="glass-card p-6 rounded-3xl">
          <h2 className="text-xl font-bold text-zinc-300">
            Total Courses
          </h2>

          <p className="text-5xl font-extrabold mt-4">
            {totalCourses}
          </p>
        </div>

        <div className="glass-card p-6 rounded-3xl">
          <h2 className="text-xl font-bold text-zinc-300">
            Average Progress
          </h2>

          <p className="text-5xl font-extrabold mt-4 text-purple-400">
            {averageProgress}%
          </p>
        </div>

        <div className="glass-card p-6 rounded-3xl">
          <h2 className="text-xl font-bold text-zinc-300">
            Courses Completed
          </h2>

          <p className="text-5xl font-extrabold mt-4 text-green-400">
            {completedCourses}
          </p>
        </div>

      </div>

      <div className="glass-card p-8 rounded-3xl mt-8">
        <h2 className="text-2xl font-bold mb-4">
          Learning Summary
        </h2>

        <p className="text-zinc-400 leading-8">
          You are currently enrolled in{" "}
          <span className="font-bold text-white">
            {totalCourses}
          </span>{" "}
          courses with an average progress of{" "}
          <span className="font-bold text-purple-400">
            {averageProgress}%
          </span>.
          <br />
          Successfully completed{" "}
          <span className="font-bold text-green-400">
            {completedCourses}
          </span>{" "}
          course(s).
        </p>
      </div>
    </main>
  );
}
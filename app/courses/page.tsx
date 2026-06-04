import { supabase } from "@/lib/supabase";
import CourseForm from "@/components/CourseForm";
import DeleteCourseButton from "@/components/DeleteCourseButton";
import UpdateProgressButton from "@/components/UpdateProgressButton";

export default async function CoursesPage() {
  const { data: courses } = await supabase
    .from("courses")
    .select("*");

  return (
    <main className="p-10">
      <h1 className="text-5xl font-bold mb-8">
        📚 My Courses
      </h1>

      <CourseForm />

      <div className="grid gap-6">
        {courses?.map((course) => (
          <div
            key={course.id}
            className="glass-card p-6 rounded-3xl"
          >
            <h2 className="text-2xl font-bold">
              {course.title}
            </h2>

            <p className="mt-2 text-zinc-400">
              {course.progress}% Complete
            </p>

            <div className="w-full bg-zinc-800 h-4 rounded-full mt-4">
              <div
                className="h-4 rounded-full bg-gradient-to-r from-blue-500 to-pink-500"
                style={{ width: `${course.progress}%` }}
              />
            </div>

            <DeleteCourseButton id={course.id} />
          </div>
        ))}
      </div>
    </main>
  );
}
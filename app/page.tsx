import { supabase } from "../lib/supabase";
import Sidebar from "@/components/Sidebar";
import HeroTile from "@/components/HeroTile";
import CourseCard from "@/components/CourseCard";
import ActivityTile from "@/components/ActivityTile";

export default async function Home() {
  const { data: courses, error } = await supabase
    .from("courses")
    .select("*");

  console.log("COURSES:", courses);
  console.log("ERROR:", error);

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="grid lg:grid-cols-12 gap-4">
        <div className="lg:col-span-2">
          <Sidebar />
        </div>
        <div className="lg:col-span-10">
          <HeroTile />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {courses?.map((course) => (
              <CourseCard
                key={course.id}
                id={course.id}
                title={course.title}
                progress={course.progress}
              />
            ))}

            <ActivityTile />

          </div>

        </div>

      </div>
    </main>
  );
}
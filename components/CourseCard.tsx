"use client";

import { motion } from "framer-motion";
import DeleteCourseButton from "./DeleteCourseButton";
import UpdateProgressButton from "./UpdateProgressButton";

type CourseCardProps = {
  id: string;
  title: string;
  progress: number;
};

export default function CourseCard({
  id,
  title,
  progress,
}: CourseCardProps) {
  return (
    <motion.article
      whileHover={{
        scale: 1.03,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="
        glass-card
        rounded-3xl
        p-6
        hover:scale-[1.02]
        transition-all
        duration-300
      "
    >
      <h3 className="text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="text-zinc-400 mt-2">
        {progress}% Complete
      </p>

      <div className="progress-track mt-4">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex gap-3 mt-4">
        <UpdateProgressButton
          id={id}
          progress={progress}
        />

        <DeleteCourseButton
          id={id}
        />
      </div>
    </motion.article>
  );
}
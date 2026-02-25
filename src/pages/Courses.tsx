import { useState } from "react";
import { motion } from "framer-motion";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/lib/mockData";

const semesters = [...new Set(courses.map((c) => c.semester))].sort();

const Courses = () => {
  const [selectedSem, setSelectedSem] = useState<number | null>(null);
  const filtered = selectedSem ? courses.filter((c) => c.semester === selectedSem) : courses;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-display font-bold text-foreground">Courses 📚</h1>
        <p className="mt-1 text-sm text-muted-foreground">Browse courses by semester and track your progress</p>
      </div>

      {/* Semester filter */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedSem(null)}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${!selectedSem ? "gradient-primary text-primary-foreground" : "border border-border bg-card text-foreground hover:border-primary/40"}`}
        >
          All
        </button>
        {semesters.map((sem) => (
          <button
            key={sem}
            onClick={() => setSelectedSem(sem)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${selectedSem === sem ? "gradient-primary text-primary-foreground" : "border border-border bg-card text-foreground hover:border-primary/40"}`}
          >
            Semester {sem}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((course, i) => (
          <CourseCard key={course.id} course={course} index={i} />
        ))}
      </motion.div>
    </div>
  );
};

export default Courses;

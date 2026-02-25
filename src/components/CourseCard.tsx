import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { Course } from "@/lib/mockData";

const CourseCard = ({ course, index }: { course: Course; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.05 }}
  >
    <Link
      to={`/courses/${course.id}`}
      className="group block rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:glow-primary"
    >
      <div className="flex items-start gap-4">
        <span className="text-4xl">{course.icon}</span>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-medium text-primary">{course.code}</p>
          <h3 className="mt-0.5 truncate text-base font-display font-semibold text-foreground group-hover:text-gradient-primary">
            {course.title}
          </h3>
          <p className="mt-1 text-xs text-muted-foreground">
            {course.credits} Credits • {course.totalVideos} videos • +{course.xpReward} XP each
          </p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mt-4">
        <div className="flex justify-between text-xs">
          <span className="text-muted-foreground">Progress</span>
          <span className="font-semibold text-xp">{course.progress}%</span>
        </div>
        <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full gradient-xp transition-all duration-500"
            style={{ width: `${course.progress}%` }}
          />
        </div>
      </div>

      {/* Topics preview */}
      <div className="mt-3 flex flex-wrap gap-1.5">
        {course.topics.slice(0, 3).map((topic) => (
          <span key={topic} className="rounded-md bg-secondary px-2 py-0.5 text-xs text-secondary-foreground">
            {topic}
          </span>
        ))}
        {course.topics.length > 3 && (
          <span className="rounded-md bg-secondary px-2 py-0.5 text-xs text-muted-foreground">
            +{course.topics.length - 3}
          </span>
        )}
      </div>
    </Link>
  </motion.div>
);

export default CourseCard;

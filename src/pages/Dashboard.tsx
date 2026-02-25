import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import StatCard from "@/components/StatCard";
import CourseCard from "@/components/CourseCard";
import { userProfile, courses, leaderboard, achievements } from "@/lib/mockData";
import heroBg from "@/assets/hero-bg.jpg";

const Dashboard = () => {
  const recentCourses = courses.slice(0, 4);
  const earnedAchievements = achievements.filter((a) => a.earned);

  return (
    <div className="space-y-8">
      {/* Hero Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative overflow-hidden rounded-2xl border border-border"
      >
        <img src={heroBg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="relative px-8 py-10">
          <h1 className="text-3xl font-display font-bold text-foreground">
            Welcome back, <span className="text-gradient-primary">{userProfile.name.split(" ")[0]}</span>! 🚀
          </h1>
          <p className="mt-2 max-w-lg text-sm text-muted-foreground">
            You're on a {userProfile.streak}-day streak! Keep learning to earn more XP and climb the leaderboard.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/courses" className="inline-flex items-center gap-2 rounded-lg gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90">
              📚 Continue Learning
            </Link>
            <Link to="/quiz" className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-all hover:border-primary/40">
              ⚔️ Quiz Battle
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard icon="⚡" label="Total XP" value={userProfile.xp.toLocaleString()} subtext={`Level ${userProfile.level}`} />
        <StatCard icon="🔥" label="Day Streak" value={userProfile.streak} subtext="Keep it going!" />
        <StatCard icon="🏆" label="Rank" value={`#${userProfile.rank}`} subtext="Top 5%" />
        <StatCard icon="🎯" label="Achievements" value={`${earnedAchievements.length}/${achievements.length}`} subtext={`${earnedAchievements.length} earned`} />
      </div>

      {/* Content grid */}
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Recent Courses */}
        <div className="lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-display font-bold text-foreground">Continue Learning</h2>
            <Link to="/courses" className="text-sm text-primary hover:underline">View all →</Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {recentCourses.map((course, i) => (
              <CourseCard key={course.id} course={course} index={i} />
            ))}
          </div>
        </div>

        {/* Leaderboard Preview */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-display font-bold text-foreground">Leaderboard</h2>
            <Link to="/leaderboard" className="text-sm text-primary hover:underline">View all →</Link>
          </div>
          <div className="rounded-xl border border-border bg-card">
            {leaderboard.slice(0, 5).map((entry) => (
              <div
                key={entry.rank}
                className={`flex items-center gap-3 border-b border-border px-4 py-3 last:border-b-0 ${entry.name === userProfile.name ? "bg-primary/5" : ""}`}
              >
                <span className={`w-6 text-center text-sm font-bold ${entry.rank <= 3 ? "text-rank" : "text-muted-foreground"}`}>
                  {entry.rank <= 3 ? ["🥇", "🥈", "🥉"][entry.rank - 1] : `#${entry.rank}`}
                </span>
                <span className="text-xl">{entry.avatar}</span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-foreground">{entry.name}</p>
                  <p className="text-xs text-muted-foreground">Level {entry.level}</p>
                </div>
                <span className="text-sm font-semibold text-xp">{entry.xp.toLocaleString()} XP</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Achievements */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-display font-bold text-foreground">Recent Achievements</h2>
          <Link to="/achievements" className="text-sm text-primary hover:underline">View all →</Link>
        </div>
        <div className="flex flex-wrap gap-3">
          {earnedAchievements.map((a) => (
            <motion.div
              key={a.id}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5"
            >
              <span className="text-2xl">{a.icon}</span>
              <div>
                <p className="text-sm font-semibold text-foreground">{a.title}</p>
                <p className="text-xs text-xp">+{a.xpReward} XP</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

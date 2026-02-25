import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { userProfile } from "@/lib/mockData";

const navItems = [
  { path: "/", label: "Dashboard", icon: "🏠" },
  { path: "/courses", label: "Courses", icon: "📚" },
  { path: "/quiz", label: "Quiz Battle", icon: "⚔️" },
  { path: "/leaderboard", label: "Leaderboard", icon: "🏆" },
  { path: "/rewards", label: "Rewards", icon: "🎁" },
  { path: "/achievements", label: "Achievements", icon: "🏅" },
];

const AppSidebar = () => {
  const location = useLocation();
  const xpPercent = (userProfile.xp / userProfile.xpToNextLevel) * 100;

  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-64 flex-col border-r border-border bg-sidebar">
      {/* Logo */}
      <div className="flex items-center gap-3 border-b border-border px-6 py-5">
        <span className="text-3xl">🎓</span>
        <div>
          <h1 className="text-xl font-display font-bold text-gradient-primary">EduQuest</h1>
          <p className="text-xs text-muted-foreground">Level up your learning</p>
        </div>
      </div>

      {/* User XP Card */}
      <div className="mx-4 mt-4 rounded-lg border border-border bg-card p-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{userProfile.avatar}</span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-foreground">{userProfile.name}</p>
            <p className="text-xs text-muted-foreground">{userProfile.branch} • Sem {userProfile.semester}</p>
          </div>
        </div>
        <div className="mt-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-level">Level {userProfile.level}</span>
            <span className="text-muted-foreground">{userProfile.xp}/{userProfile.xpToNextLevel} XP</span>
          </div>
          <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-muted">
            <motion.div
              className="h-full rounded-full gradient-xp"
              initial={{ width: 0 }}
              animate={{ width: `${xpPercent}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
        </div>
        <div className="mt-2 flex items-center gap-1 text-xs">
          <span className="text-streak">🔥 {userProfile.streak} day streak</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="mt-4 flex-1 space-y-1 px-3">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className="relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors"
            >
              {isActive && (
                <motion.div
                  layoutId="sidebar-active"
                  className="absolute inset-0 rounded-lg gradient-primary opacity-15"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 text-lg">{item.icon}</span>
              <span className={`relative z-10 ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>
                {item.label}
              </span>
            </NavLink>
          );
        })}
      </nav>

      {/* Footer stats */}
      <div className="border-t border-border px-4 py-4">
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>🎬 {userProfile.totalVideosWatched} videos</span>
          <span>📝 {userProfile.quizzesCompleted} quizzes</span>
        </div>
      </div>
    </aside>
  );
};

export default AppSidebar;

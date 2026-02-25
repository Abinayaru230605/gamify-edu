import { motion } from "framer-motion";
import { leaderboard, userProfile } from "@/lib/mockData";

const Leaderboard = () => (
  <div className="mx-auto max-w-2xl space-y-6">
    <h1 className="text-2xl font-display font-bold text-foreground">Leaderboard 🏆</h1>

    {/* Top 3 Podium */}
    <div className="flex items-end justify-center gap-4">
      {[leaderboard[1], leaderboard[0], leaderboard[2]].map((entry, i) => {
        const heights = ["h-28", "h-36", "h-24"];
        const medals = ["🥈", "🥇", "🥉"];
        return (
          <motion.div
            key={entry.rank}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className="flex flex-col items-center"
          >
            <span className="text-4xl">{entry.avatar}</span>
            <p className="mt-1 text-sm font-semibold text-foreground">{entry.name.split(" ")[0]}</p>
            <p className="text-xs text-xp">{entry.xp.toLocaleString()} XP</p>
            <div className={`mt-2 ${heights[i]} w-24 flex items-start justify-center rounded-t-xl gradient-primary pt-3`}>
              <span className="text-3xl">{medals[i]}</span>
            </div>
          </motion.div>
        );
      })}
    </div>

    {/* Full list */}
    <div className="rounded-xl border border-border bg-card">
      {leaderboard.map((entry, i) => (
        <motion.div
          key={entry.rank}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.04 }}
          className={`flex items-center gap-4 border-b border-border px-5 py-3.5 last:border-b-0 ${entry.name === userProfile.name ? "bg-primary/5" : ""}`}
        >
          <span className={`w-8 text-center text-sm font-bold ${entry.rank <= 3 ? "text-rank" : "text-muted-foreground"}`}>
            {entry.rank <= 3 ? ["🥇", "🥈", "🥉"][entry.rank - 1] : `#${entry.rank}`}
          </span>
          <span className="text-2xl">{entry.avatar}</span>
          <div className="flex-1">
            <p className="text-sm font-semibold text-foreground">
              {entry.name} {entry.name === userProfile.name && <span className="text-xs text-primary">(You)</span>}
            </p>
            <p className="text-xs text-muted-foreground">Level {entry.level} • 🔥 {entry.streak} day streak</p>
          </div>
          <span className="text-sm font-bold text-xp">{entry.xp.toLocaleString()} XP</span>
        </motion.div>
      ))}
    </div>
  </div>
);

export default Leaderboard;

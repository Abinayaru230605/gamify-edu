import { motion } from "framer-motion";
import { achievements } from "@/lib/mockData";

const Achievements = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl font-display font-bold text-foreground">Achievements 🏅</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        {achievements.filter((a) => a.earned).length}/{achievements.length} earned
      </p>
    </div>

    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {achievements.map((a, i) => (
        <motion.div
          key={a.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
          className={`rounded-xl border p-5 transition-all ${a.earned ? "border-primary/30 bg-card glow-primary" : "border-border bg-card opacity-50"}`}
        >
          <div className="flex items-start gap-4">
            <span className={`text-4xl ${!a.earned && "grayscale"}`}>{a.icon}</span>
            <div>
              <h3 className="text-base font-display font-semibold text-foreground">{a.title}</h3>
              <p className="mt-0.5 text-xs text-muted-foreground">{a.description}</p>
              <p className={`mt-1 text-xs font-semibold ${a.earned ? "text-xp" : "text-muted-foreground"}`}>
                {a.earned ? `✅ Earned • +${a.xpReward} XP` : `🔒 +${a.xpReward} XP`}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default Achievements;

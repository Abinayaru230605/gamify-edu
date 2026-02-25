import { useState } from "react";
import { motion } from "framer-motion";
import { rewards, userProfile } from "@/lib/mockData";

const categories = ["All", ...new Set(rewards.map((r) => r.category))];

const Rewards = () => {
  const [category, setCategory] = useState("All");
  const filtered = category === "All" ? rewards : rewards.filter((r) => r.category === category);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-display font-bold text-foreground">Rewards Store 🎁</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Your XP: <span className="font-semibold text-xp">{userProfile.xp.toLocaleString()}</span> — Redeem rewards below!
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${category === c ? "gradient-primary text-primary-foreground" : "border border-border bg-card text-foreground hover:border-primary/40"}`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((reward, i) => {
          const canAfford = userProfile.xp >= reward.xpCost;
          return (
            <motion.div
              key={reward.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30"
            >
              <span className="text-4xl">{reward.icon}</span>
              <h3 className="mt-3 text-base font-display font-semibold text-foreground">{reward.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{reward.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm font-bold text-xp">{reward.xpCost.toLocaleString()} XP</span>
                <button
                  disabled={!canAfford}
                  className={`rounded-lg px-4 py-2 text-xs font-semibold transition-all ${canAfford ? "gradient-primary text-primary-foreground hover:opacity-90" : "bg-muted text-muted-foreground cursor-not-allowed"}`}
                >
                  {canAfford ? "Redeem" : "Not enough XP"}
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Rewards;

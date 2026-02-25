import { useState } from "react";
import { motion } from "framer-motion";
import { rewards, userProfile } from "@/lib/mockData";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

const categories = ["All", ...new Set(rewards.map((r) => r.category))];

const Rewards = () => {
  const [category, setCategory] = useState("All");
  const [selectedReward, setSelectedReward] = useState<(typeof rewards)[0] | null>(null);
  const [redeemed, setRedeemed] = useState<string[]>([]);
  const { toast } = useToast();
  const filtered = category === "All" ? rewards : rewards.filter((r) => r.category === category);

  const handleRedeem = () => {
    if (!selectedReward) return;
    setRedeemed((prev) => [...prev, selectedReward.id]);
    setSelectedReward(null);
    toast({
      title: "🎉 Reward Redeemed!",
      description: `You redeemed "${selectedReward.title}" for ${selectedReward.xpCost.toLocaleString()} XP.`,
    });
  };

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
          const alreadyRedeemed = redeemed.includes(reward.id);
          return (
            <motion.div
              key={reward.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => !alreadyRedeemed && setSelectedReward(reward)}
              className="cursor-pointer rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <span className="text-4xl">{reward.icon}</span>
              <h3 className="mt-3 text-base font-display font-semibold text-foreground">{reward.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{reward.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm font-bold text-xp">{reward.xpCost.toLocaleString()} XP</span>
                {alreadyRedeemed ? (
                  <span className="rounded-lg px-4 py-2 text-xs font-semibold text-green-400">✅ Redeemed</span>
                ) : (
                  <span className={`rounded-lg px-4 py-2 text-xs font-semibold ${canAfford ? "gradient-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                    {canAfford ? "Redeem" : "Not enough XP"}
                  </span>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      <Dialog open={!!selectedReward} onOpenChange={(open) => !open && setSelectedReward(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-lg">
              <span className="text-3xl">{selectedReward?.icon}</span>
              {selectedReward?.title}
            </DialogTitle>
            <DialogDescription>{selectedReward?.description}</DialogDescription>
          </DialogHeader>
          <div className="space-y-3 py-2">
            <div className="flex items-center justify-between rounded-lg border border-border bg-muted/50 p-3">
              <span className="text-sm text-muted-foreground">Cost</span>
              <span className="font-bold text-xp">{selectedReward?.xpCost.toLocaleString()} XP</span>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-border bg-muted/50 p-3">
              <span className="text-sm text-muted-foreground">Your XP</span>
              <span className="font-bold text-foreground">{userProfile.xp.toLocaleString()} XP</span>
            </div>
          </div>
          <DialogFooter>
            <button onClick={() => setSelectedReward(null)} className="rounded-lg border border-border px-4 py-2 text-sm text-foreground hover:bg-muted">
              Cancel
            </button>
            <button
              onClick={handleRedeem}
              disabled={selectedReward ? userProfile.xp < selectedReward.xpCost : true}
              className="rounded-lg gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Confirm Redeem
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Rewards;

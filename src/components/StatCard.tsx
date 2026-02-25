import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StatCardProps {
  icon: string;
  label: string;
  value: string | number;
  subtext?: string;
  glowClass?: string;
  children?: ReactNode;
}

const StatCard = ({ icon, label, value, subtext, glowClass = "", children }: StatCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className={`rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 ${glowClass}`}
  >
    <div className="flex items-start justify-between">
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="mt-1 text-2xl font-display font-bold text-foreground">{value}</p>
        {subtext && <p className="mt-0.5 text-xs text-muted-foreground">{subtext}</p>}
      </div>
      <span className="text-3xl">{icon}</span>
    </div>
    {children}
  </motion.div>
);

export default StatCard;

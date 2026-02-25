import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { platformLinks } from "@/lib/platformLinks";

const PlatformLinks = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Links Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-72 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 shadow-lg text-2xl hover:shadow-xl transition-shadow"
        aria-label="Open platform links"
      >
        🔗
      </motion.button>

      {/* Links Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-80 right-6 z-50 w-80 rounded-2xl border border-border bg-card shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 px-6 py-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🔗</span>
                <div>
                  <h3 className="text-sm font-semibold text-white">Platform Links</h3>
                  <p className="text-xs text-white/80">Quick access to learning platforms</p>
                </div>
              </div>
            </div>

            {/* Links Grid */}
            <div className="p-4 space-y-2 max-h-96 overflow-y-auto">
              {platformLinks.map((platform, index) => (
                <motion.a
                  key={platform.id}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`group flex items-center gap-3 rounded-xl bg-gradient-to-r ${platform.color} p-4 text-white transition-all hover:shadow-lg hover:scale-105`}
                >
                  <span className="text-2xl">{platform.icon}</span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-white">{platform.name}</p>
                    <p className="text-xs text-white/80 line-clamp-1">{platform.description}</p>
                  </div>
                  <span className="text-white/70 group-hover:text-white transition-colors">→</span>
                </motion.a>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-border px-4 py-3 bg-muted/50">
              <p className="text-xs text-muted-foreground text-center">
                Click any link to open the platform in a new window
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PlatformLinks;

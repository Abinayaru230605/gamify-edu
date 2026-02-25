import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getStudents, type Student } from "@/lib/counselingData";

const CounselingList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [residency, setResidency] = useState<string | undefined>(undefined);
  const [search, setSearch] = useState("");

  const students = getStudents({ residency, search });

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-48 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-teal-500 shadow-lg text-2xl hover:shadow-xl transition-shadow"
        aria-label="Open counseling list"
      >
        📋
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-56 right-6 z-50 w-96 max-h-[640px] overflow-hidden rounded-2xl border border-border bg-card shadow-2xl flex flex-col"
          >
            <div className="bg-gradient-to-r from-green-500 to-teal-500 px-6 py-3">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-white">Counseling List</h3>
                  <p className="text-xs text-white/80">Class Mentor: Mr. M. JyothiPrasad</p>
                </div>
                <span className="text-2xl">👩‍🏫</span>
              </div>
            </div>

            <div className="p-3 border-b border-border">
              <div className="flex gap-2">
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by name or reg no"
                  className="flex-1 rounded-lg border border-border bg-muted px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                />
                <select
                  value={residency ?? ""}
                  onChange={(e) => setResidency(e.target.value || undefined)}
                  className="rounded-lg border border-border bg-muted px-2 py-2 text-sm text-foreground"
                >
                  <option value="">All</option>
                  <option value="Hosteller">Hosteller</option>
                  <option value="Day Scholar">Day Scholar</option>
                </select>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-3 space-y-2">
              {students.length === 0 ? (
                <div className="flex h-32 items-center justify-center">
                  <p className="text-xs text-muted-foreground">No students found</p>
                </div>
              ) : (
                students.map((s: Student) => (
                  <div key={s.regNo} className="rounded-lg border border-border bg-background p-3">
                    <div className="flex items-start gap-3">
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-foreground">{s.name}</p>
                        <p className="text-xs text-muted-foreground">Reg: {s.regNo} • {s.gender} • {s.category}</p>
                        <p className="text-xs mt-1 text-muted-foreground">Residency: <span className="font-medium text-foreground">{s.residency}</span></p>
                        <p className="text-xs mt-1 text-muted-foreground">Mentor: <span className="font-medium text-foreground">{s.mentor}</span></p>
                        <p className="text-xs text-muted-foreground">Counselor: <span className="font-medium text-foreground">{s.counselor}</span></p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <button
                          onClick={() => navigator.clipboard?.writeText(s.regNo)}
                          className="rounded px-2 py-1 text-xs border border-border bg-card"
                        >
                          Copy Reg
                        </button>
                        <a
                          href={`mailto:${s.regNo}@example.com`}
                          className="rounded px-2 py-1 text-xs gradient-primary text-primary-foreground"
                        >
                          Email
                        </a>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="border-t border-border px-4 py-3 bg-muted/50">
              <p className="text-xs text-muted-foreground">Tip: Use search to quickly find a student. Residency shows Hosteller / Day Scholar.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CounselingList;

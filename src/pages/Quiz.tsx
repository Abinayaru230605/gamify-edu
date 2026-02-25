import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { quizQuestions } from "@/lib/mockData";

type QuizState = "menu" | "playing" | "result";

const subjects = Object.keys(quizQuestions);

const Quiz = () => {
  const [state, setState] = useState<QuizState>("menu");
  const [subject, setSubject] = useState(subjects[0]);
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [timer, setTimer] = useState(15);
  const [xpEarned, setXpEarned] = useState(0);

  const questions = quizQuestions[subject] || [];
  const question = questions[currentQ];

  const handleNext = useCallback(() => {
    if (currentQ < questions.length - 1) {
      setCurrentQ((p) => p + 1);
      setSelected(null);
      setTimer(15);
    } else {
      setState("result");
    }
  }, [currentQ, questions.length]);

  useEffect(() => {
    if (state !== "playing" || selected !== null) return;
    if (timer <= 0) {
      handleNext();
      return;
    }
    const id = setTimeout(() => setTimer((t) => t - 1), 1000);
    return () => clearTimeout(id);
  }, [timer, state, selected, handleNext]);

  const handleAnswer = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    if (idx === question.correct) {
      setScore((s) => s + question.points);
      setXpEarned((x) => x + question.points);
    }
    setTimeout(handleNext, 1200);
  };

  const startQuiz = () => {
    setCurrentQ(0);
    setScore(0);
    setSelected(null);
    setTimer(15);
    setXpEarned(0);
    setState("playing");
  };

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <h1 className="text-2xl font-display font-bold text-foreground">Quiz Battle ⚔️</h1>

      <AnimatePresence mode="wait">
        {state === "menu" && (
          <motion.div key="menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
            {/* Mode selection */}
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: "Solo Practice", icon: "🎯", desc: "Practice at your pace" },
                { label: "1v1 Duel", icon: "⚔️", desc: "Challenge a friend" },
                { label: "2v2 Battle", icon: "🛡️", desc: "Team up & compete" },
              ].map((mode) => (
                <button
                  key={mode.label}
                  onClick={mode.label === "Solo Practice" ? undefined : undefined}
                  className={`rounded-xl border p-5 text-left transition-all ${mode.label === "Solo Practice" ? "border-primary/40 bg-card glow-primary" : "border-border bg-card opacity-60 cursor-not-allowed"}`}
                >
                  <span className="text-3xl">{mode.icon}</span>
                  <p className="mt-2 text-sm font-semibold text-foreground">{mode.label}</p>
                  <p className="text-xs text-muted-foreground">{mode.desc}</p>
                  {mode.label !== "Solo Practice" && <p className="mt-1 text-xs text-primary">Coming soon</p>}
                </button>
              ))}
            </div>

            {/* Subject selection */}
            <div className="rounded-xl border border-border bg-card p-5">
              <h2 className="text-sm font-semibold text-foreground">Select Subject</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {subjects.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSubject(s)}
                    className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${subject === s ? "gradient-primary text-primary-foreground" : "border border-border text-foreground hover:border-primary/40"}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
              <button onClick={startQuiz} className="mt-4 w-full rounded-lg gradient-primary py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90">
                🚀 Start Quiz ({questions.length} questions)
              </button>
            </div>
          </motion.div>
        )}

        {state === "playing" && question && (
          <motion.div key="playing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-5">
            {/* Progress */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                Question {currentQ + 1}/{questions.length}
              </span>
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-xp">Score: {score}</span>
                <span className={`flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-bold ${timer <= 5 ? "border-destructive text-destructive animate-pulse-glow" : "border-primary text-primary"}`}>
                  {timer}
                </span>
              </div>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-muted">
              <div className="h-full gradient-primary transition-all" style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }} />
            </div>

            {/* Question */}
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="mb-2 flex items-center gap-2">
                <span className={`rounded px-2 py-0.5 text-xs font-medium ${question.difficulty === "easy" ? "bg-xp/20 text-xp" : question.difficulty === "medium" ? "bg-streak/20 text-streak" : "bg-destructive/20 text-destructive"}`}>
                  {question.difficulty}
                </span>
                <span className="text-xs text-muted-foreground">+{question.points} pts</span>
              </div>
              <h2 className="text-lg font-display font-semibold text-foreground">{question.question}</h2>
            </div>

            {/* Options */}
            <div className="grid gap-3">
              {question.options.map((opt, i) => {
                let optionClass = "border border-border bg-card hover:border-primary/40";
                if (selected !== null) {
                  if (i === question.correct) optionClass = "border-xp bg-xp/10";
                  else if (i === selected) optionClass = "border-destructive bg-destructive/10";
                }
                return (
                  <motion.button
                    key={i}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAnswer(i)}
                    className={`rounded-xl p-4 text-left text-sm font-medium text-foreground transition-all ${optionClass}`}
                  >
                    <span className="mr-3 inline-flex h-7 w-7 items-center justify-center rounded-md bg-muted text-xs font-bold text-muted-foreground">
                      {String.fromCharCode(65 + i)}
                    </span>
                    {opt}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}

        {state === "result" && (
          <motion.div key="result" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="rounded-xl border border-border bg-card p-8 text-center">
            <span className="text-6xl">{score > questions.reduce((s, q) => s + q.points, 0) * 0.7 ? "🏆" : score > 0 ? "👏" : "💪"}</span>
            <h2 className="mt-4 text-2xl font-display font-bold text-foreground">Quiz Complete!</h2>
            <p className="mt-2 text-4xl font-display font-bold text-gradient-primary">{score} pts</p>
            <p className="mt-2 text-sm text-xp">+{xpEarned} XP earned</p>
            <div className="mt-6 flex justify-center gap-3">
              <button onClick={startQuiz} className="rounded-lg gradient-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground">
                Play Again
              </button>
              <button onClick={() => setState("menu")} className="rounded-lg border border-border px-6 py-2.5 text-sm font-medium text-foreground hover:border-primary/40">
                Back to Menu
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Quiz;

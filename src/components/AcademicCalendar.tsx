import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getUpcomingEvents, getMonthEvents, formatDate, type CalendarEvent } from "@/lib/academicCalendarData";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const currentDate = new Date();
const currentMonth = months[currentDate.getMonth()];
const currentYear = currentDate.getFullYear();

const AcademicCalendar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [selectedYearLevel, setSelectedYearLevel] = useState<string>("I Year");
  const [view, setView] = useState<"upcoming" | "monthly">("upcoming");

  const yearLevels = ["I Year", "II/III Year", "IV Year"];

  const getEventColor = (type: string) => {
    const colors: Record<string, { bg: string; text: string; icon: string }> = {
      holiday: { bg: "bg-red-100", text: "text-red-700", icon: "🎉" },
      assessment: { bg: "bg-blue-100", text: "text-blue-700", icon: "📝" },
      exam: { bg: "bg-purple-100", text: "text-purple-700", icon: "📚" },
      practical: { bg: "bg-orange-100", text: "text-orange-700", icon: "🔬" },
      class: { bg: "bg-green-100", text: "text-green-700", icon: "👨‍🎓" },
      review: { bg: "bg-cyan-100", text: "text-cyan-700", icon: "✅" },
      event: { bg: "bg-yellow-100", text: "text-yellow-700", icon: "🎓" },
    };
    return colors[type] || colors.event;
  };

  const upcomingEvents = getUpcomingEvents(8, selectedYearLevel);
  const monthlyEvents = getMonthEvents(selectedMonth, selectedYear, selectedYearLevel);

  const handlePrevMonth = () => {
    const monthIndex = months.indexOf(selectedMonth);
    const newIndex = (monthIndex - 1 + 12) % 12;
    setSelectedMonth(months[newIndex]);
    setSelectedYear(newIndex === 11 ? selectedYear - 1 : selectedYear);
  };

  const handleNextMonth = () => {
    const monthIndex = months.indexOf(selectedMonth);
    const newIndex = (monthIndex + 1) % 12;
    setSelectedMonth(months[newIndex]);
    setSelectedYear(newIndex === 0 ? selectedYear + 1 : selectedYear);
  };

  return (
    <>
      {/* Floating Calendar Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg text-2xl hover:shadow-xl transition-shadow"
      >
        📅
      </motion.button>

      {/* Calendar Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-40 right-6 z-50 w-96 max-h-[600px] overflow-hidden rounded-2xl border border-border bg-card shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-white">Academic Calendar</h3>
                  <p className="text-xs text-white/80">2025-26</p>
                </div>
                <span className="text-3xl">📅</span>
              </div>
            </div>

            {/* View Tabs */}
            <div className="flex border-b border-border">
              <button
                onClick={() => setView("upcoming")}
                className={`flex-1 px-4 py-2.5 text-xs font-medium transition-colors ${
                  view === "upcoming"
                    ? "border-b-2 border-blue-500 text-blue-600"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Upcoming
              </button>
              <button
                onClick={() => setView("monthly")}
                className={`flex-1 px-4 py-2.5 text-xs font-medium transition-colors ${
                  view === "monthly"
                    ? "border-b-2 border-blue-500 text-blue-600"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Calendar
              </button>
            </div>

            {/* Year Level Filter */}
            <div className="px-4 py-3 border-b border-border">
              <p className="text-xs font-medium text-muted-foreground mb-2">Year Level:</p>
              <div className="flex gap-2">
                {yearLevels.map((level) => (
                  <button
                    key={level}
                    onClick={() => setSelectedYearLevel(level)}
                    className={`flex-1 rounded-lg px-2.5 py-1.5 text-xs font-medium transition-all ${
                      selectedYearLevel === level
                        ? "bg-blue-500 text-white"
                        : "border border-border text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4">
              {view === "upcoming" ? (
                <>
                  <h4 className="text-xs font-semibold text-foreground mb-3">📌 Next Events</h4>
                  <div className="space-y-2">
                    {upcomingEvents.length > 0 ? (
                      upcomingEvents.map((event, i) => {
                        const color = getEventColor(event.type);
                        return (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className={`${color.bg} rounded-lg p-2.5 border border-current border-opacity-20`}
                          >
                            <div className="flex items-start gap-2">
                              <span className="text-lg">{color.icon}</span>
                              <div className="min-w-0 flex-1">
                                <p className={`text-xs font-semibold ${color.text}`}>{event.event}</p>
                                <p className={`text-xs ${color.text} opacity-75`}>
                                  {formatDate(event.date, event.month, event.year)}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })
                    ) : (
                      <div className="flex h-20 items-center justify-center">
                        <p className="text-xs text-muted-foreground">No upcoming events</p>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  {/* Month Navigation */}
                  <div className="flex items-center justify-between mb-3">
                    <button
                      onClick={handlePrevMonth}
                      className="round rounded-lg border border-border p-1 hover:bg-muted"
                    >
                      ←
                    </button>
                    <h4 className="text-xs font-semibold text-foreground">
                      {selectedMonth} {selectedYear}
                    </h4>
                    <button
                      onClick={handleNextMonth}
                      className="rounded-lg border border-border p-1 hover:bg-muted"
                    >
                      →
                    </button>
                  </div>

                  {/* Events List */}
                  <div className="space-y-2">
                    {monthlyEvents.length > 0 ? (
                      monthlyEvents.map((event, i) => {
                        const color = getEventColor(event.type);
                        return (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className={`${color.bg} rounded-lg p-2.5 border border-current border-opacity-20`}
                          >
                            <div className="flex items-start gap-2">
                              <span className="text-lg">{color.icon}</span>
                              <div className="min-w-0 flex-1">
                                <p className={`text-xs font-semibold ${color.text}`}>{event.event}</p>
                                <p className={`text-xs ${color.text} opacity-75`}>{event.date} {event.day}</p>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })
                    ) : (
                      <div className="flex h-20 items-center justify-center">
                        <p className="text-xs text-muted-foreground">No events this month</p>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>

            {/* Legend */}
            <div className="border-t border-border px-4 py-3 bg-muted/50">
              <p className="text-xs font-medium text-muted-foreground mb-2">Event Types:</p>
              <div className="grid grid-cols-2 gap-1.5 text-xs">
                <div className="flex items-center gap-1.5">
                  <span>🎉</span>
                  <span className="text-muted-foreground">Holiday</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span>📝</span>
                  <span className="text-muted-foreground">Assessment</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span>📚</span>
                  <span className="text-muted-foreground">Exam</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span>🔬</span>
                  <span className="text-muted-foreground">Practical</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AcademicCalendar;

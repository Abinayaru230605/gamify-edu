import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: string;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! 👋 I'm EduBot. How can I help you today?",
      sender: "bot",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const botResponses: Record<string, string[]> = {
    course: [
      "📚 You can access all courses from the Courses page. Browse by semester and track your progress!",
      "📚 Check out our available courses - Data Structures, Signals & Systems, Control Engineering, Machine Learning, and more!",
      "📚 Want to learn something new? Head to the Courses page and start any course that interests you. You'll earn XP as you go!",
      "📚 Each course has multiple video lessons organized by topics. Start watching to boost your learning!",
    ],
    quiz: [
      "⚔️ Quiz Battle is our competitive learning feature! Test your knowledge and compete with other learners.",
      "⚔️ Challenge yourself with quizzes covering different difficulty levels - easy, medium, and hard!",
      "⚔️ Compete in Quiz Battles to earn points and climb the leaderboard. Ready to show what you know?",
      "⚔️ Quiz battles help reinforce what you've learned. Visit the Quiz page to test your skills!",
    ],
    xp: [
      "⚡ You earn XP by watching videos and completing quizzes. Every action helps you level up!",
      "⚡ XP (Experience Points) is the currency of learning! Watch videos = +XP, Complete quizzes = +XP.",
      "⚡ Check your XP in the sidebar. The more you learn, the more XP you accumulate!",
      "⚡ Use your XP to unlock amazing rewards. Want to know more about rewards?",
    ],
    reward: [
      "🎁 Redeem your XP for cool prizes - Netflix, Spotify, Amazon vouchers, Swiggy/Zomato, and more!",
      "🎁 The Rewards shop has tons of goodies! Check the Rewards page to see what you can unlock.",
      "🎁 Every reward has an XP cost. Save up XP and treat yourself to something awesome!",
      "🎁 Netflix subscriptions, gift cards, and exclusive deals - all available through your XP!",
    ],
    achievement: [
      "🏅 Achievements unlock when you complete milestones - watch videos, win quizzes, maintain streaks!",
      "🏅 Some achievements to work towards: Quiz Master (100% score), Week Warrior (7-day streak), and more!",
      "🏅 Each achievement gives you bonus XP. Start collecting them all!",
      "🏅 Check the Achievements page to see what you've earned and what's left to unlock!",
    ],
    leaderboard: [
      "🏆 The Leaderboard shows the top learners in your community. See where you rank!",
      "🏆 Compete with others and climb to the top! Your rank is based on XP earned.",
      "🏆 Check the Leaderboard to see who's grinding hard. Maybe that'll motivate you! 💪",
      "🏆 Want to reach the top? Keep learning, earning XP, and maintaining your streak!",
    ],
    streak: [
      "🔥 A streak is your consecutive learning days! The longer your streak, the better.",
      "🔥 Keep your learning streak alive by logging in and completing activities daily!",
      "🔥 The current streak record is 15 days! Can you beat it?",
      "🔥 Maintain a 7-day streak to unlock the 'Week Warrior' achievement!",
    ],
    level: [
      "📈 Your level increases as you earn more XP. Level up to unlock new features!",
      "📈 Currently you're at Level 12. Keep learning to reach higher levels!",
      "📈 Each level requires more XP than the last. The grind is worth it though! 🎯",
      "📈 Show off your level on the leaderboard and get recognition!",
    ],
    video: [
      "🎥 Videos are the core of learning here. Each video has a specific topic and duration.",
      "🎥 Watch videos to earn XP and learn new concepts. You can rewatch anytime!",
      "🎥 Comments let you discuss videos with other learners. Engage and share your thoughts!",
      "🎥 Video quality is top-notch with expert instructors. Happy learning!",
    ],
    help: [
      "I can help you with courses, quizzes, XP, rewards, achievements, leaderboard, streaks, levels, and videos!",
      "What specific topic would you like help with? Try asking about courses, rewards, or achievements!",
      "Feel free to ask me anything about learning, earning XP, or unlocking rewards!",
      "I'm here 24/7 to answer your questions. What's on your mind?",
    ],
    default: [
      "That's a great question! 🤔 Try asking me about courses, quizzes, XP, rewards, achievements, or leaderboard!",
      "Hmm, I might not have info on that specifically. Ask me about learning, XP, or unlocking rewards!",
      "I'm here to help! Ask about courses, quizzes, achievements, rewards, leaderboard, or streaks!",
      "Not sure about that one, but I can definitely help with learning-related questions! What would you like to know?",
    ],
  };

  const getResponse = (userMessage: string): string => {
    const lowerMsg = userMessage.toLowerCase();
    
    // Check for matching keywords
    for (const [key, responses] of Object.entries(botResponses)) {
      if (key !== "default" && (lowerMsg.includes(key) || (key === "help" && (lowerMsg.includes("help") || lowerMsg.includes("what can") || lowerMsg.includes("how can"))))) {
        return responses[Math.floor(Math.random() * responses.length)];
      }
    }
    
    // Default response
    return botResponses.default[Math.floor(Math.random() * botResponses.default.length)];
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getResponse(inputValue),
        sender: "bot",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 500);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full gradient-primary shadow-lg text-2xl hover:shadow-xl transition-shadow"
      >
        🤖
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-24 right-6 z-50 w-96 overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
          >
            {/* Header */}
            <div className="gradient-primary px-6 py-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🤖</span>
                <div>
                  <h3 className="text-sm font-semibold text-primary-foreground">EduBot</h3>
                  <p className="text-xs text-primary-foreground/80">Always here to help</p>
                </div>
              </div>
            </div>

            {/* Messages Container */}
            <div className="h-96 overflow-y-auto space-y-3 bg-background p-4">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-xs rounded-xl px-4 py-2 ${
                      msg.sender === "user"
                        ? "gradient-primary text-primary-foreground rounded-br-none"
                        : "border border-border bg-card text-foreground rounded-bl-none"
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <p className={`text-xs mt-1 ${msg.sender === "user" ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                      {msg.timestamp}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input Area */}
            <div className="border-t border-border bg-card p-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Ask me anything..."
                  className="flex-1 rounded-lg border border-border bg-muted px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                />
                <button
                  onClick={handleSendMessage}
                  className="rounded-lg gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
                >
                  Send
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;

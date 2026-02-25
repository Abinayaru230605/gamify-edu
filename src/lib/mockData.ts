export interface Course {
  id: string;
  code: string;
  title: string;
  credits: number;
  semester: number;
  progress: number;
  totalVideos: number;
  xpReward: number;
  topics: string[];
  icon: string;
}

export interface Video {
  id: string;
  title: string;
  youtubeId: string;
  topic: string;
  courseId: string;
  duration: string;
  views: number;
  likes: number;
  xp: number;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
  difficulty: 'easy' | 'medium' | 'hard';
  points: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  earned: boolean;
  xpReward: number;
}

export interface Reward {
  id: string;
  title: string;
  description: string;
  icon: string;
  xpCost: number;
  category: string;
}

export interface LeaderboardEntry {
  rank: number;
  name: string;
  avatar: string;
  xp: number;
  level: number;
  streak: number;
}

export const userProfile = {
  name: "Arjun Sharma",
  branch: "CSE",
  semester: 4,
  level: 12,
  xp: 2450,
  xpToNextLevel: 3000,
  streak: 7,
  totalVideosWatched: 84,
  quizzesCompleted: 23,
  rank: 5,
  avatar: "🧑‍💻",
};

export const courses: Course[] = [
  { id: "dsa", code: "CS201", title: "Data Structures & Algorithms", credits: 4, semester: 3, progress: 72, totalVideos: 45, xpReward: 50, topics: ["Arrays", "Linked Lists", "Trees", "Graphs", "Dynamic Programming", "Sorting"], icon: "🧮" },
  { id: "os", code: "CS301", title: "Signals and Systems", credits: 4, semester: 5, progress: 45, totalVideos: 38, xpReward: 50, topics: ["Continuous Signals", "Discrete Signals", "Fourier Transform", "Convolution", "System Analysis"], icon: "📡" },
  { id: "dbms", code: "ME302", title: "Control Engineering", credits: 3, semester: 4, progress: 88, totalVideos: 32, xpReward: 40, topics: ["System Response", "Transfer Functions", "Stability Analysis", "Root Locus", "Bode Plots"], icon: "⚙️" },
  { id: "cn", code: "CS304", title: "Miniproject Suggestions", credits: 3, semester: 5, progress: 30, totalVideos: 28, xpReward: 40, topics: ["Project Ideas", "Implementation Guide", "Best Practices", "Documentation", "Presentation"], icon: "💡" },
  { id: "ml", code: "CS401", title: "Machine Learning", credits: 4, semester: 7, progress: 15, totalVideos: 40, xpReward: 60, topics: ["Linear Regression", "Neural Networks", "SVM", "Decision Trees", "Clustering"], icon: "🤖" },
  { id: "math", code: "MA201", title: "Engineering Mathematics III", credits: 4, semester: 3, progress: 60, totalVideos: 35, xpReward: 45, topics: ["Laplace Transform", "Fourier Series", "Complex Analysis", "Probability"], icon: "📐" },
];

export const videos: Video[] = [
  { id: "v1", title: "Introduction to Arrays", youtubeId: "QJR1GPivOEo", topic: "Arrays", courseId: "dsa", duration: "18:24", views: 12400, likes: 890, xp: 25 },
  { id: "v2", title: "Array Operations - Insert, Delete, Search", youtubeId: "n60Dn0UsbEk", topic: "Arrays", courseId: "dsa", duration: "22:10", views: 9800, likes: 720, xp: 30 },
  { id: "v3", title: "Linked List Basics", youtubeId: "dmb1i4oN5oE", topic: "Linked Lists", courseId: "dsa", duration: "25:30", views: 11200, likes: 850, xp: 30 },
  { id: "v4", title: "Binary Search Trees", youtubeId: "cySVml6e_Fc", topic: "Trees", courseId: "dsa", duration: "30:15", views: 8900, likes: 670, xp: 35 },
  { id: "v5", title: "Graph Traversal - BFS & DFS", youtubeId: "tWVWeAqZ0WU", topic: "Graphs", courseId: "dsa", duration: "28:45", views: 15600, likes: 1200, xp: 40 },
  { id: "v6", title: "Dynamic Programming Introduction", youtubeId: "oBt53YbR9Kk", topic: "Dynamic Programming", courseId: "dsa", duration: "35:20", views: 20100, likes: 1800, xp: 50 },
  { id: "v7", title: "Introduction to Control Systems", youtubeId: "-1G2UcsBudU", topic: "System Response", courseId: "dbms", duration: "20:00", views: 18000, likes: 1400, xp: 25 },
  { id: "v8", title: "Transfer Functions and System Dynamics", youtubeId: "-1G2UcsBudU", topic: "Transfer Functions", courseId: "dbms", duration: "24:30", views: 9500, likes: 700, xp: 35 },
  { id: "v9", title: "Introduction to Signals and Systems", youtubeId: "0pJnSVKQqsE", topic: "Continuous Signals", courseId: "os", duration: "27:15", views: 7800, likes: 560, xp: 35 },
  { id: "v10", title: "Miniproject Ideas and Suggestions", youtubeId: "89Qy6P3NtC8", topic: "Project Ideas", courseId: "cn", duration: "19:45", views: 22000, likes: 1900, xp: 25 },
];

export const quizQuestions: Record<string, QuizQuestion[]> = {
  "Data Structures & Algorithms": [
    { question: "What is the time complexity of binary search?", options: ["O(n)", "O(log n)", "O(n²)", "O(1)"], correct: 1, difficulty: "easy", points: 50 },
    { question: "Which data structure uses LIFO?", options: ["Queue", "Stack", "Array", "Linked List"], correct: 1, difficulty: "easy", points: 50 },
    { question: "What is the worst-case complexity of QuickSort?", options: ["O(n log n)", "O(n)", "O(n²)", "O(log n)"], correct: 2, difficulty: "medium", points: 75 },
    { question: "Which traversal visits root first?", options: ["Inorder", "Preorder", "Postorder", "Level-order"], correct: 1, difficulty: "easy", points: 50 },
    { question: "Dijkstra's algorithm finds?", options: ["MST", "Shortest path", "Longest path", "Hamiltonian path"], correct: 1, difficulty: "medium", points: 75 },
  ],
  "Database Management Systems": [
    { question: "What does ACID stand for in DBMS?", options: ["Atomicity, Consistency, Isolation, Durability", "Access, Control, Index, Data", "Atomic, Concurrent, Independent, Direct", "None of the above"], correct: 0, difficulty: "easy", points: 50 },
    { question: "Which normal form eliminates transitive dependency?", options: ["1NF", "2NF", "3NF", "BCNF"], correct: 2, difficulty: "medium", points: 75 },
    { question: "SQL JOIN that returns all rows from both tables?", options: ["INNER JOIN", "LEFT JOIN", "FULL OUTER JOIN", "CROSS JOIN"], correct: 2, difficulty: "hard", points: 100 },
  ],
};

export const achievements: Achievement[] = [
  { id: "a1", title: "First Steps", description: "Watch your first video", icon: "🎬", earned: true, xpReward: 50 },
  { id: "a2", title: "Quiz Master", description: "Score 100% on any quiz", icon: "🏆", earned: true, xpReward: 100 },
  { id: "a3", title: "Streak Starter", description: "Maintain a 3-day streak", icon: "🔥", earned: true, xpReward: 75 },
  { id: "a4", title: "Week Warrior", description: "Maintain a 7-day streak", icon: "⚡", earned: true, xpReward: 150 },
  { id: "a5", title: "Socialite", description: "Leave 10 comments", icon: "💬", earned: false, xpReward: 100 },
  { id: "a6", title: "Knowledge Seeker", description: "Complete 5 courses", icon: "📚", earned: false, xpReward: 500 },
  { id: "a7", title: "Battle Champion", description: "Win 10 quiz battles", icon: "⚔️", earned: false, xpReward: 200 },
  { id: "a8", title: "Legendary", description: "Reach Level 50", icon: "👑", earned: false, xpReward: 1000 },
];

export const rewards: Reward[] = [
  { id: "r1", title: "Swiggy ₹100 Off", description: "₹100 off on orders above ₹300", icon: "🍔", xpCost: 500, category: "Food" },
  { id: "r2", title: "Amazon ₹200 Voucher", description: "₹200 gift card for Amazon India", icon: "🛒", xpCost: 1000, category: "Shopping" },
  { id: "r3", title: "Netflix 1 Month", description: "1 month Netflix Basic subscription", icon: "🎬", xpCost: 2500, category: "Entertainment" },
  { id: "r4", title: "Spotify Premium 1 Month", description: "1 month Spotify Premium", icon: "🎵", xpCost: 1500, category: "Entertainment" },
  { id: "r5", title: "Zomato ₹150 Off", description: "₹150 off on orders above ₹400", icon: "🍕", xpCost: 600, category: "Food" },
  { id: "r6", title: "Udemy Course Free", description: "Any Udemy course up to ₹1500", icon: "🎓", xpCost: 2000, category: "Education" },
];

export const leaderboard: LeaderboardEntry[] = [
  { rank: 1, name: "Priya Patel", avatar: "👩‍💻", xp: 4200, level: 18, streak: 15 },
  { rank: 2, name: "Rahul Kumar", avatar: "👨‍🔬", xp: 3800, level: 16, streak: 12 },
  { rank: 3, name: "Sneha Gupta", avatar: "👩‍🎓", xp: 3500, level: 15, streak: 10 },
  { rank: 4, name: "Amit Verma", avatar: "🧑‍💻", xp: 2800, level: 13, streak: 8 },
  { rank: 5, name: "Arjun Sharma", avatar: "🧑‍💻", xp: 2450, level: 12, streak: 7 },
  { rank: 6, name: "Kavya Nair", avatar: "👩‍🔧", xp: 2200, level: 11, streak: 5 },
  { rank: 7, name: "Vikram Singh", avatar: "👨‍💼", xp: 1900, level: 10, streak: 4 },
  { rank: 8, name: "Anjali Desai", avatar: "👩‍🏫", xp: 1750, level: 9, streak: 6 },
  { rank: 9, name: "Rohan Joshi", avatar: "👨‍🎓", xp: 1500, level: 8, streak: 3 },
  { rank: 10, name: "Meera Rao", avatar: "👩‍💻", xp: 1200, level: 7, streak: 2 },
];

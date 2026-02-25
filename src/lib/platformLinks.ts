export interface PlatformLink {
  id: string;
  name: string;
  url: string;
  icon: string;
  color: string;
  description: string;
}

export const platformLinks: PlatformLink[] = [
  {
    id: "skillrack",
    name: "Skillrack",
    url: "https://skillrack.com/",
    icon: "💻",
    color: "from-blue-500 to-blue-600",
    description: "Online coding platform for programming practice",
  },
  {
    id: "pragati",
    name: "Pragati",
    url: "https://pragati.rmkec.ac.in/app/auth-app/login/",
    icon: "📚",
    color: "from-purple-500 to-purple-600",
    description: "Academic portal for course materials",
  },
  {
    id: "nextgen",
    name: "NextGen",
    url: "https://nextgen.rmkec.ac.in/",
    icon: "🚀",
    color: "from-green-500 to-green-600",
    description: "Next generation learning platform",
  },
  {
    id: "imneo",
    name: "iMNEO",
    url: "https://rmk685.examly.io/login",
    icon: "📝",
    color: "from-orange-500 to-orange-600",
    description: "Exam and assessment platform",
  },
];

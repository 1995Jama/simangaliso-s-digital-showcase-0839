export const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export const CONTACT = {
  email: "smangamthembu1611@yahoo.com",
  phone: "+27 62 083 4437",
  location: "Pretoria, South Africa",
  github: null as string | null,
  linkedin: null as string | null,
};

export type SkillLevel = "Learning" | "Developing" | "Working Knowledge";

export const SOCIAL_SKILLS = [
  "Counselling",
  "Psychosocial Support",
  "Child and Youth Care",
  "Youth Development",
  "Crisis Intervention",
  "Advocacy",
  "Community Engagement",
  "Group Facilitation",
  "Programme Implementation",
  "Mental Health Support",
];

export const PROFESSIONAL_SKILLS = [
  "Communication",
  "Team Leadership",
  "Active Listening",
  "Empathy",
  "Conflict Resolution",
  "Problem-Solving",
  "Research",
  "Data Collection",
  "Programme Planning",
  "Interpersonal Skills",
];

export const TECH_SKILLS: { name: string; level: SkillLevel; icon: string }[] = [
  { name: "Artificial Intelligence", level: "Developing", icon: "Brain" },
  { name: "Python", level: "Learning", icon: "Code2" },
  { name: "Coding", level: "Learning", icon: "Terminal" },
  { name: "GitHub", level: "Learning", icon: "GitBranch" },
  { name: "Visual Studio Code", level: "Developing", icon: "FileCode" },
  { name: "ChatGPT", level: "Working Knowledge", icon: "MessageSquare" },
  { name: "Lovable", level: "Developing", icon: "Sparkles" },
  { name: "Microsoft 365", level: "Working Knowledge", icon: "LayoutGrid" },
  { name: "Google Forms", level: "Working Knowledge", icon: "ClipboardList" },
  { name: "SurveyMonkey", level: "Working Knowledge", icon: "BarChart3" },
  { name: "Notion", level: "Developing", icon: "NotebookPen" },
];

export type Project = {
  id: string;
  title: string;
  category: string;
  badge: string;
  description: string;
  tools: string[];
  skills: string[];
  role: string;
  keyLearning: string;
  impact: string;
};

export const PROJECTS: Project[] = [
  {
    id: "fnb-app-academy",
    title: "FNB App Academy",
    category: "Technology | Coding | App Development",
    badge: "Technology Project",
    description:
      "Participated in the FNB App Academy, an online coding and application-development programme focused on developing practical technology skills and introducing participants to modern digital development tools. The programme provided an opportunity to explore coding, artificial intelligence, application development, problem-solving, and digital collaboration.",
    tools: ["Python", "Artificial Intelligence", "ChatGPT", "Notion", "Visual Studio Code", "Coding"],
    skills: [
      "Programming fundamentals",
      "Problem-solving",
      "Application development",
      "AI-assisted development",
      "Digital collaboration",
      "Technology research",
    ],
    role: "Participant in an online coding and application-development programme, working through learning modules, practical exercises, and collaborative activities.",
    keyLearning:
      "Built a foundation in programming concepts and learned how AI-assisted tools can support the development process from idea to working application.",
    impact:
      "Strengthened my ability to approach problems in a structured, technical way and supported my transition into digital and technology work.",
  },
  {
    id: "capaciti-ai-accelerator",
    title: "Capaciti AI Accelerator",
    category: "Artificial Intelligence | Digital Skills",
    badge: "AI & Digital Project",
    description:
      "Participated in the Capaciti AI Accelerator programme, an intensive learning experience focused on artificial intelligence and digital workplace skills. The programme provided practical exposure to emerging AI technologies, digital productivity tools, collaboration platforms, and AI-assisted workflows.",
    tools: ["ChatGPT", "Lovable", "GitHub", "Microsoft 365", "Artificial Intelligence"],
    skills: [
      "AI literacy",
      "Digital productivity",
      "AI-assisted problem-solving",
      "Collaboration",
      "Emerging technology awareness",
      "Digital workplace skills",
    ],
    role: "Programme participant engaging with AI tools, digital workplace platforms, and collaborative learning activities.",
    keyLearning:
      "Developed practical AI literacy — understanding where AI tools add real value in a workplace and how to use them responsibly.",
    impact:
      "Positioned me to bring digital and AI-supported ways of working into people-centred and social-impact environments.",
  },
  {
    id: "mtv-shuga-research",
    title: "MTV Shuga Research Project",
    category: "Research | Youth Development | Social Impact",
    badge: "Social Impact Project",
    description:
      "Participated in an educational-entertainment research pilot focused on improving sexual and reproductive health knowledge, behaviour, and awareness among young people across Africa. The project involved engaging young people, facilitating discussions, collecting information, supporting research activities, and using digital tools to assist with data collection.",
    tools: ["Microsoft 365", "Google Forms", "SurveyMonkey"],
    skills: [
      "Research",
      "Data collection",
      "Youth engagement",
      "Communication",
      "Survey development",
      "Digital research",
      "Community engagement",
    ],
    role: "Supported research activities, engaged young people in discussions, and assisted with digital data collection.",
    keyLearning:
      "Learned how research and media can work together to shift knowledge and behaviour among young people.",
    impact:
      "Contributed to work aimed at improving health awareness and decision-making among young people.",
  },
];

export const EXPERIENCE = [
  {
    role: "Psychosocial Counsellor",
    org: "TBHIVCARE",
    period: "Placeholder — dates to be confirmed",
    points: [
      "Conduct individual and group counselling sessions.",
      "Support youth experiencing personal, social, emotional, and behavioural challenges.",
      "Identify factors affecting school performance.",
      "Provide targeted counselling interventions.",
      "Observe behaviour and social development.",
      "Develop individualised treatment and support plans.",
      "Collaborate with parents, teachers, and other professionals.",
      "Maintain confidential client records.",
      "Provide crisis intervention and referrals.",
      "Facilitate workshops on conflict resolution, problem-solving, self-esteem, and personal development.",
    ],
  },
  {
    role: "Peer Educator",
    org: "MTV Shuga Programme",
    period: "October 2022 – July 2024",
    points: [
      "Facilitated peer education sessions.",
      "Led discussions around HIV/AIDS, relationships, sexuality, stigma, and gender-based violence.",
      "Encouraged young people to reflect on personal choices and behaviours.",
      "Promoted healthy and respectful relationships.",
      "Supported youth communication and decision-making.",
    ],
  },
  {
    role: "Child and Youth Care Worker",
    org: "NACCW",
    period: "February 2021 – September 2022",
    points: [
      "Provided care and supervision to children and youth.",
      "Supported physical, emotional, cognitive, and social development.",
      "Applied developmental life-space work.",
      "Planned and implemented developmental programmes.",
      "Provided educational, recreational, and therapeutic activities.",
      "Promoted children's rights and participation.",
      "Maintained progress and incident documentation.",
      "Worked with families, colleagues, and relevant professionals.",
    ],
  },
];

export const EDUCATION = [
  {
    qualification: "Bachelor of Social Work",
    institution: "University of KwaZulu-Natal",
    year: "2020",
    icon: "GraduationCap",
  },
  {
    qualification: "Postgraduate Diploma in Human Resource Management",
    institution: "University of KwaZulu-Natal",
    year: "2021",
    icon: "BookOpen",
  },
  {
    qualification: "National Senior Certificate",
    institution: "",
    year: "2014",
    icon: "School",
  },
];

export const CERTIFICATIONS = [
  { name: "SACSSP Certificate", year: "2020" },
  { name: "Occupational Health and Safety Certificate", year: "2022" },
];

export const VALUES = [
  { name: "Empathy", desc: "Meeting people with understanding and care.", icon: "Heart" },
  { name: "Integrity", desc: "Doing what is right, consistently.", icon: "ShieldCheck" },
  { name: "Respect", desc: "Valuing every person's dignity and voice.", icon: "HandHeart" },
  { name: "Accountability", desc: "Taking ownership of my work and outcomes.", icon: "CircleCheckBig" },
  { name: "Continuous Learning", desc: "Always building new knowledge and skills.", icon: "TrendingUp" },
  { name: "Collaboration", desc: "Achieving more with teams and communities.", icon: "Users" },
  { name: "Innovation", desc: "Looking for better, smarter ways forward.", icon: "Lightbulb" },
  { name: "Service", desc: "Putting people and community first.", icon: "Handshake" },
];

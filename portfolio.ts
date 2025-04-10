import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Nathaniel Ofosu-Ansah Addo",
  title: "Hi all, I'm Nathaniel",
  description:
    "Certified Software Engineer with a passion for innovative solutions. I love crafting scalable, user-friendly applications and exploring new tech frontiers.",
  resumeLink: "#",
};

export const openSource = {
  githubUserName: "AddoNathaniel",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:nathanieloaaddo@gmail.com",
  linkedin: "https://www.linkedin.com/in/addo-nathaniel-ofosu-ansah",
  github: "https://github.com/AddoNathaniel",
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle:
    "Certified Software Engineer with expertise in Full Stack & AI Development",
  data: [
    {
      title: "Full Stack & AI Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path to Lottie Animation JSON File
      skills: [
        emoji("⚡ Developing scalable web applications with Flask and React"),
        emoji("⚡ Building AI solutions using TensorFlow"),
        emoji("⚡ Creating innovative mental health chatbots"),
      ],
      softwareSkills: [
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "Flask",
          iconifyTag: "logos:flask",
        },
        {
          skillName: "TensorFlow",
          iconifyTag: "logos:tensorflow",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "React",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Next.js",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
        {
          skillName: "GitHub",
          iconifyTag: "akar-icons:github-fill",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design",
    progressPercentage: "85",
  },
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "University of Ghana, Legon",
    subHeader: "BSc in Computer Science (Expected Aug 2026)",
    duration: "2022 - 2026",
    desc: "",
    grade: "",
    descBullets: [],
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Software Engineer",
    company: "Think Hub Ghana",
    companyLogo: "/img/icons/common/thinkhub.png", // Replace with actual logo path
    date: "Present",
    desc: "Developing and maintaining innovative software solutions by leveraging modern web and AI technologies.",
  },
  // {
  //   role: "Co-founder & Software Engineer",
  //   company: "THERAPYNE",
  //   companyLogo: "/img/icons/common/therapyne.png", // Replace with actual logo path
  //   date: "Present",
  //   desc: "Co-founded a mental health chatbot initiative integrating TensorFlow for AI insights and Flask for robust backend services.",
  // },
  {
    role: "Co-founder",
    company: "The Banku Boys",
    companyLogo: "/img/icons/common/bankuboys.png", // Replace with actual logo path
    date: "Present",
    desc: "Driving innovative digital projects and fostering a collaborative environment to build community-focused solutions.",
  },
  {
    role: "Lead Software Engineer",
    company: "AkwaabaHR Solutions",
    companyLogo: "/img/icons/common/akwaabahrs.png", // Replace with actual logo path
    date: "Present",
    desc: "Leading teams in designing and implementing scalable HR solutions with a focus on cutting-edge technology integration.",
  },
];

export const projects: ProjectType[] = [
  {
    name: "Mental Health Chatbot",
    desc: "An AI-driven conversational bot designed to support mental health. Built with TensorFlow for natural language processing and Flask for backend integration.",
    github: "https://github.com/AddoNathaniel/mental-health-chatbot",
    link: "#",
  },
  {
    name: "AI Conversational Bot",
    desc: "Developed an AI-driven conversational bot using Next.js and Dialogflow to streamline university admission processes.",
    link: "#",
  },
  {
    name: "Facial Recognition Attendance Manager",
    desc: "Engineered a real-time attendance management system using AI-based facial recognition, ensuring robust performance and scalability.",
    link: "#",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Colleague",
    role: "Software Engineer at Think Hub Ghana",
    feedback:
      "Nathaniel is a highly skilled engineer with a knack for building innovative and scalable solutions. His expertise in AI and web development is outstanding.",
  },
];

export const seoData: SEODataType = {
  title: "Nathaniel Ofosu-Ansah Addo",
  description: greetings.description,
  author: "Nathaniel Ofosu-Ansah Addo",
  image: "https://avatars.githubusercontent.com/u/YourAvatar", // Update with your actual image URL
  url: "https://nathanieloaaddo.vercel.com", // Update with your portfolio URL
  keywords: [
    "Nathaniel",
    "Software Engineer",
    "Mental Health Chatbot",
    "TensorFlow",
    "Flask",
    "Full Stack Developer",
    "Portfolio",
  ],
};

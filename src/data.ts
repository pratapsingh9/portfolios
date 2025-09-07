import { PortfolioData } from './types';

// MOCK DATA - Replace with your own information
export const portfolioData: PortfolioData = {
  name: "Pratap Singh",
  role: "Computer Science Student",
  bio: "I believe in growth through dedication and curiosity. I enjoy solving problems, thinking deeply about how things work, and finding better ways to approach life and work. My habits of consistency, patience, and attention to detail help me deliver high-quality results.",
  contact: {
    email: "pratap.09082005@gmail.com",
    github: "https://github.com/pratapsingh9",
    linkedin: "https://linkedin.com/in/pratapsingh9",
    leetcode: "https://leetcode.com/u/pratapsingh2005",
    codechef: "https://www.codechef.com/users/hannu_98",
  },
  projects: [
    {
      title: "Quirzy App",
      date: "15 July, 2024",
      description: "An AI-powered data visualization tool that allows users to generate interactive charts and reports through natural language prompts.",
      tags: ["Python", "Flask", "D3.js", "Machine Learning"],
    },
    {
      title: "CodeConnect",
      date: "05 Nov, 2023",
      description: "A social platform for developers to share snippets, ask questions, and collaborate on open-source projects.",
      tags: ["Vue.js", "Firebase", "TypeScript"],
    },
     {
      title: "HealthTrack Mobile",
      date: "19 Sep, 2023",
      description: "A cross-platform mobile app for tracking fitness goals, daily calorie intake, and workout routines.",
      tags: ["React Native", "Expo", "SQLite"],
    },
  ],
  skills: {
      technical: [
          {
              title: "Full-Stack Development",
              skills: ["React", "Next.js", "Flutter", "Node.js", "Python", "FastAPI"]
          },
          {
              title: "Cloud & DevOps",
              skills: ["AWS", "Azure", "Cloudflare", "Git", "Docker", "APIs"]
          },
          {
              title: "Databases",
              skills: ["PostgreSQL", "DBMS", "SQL"]
          },
          {
              title: "System",
              skills: ["System Design", "System Debugging"]
          }
      ],
      nonTechnical: [
          "Leadership", "Persistence", "Structured Problem Solving", "Curiosity", "Modern Design Mindset", "Communication"
      ]
  },
  certifications: [
    {
      title: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      date: "June 2025",
    },
    {
      title: "AWS Academy Cloud Foundations",
      issuer: "Amazon Web Services",
      date: "April 2025",
    },
    {
      title: "GitHub Foundations",
      issuer: "GitHub",
      date: "April 2025",
    },{
      title: "AWS Academy Cloud Operations",
      issuer: "Amazon Web Services",
      date: "April 2025",
    },{
      title: "OCI Foundations Associate",
      issuer: "Oracle",
      date: "July 2025",
    },{
      title: "Oracle Cloud Infrastructure 2025 AI Foundations Associate",
      issuer: "Oracle",
      date: "July 2025",
    }
  ]
};

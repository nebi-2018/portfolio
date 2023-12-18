import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import rest from "@/public/rest.png";
import scanshop from "@/public/scanshop.jpg";
import spaceflight from "@/public/spaceflight.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated University",
    location: "Helsinki, FI",
    description: "I graduated after 4 years of studying.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Software Developer Intern",
    location: "Helsinki, FI",
    description: "I worked as a software developer intern for 4 months.",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "IT Support Intern",
    location: "Helsinki, FI",
    description:
      "I have worked as an IT Support Engineer intern for 4 months at Helsinki Metropolia University of Applied Sciences. I was installing softwares, troubleshooting and fixing diffrent desktops and laptops problems.",
    icon: React.createElement(FaReact),
    date: "2022",
  },
] as const;

export const projectsData = [
  {
    title: "Software developer intern",
    description:
      "I worked as a back-end developer on this touchless startup project for 4 months.",
    tags: ["Nodejs", "Expressjs", "MongoDB", "JWT"],
    imageUrl: rest,
  },
  {
    title: "Scan&Pay",
    description:
      "Shopping android app by scanning the items from the shelf. I have developed both the font-end and back-end. It has features like scanning the barcode, online payment, order history and collecting receipts.",
    tags: [
      "Flutter",
      "TypeScript",
      "Nodejs",
      "MongoDB",
      "Kubernetes",
      "Docker",
      "Digital Ocean Cloud",
    ],
    imageUrl: scanshop,
  },
  {
    title: "Spaceflight news",
    description:
      "An android mobile app for reading a spaceflight news. I have developed the front-end using the public Api.",
    tags: [
      "Kotlin",
      "Android",
      "Flow",
      "Coroutines",
      "MVVM",
      "retrofit2",
      "dagger-hilt",
      "room-database",
    ],
    imageUrl: spaceflight,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Android",
  "Java",
  "Kotlin",
  "Flutter",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "React Native",
  "Framer Motion",
] as const;

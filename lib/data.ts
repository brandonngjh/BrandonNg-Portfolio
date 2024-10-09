import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import codeToImpactImg from "@/public/codeToImpact.png";
import hrAppImg from "@/public/hrApp.png";
import bulkifyImg from "@/public/bulkify.png";
import fpgaGameImg from "@/public/fpgaGame.png";
import azendianLogo from "@/public/azendianLogo.png"
import stickEmLogo from "@/public/stickEmLogo.png"

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

export const projectsData = [
  {
    title: "GIC CODETOIMPACT Hackathon 2024",
    description:
      "Full-stack MERN app developed to streamline instrument verification, limit tracking, and request submission for traders. Integrated AI-powered search, real-time data updates, and role-based authentication. Deployed on AWS with Docker and GitHub Actions.",
    tags: ["React", "Node.js", "MongoDB", "WebSocket", "AWS", "Docker"],
    icons: ["logos:react", "logos:nodejs-icon", "logos:mongodb-icon", "logos:websocket", "logos:aws", "logos:docker-icon"],
    imageUrl: codeToImpactImg,
    githubLink: null,
    demoLink: null
  },
  {
    title: "HR Training Management App",
    description:
      "Comprehensive HR management platform built with React, Node.js, and MySQL to automate and streamline employee training tasks. The app achieved 85% test coverage, including unit, integration, and end-to-end tests, using Jest and Cypress.",
    tags: ["React", "Node.js", "MySQL", "TypeScript", "Jest", "Cypress"],
    icons: ["logos:react", "logos:nodejs-icon", "logos:mysql", "logos:typescript-icon", "logos:jest", "logos:cypress-icon"],
    imageUrl: hrAppImg,
    githubLink: "https://github.com/brandonngjh/TrainingMgmtWebApp",
    demoLink: "https://www.youtube.com/watch?v=4RTHZGaZaH8"
  },
  {
    title: "Bulkify Android App",
    description:
      "Bulkify is an Android app designed to streamline bulk purchasing for organizations, using Java and integrating an IoT smart locker for secure item retrieval via QR code. The project won 3rd place in Singtel InfoSys & Programming Awards.",
    tags: ["Java", "Android", "Firebase"],
    icons: ["logos:java", "logos:android-icon", "logos:firebase"],
    imageUrl: bulkifyImg,
    githubLink: "https://github.com/zedithx/JavaAndroidFE",
    demoLink: "https://www.youtube.com/watch?v=ccrcRkjByKM"
  },
  {
    title: "Electronic Game on Custom CPU",
    description:
      "A digital recreation of the Loopin' Louie game, developed in assembly on a custom RISC-based CPU using Lucid on an FPGA. The game features I/O, external LEDs and 7-segment displays and received the ISTD Outstanding Computation Structures Project Award.",
    tags: ["Assembly", "FPGA", "Lucid"],
    icons: null,
    imageUrl: fpgaGameImg,
    githubLink: "https://github.com/Marcooos05/Techno-Twirl",
    demoLink: "https://www.youtube.com/watch?v=Nz6tMy6s1Ws"
  },
] as const;

export const experiencesData = [
  {
    title: "Full Stack Developer Intern",
    location: "Azendian Solutions, Singapore",
    description:
      "Developed pages with ReactJS and REST APIs using Node.js for Keppel DHCS, automating sensor data migration with Python.",
    icon: azendianLogo, 
    date: "Aug 2024 - Present",
  },
  {
    title: "Operations and Workshop Management Intern",
    location: "Stick ‘Em, Singapore",
    description:
      "Created educational materials, hosted STEM workshops, managed the production of robotic kits, and optimized 3D printers.",
    icon: stickEmLogo,
    date: "May 2023 - Aug 2023",
  },
] as const;

export const skillsData = [
  { name: "Python", icon: "logos:python" },
  { name: "C", icon: "logos:c" },
  { name: "Java", icon: "logos:java" },
  { name: "JavaScript", icon: "logos:javascript" },
  { name: "TypeScript", icon: "logos:typescript-icon" },
  { name: "HTML", icon: "vscode-icons:file-type-html" },
  { name: "CSS", icon: "vscode-icons:file-type-css" },
  { name: "React", icon: "logos:react" },
  { name: "Node.js", icon: "logos:nodejs-icon" },
  { name: "Next.js", icon: "logos:nextjs-icon" },
  { name: "MySQL", icon: "logos:mysql" },
  { name: "PostgreSQL", icon: "logos:postgresql" },
  { name: "MongoDB", icon: "logos:mongodb-icon" },
  { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
  { name: "Docker", icon: "logos:docker-icon" },
] as const;
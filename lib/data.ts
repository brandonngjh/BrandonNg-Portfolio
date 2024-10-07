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
      "Full-stack MERN app with real-time data updates and concurrent processing. Deployed on AWS using Docker and GitHub Actions.",
    tags: ["React", "Node.js", "MongoDB", "WebSocket", "AWS", "Docker"],
    imageUrl: codeToImpactImg,
  },
  {
    title: "HR Training Management App",
    description:
      "Full-stack app with React, Node.js, and MySQL. Comprehensive testing with unit, integration and end-to-end tests.",
    tags: ["React", "Node.js", "MySQL", "TypeScript", "Jest", "Cypress"],
    imageUrl: hrAppImg,
  },
  {
    title: "Bulkify Android App",
    description:
      "Android bulk-buy android app in Java, integrated with an IoT smart locker using QR code scanning via Raspberry Pi.",
    tags: ["Java", "Android", "Firebase"],
    imageUrl: bulkifyImg,
  },
  {
    title: "Electronic Game on Custom CPU",
    description:
      "Digital Loopin' Louie game using a custom CPU on FPGA, programmed in Assembly, with external LEDs and 7-segment displays.",
    tags: ["Assembly", "FPGA", "Lucid"],
    imageUrl: fpgaGameImg,
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
      "Created educational materials and hosted STEM workshops, managed production of robotic kits, and optimized 3D printers.",
    icon: stickEmLogo,
    date: "May 2023 - Aug 2023",
  },
] as const;

export const skillsData = [
  "Python",
  "C",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "React",
  "Node.js",
  "Next.js",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Tailwind CSS",
] as const;
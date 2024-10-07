"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I’m a{" "}
        <span className="font-medium">Year 3 Computer Science student</span> at
        the Singapore University of Technology and Design (SUTD) and aspiring{" "}
        <span className="font-medium">full-stack engineer</span>, with an
        inclination toward{" "}
        <span className="font-medium">backend development</span>. While
        backend systems are my primary focus, I also develop my{" "}
        <span className="font-medium">frontend skills</span> and build a strong
        foundation in <span className="font-medium">computer systems</span>.
      </p>

      <p className="mb-3">
        Passionate about solving complex problems and building scalable
        solutions, I am always eager to learn and experiment with new
        technologies. I've worked with various{" "}
        <span className="font-medium">tech stacks</span> and{" "}
        <span className="font-medium">database systems</span> to continuously
        improve my skills.
      </p>

      <p className="mb-3">
        Outside of coding, I stay active through{" "}
        <span className="font-medium">football</span>,{" "}
        <span className="font-medium">gymming</span>, and{" "}
        <span className="font-medium">dancing</span>, and I’m always eager to
        try new sports and activities.
      </p>
    </motion.section>
  );
}

"use client";

import React from "react";
import SectionHeading from "./common/section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index },
  }),
};

const Skills = () => {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            className="relative px-5 py-3 group"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            <Icon
              icon={skill.icon}
              className="text-5xl md:text-7xl transition-transform duration-300 group-hover:scale-110"
            />
            <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 text-sm text-gray-950 dark:text-gray-50 opacity-0 transition-opacity duration-300 whitespace-nowrap group-hover:opacity-100">
              {skill.name}
            </span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;

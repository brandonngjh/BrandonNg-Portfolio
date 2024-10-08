"use client";

import { projectsData } from "@/lib/data";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

type ProjectProps = (typeof projectsData)[number];

const Project = ({ title, description, tags, imageUrl }: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });

  useEffect(() => {
    return scrollYProgress.onChange((progress) => {
      if (progress > 0.3) {
        controls.start({ opacity: 1, scale: 1 });
      } else {
        controls.start({ opacity: 0, scale: 0.8 });
      }
    });
  }, [scrollYProgress, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[70rem] border border-black/5 rounded-lg overflow-hidden relative sm:h-[20rem] hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20 flex flex-col sm:flex-row">
        <div className="flex-1 p-6 sm:p-10 flex flex-col justify-between order-2 sm:order-1">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative w-full sm:p-4 sm:w-[50%] sm:h-auto order-1 sm:order-2 flex items-center justify-center">
          <Image
            src={imageUrl}
            alt={`${title} project`}
            layout="responsive"
            objectFit="cover"
            quality={95}
            className="rounded-t-lg shadow-l transition group-hover:scale-[1.04]"
          />
        </div>
      </section>
    </motion.div>
  );
};

export default Project;

"use client";

import { projectsData } from "@/lib/data";
import { Icon } from "@iconify/react";
import { motion, useAnimation, useScroll } from "framer-motion";
import React, { useEffect, useRef } from "react";
import GithubBtn from "./github-btn";
import DemoBtn from "./demoLink";
import CustomSwiper from "./project-swiper";

type ProjectProps = (typeof projectsData)[number];

const Project = ({
  title,
  description,
  tags,
  icons,
  imageUrl,
  githubLink,
  demoLink,
}: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.25 1", "0.75 1"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((progress) => {
      if (progress > 0.5) {
        controls.start({ opacity: 1, scale: 1 });
      } else {
        controls.start({ opacity: 0, scale: 0.8 });
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      className="group/project mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[70rem] border border-black/5 rounded-lg overflow-hidden relative sm:h-[20rem] hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20 flex flex-col sm:flex-row">
        <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between order-2 sm:order-1">
          <h3 className="text-2xl font-semibold mb-4">{title}</h3>
          <div className="flex flex-wrap mb-2">
            <p className="font-semibold text-gray-500 dark:text-white/70">
              Made with:{" "}
            </p>
            <ul className="flex gap-2">
              {icons
                ? icons.map((icon, iconIndex) => (
                    <div key={iconIndex} className="relative mx-1 group/logo">
                      <Icon icon={icon} className="text-2xl" />
                      <span className="absolute left-1/2 transform -translate-x-1/2 text-sm bg-gray-100 text-gray-800 dark:text-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 px-2 py-1 rounded opacity-0 transition-opacity duration-300 group-hover/logo:opacity-100">
                        {tags[iconIndex]}
                      </span>
                    </div>
                  ))
                : tags.map((tag, tagIndex) => (
                    <li
                      key={tagIndex}
                      className="px-2 bg-gray-200 text-gray-700 dark:bg-white/10 dark:text-white/70 rounded-md"
                    >
                      {tag}
                    </li>
                  ))}
            </ul>
          </div>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <div className="flex sm:mt-auto gap-2">
            {demoLink && <DemoBtn demoLink={demoLink} />}
            {githubLink && <GithubBtn githubLink={githubLink} />}
          </div>
        </div>

        <CustomSwiper imageUrl={imageUrl} title={title} />
      </section>
    </motion.div>
  );
};

export default Project;

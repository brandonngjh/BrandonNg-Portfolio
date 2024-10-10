"use client";

import React, { useCallback, useContext } from "react";
import SectionHeading from "./common/section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useInView } from "react-intersection-observer";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import Image from "next/image";

const Experience = () => {
  const { ref: inViewRef, inView } = useInView({ triggerOnce: true });
  const { ref: sectionRef } = useSectionInView("Experience");
  const { theme } = useTheme();

  const setRefs = useCallback(
    (node: Element | null | undefined) => {
      inViewRef(node);
      sectionRef(node);
    },
    [inViewRef, sectionRef]
  );

  return (
    <section
      ref={setRefs}
      id="experience"
      className="scroll-mt-28 mb-28 sm:mb-40"
    >
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((experience, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={inView}
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0,0,0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={experience.date}
              icon={
                <div className="flex h-full w-full items-center justify-center">
                  <Image
                    src={experience.icon}
                    alt={experience.title}
                    className="h-3/4 w-3/4 object-contain"
                  />{" "}
                </div>
              }
              iconStyle={{
                background: theme === "light" ? "white" : "rgb(17, 24, 39)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{experience.title}</h3>
              <p className="font-normal !mt-0">{experience.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {experience.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;

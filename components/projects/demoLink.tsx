import React from "react";
import { AiFillYoutube } from "react-icons/ai";

interface DemoBtnProps {
  demoLink: string | null;
}

const DemoBtn: React.FC<DemoBtnProps> = ({ demoLink }) => {
  if (!demoLink) return null;

  return (
    <a
      className="group flex items-center justify-center gap-2 px-4 py-2 rounded-full dark:bg-white dark:text-gray-700 dark:hover:bg-gray-100 transition bg-gray-700 text-gray-100 hover:bg-gray-600 focus:outline-none focus:ring dark:focus:ring-gray-400 focus:ring-gray-500 border dark:border-gray-300 border-gray-600 hover:scale-105"
      href={demoLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      <AiFillYoutube className="text-l" />
      <span className="font-medium">Demo</span>
    </a>
  );
};

export default DemoBtn;

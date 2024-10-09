import React from "react";
import { AiFillGithub } from "react-icons/ai";

interface GithubBtnProps {
  githubLink: string | null;
}

const GithubBtn: React.FC<GithubBtnProps> = ({ githubLink }) => {
  if (!githubLink) return null;

  return (
    <a
      className="group flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white text-gray-700 hover:bg-gray-100 transition dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-400 dark:focus:ring-gray-500 border border-gray-300 dark:border-gray-600 hover:scale-105"
      href={githubLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      <AiFillGithub className="text-xl" />
      <span className="font-medium">GitHub</span>
    </a>
  );
};

export default GithubBtn;

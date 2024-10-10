"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { Icon } from "@iconify/react";

type SectionNames =
  | "Home"
  | "About"
  | "Projects"
  | "Experience"
  | "Skills"
  | "Contact";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  const handleLinkClick = (name: SectionNames) => {
    setActiveSection(name);
    setTimeOfLastClick(Date.now());
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 dark:text-gray-500 dark:hover:text-gray-300">
      <motion.div
        className="container mx-auto px-4 py-3 flex items-center justify-between"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          <Link href="/">Brandon Ng</Link>
        </div>

        <nav className="hidden sm:block">
          <ul className="flex space-x-6">
            {links.map((link) => (
              <motion.li
                key={link.hash}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="relative"
              >
                <Link
                  href={link.hash}
                  className={clsx(
                    "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300",
                    {
                      "font-semibold text-gray-900 dark:text-white":
                        activeSection === link.name,
                    }
                  )}
                  onClick={() => handleLinkClick(link.name as SectionNames)}
                >
                  {link.name}
                  {link.name === activeSection && (
                    <motion.span
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900 dark:bg-white rounded-full"
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>

        <div className="sm:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <Icon icon="mdi:close" className="w-6 h-6" />
            ) : (
              <Icon icon="mdi:menu" className="w-6 h-6" />
            )}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            className="sm:hidden bg-white dark:bg-gray-950 shadow-md"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            ref={mobileMenuRef}
          >
            <ul className="flex flex-col space-y-4 px-4 py-4">
              {links.map((link) => (
                <motion.li
                  key={link.hash}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="relative"
                >
                  <Link
                    href={link.hash}
                    className={clsx(
                      "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300",
                      {
                        "font-semibold text-gray-900 dark:text-white":
                          activeSection === link.name,
                      }
                    )}
                    onClick={() => handleLinkClick(link.name as SectionNames)}
                  >
                    {link.name}
                    {link.name === activeSection && (
                      <motion.span
                        className="block h-0.5 bg-gray-900 dark:bg-white rounded-full mt-1"
                        layoutId="activeSectionMobile"
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/data";
import Link from "next/link";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";

// Animation configurations
const headerAnimation = {
  initial: { y: -100, x: "-50%", opacity: 0 },
  animate: { y: 0, x: "-50%", opacity: 1 },
};

const navItemAnimation = {
  initial: { y: -100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

const activeSectionAnimation = {
  type: "spring",
  stiffness: 380,
  damping: 30,
};

// CSS classes
const headerClasses = {
  container: "z-[999] relative",
  background: "fixed top-0 left-1/2 h-[4.5rem] w-full border-2 border-black bg-white shadow-[4px_4px_0_#000,8px_8px_0_#000] sm:top-6 sm:h-[3.25rem] sm:w-[85rem] dark:border-white dark:bg-black dark:shadow-[4px_8px_0_#fff,8px_8px_0_#fff]",
  nav: "flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0",
  navList: "flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-700 dark:text-white sm:w-[initial] sm:flex-nowrap sm:gap-5",
  navItem: "h-3/4 flex items-center justify-center relative",
  navLink: "flex w-full items-center justify-center px-3 py-3 transition-all duration-300 ease-out hover:shadow-lg hover:shadow-yellow-400/30",
  activeIndicator: "absolute inset-0 -z-10",
};

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const handleNavClick = (sectionName) => {
    setActiveSection(sectionName);
    setTimeOfLastClick(Date.now());
  };

  return (
    <header className={headerClasses.container}>
      {/* Header background with pixelated border effect */}
      <motion.div
        className={headerClasses.background}
        {...headerAnimation}
      />

      {/* Navigation menu */}
      <nav className={headerClasses.nav}>
        <ul className={headerClasses.navList}>
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className={headerClasses.navItem}
              {...navItemAnimation}
            >
              <Link
                className={headerClasses.navLink}
                href={link.hash}
                onClick={() => handleNavClick(link.name)}
              >
                {link.name}

                {/* Active section indicator */}
                {link.name === activeSection && (
                  <motion.span
                    className={headerClasses.activeIndicator}
                    style={{ backgroundColor: 'hsl(48 100% 45%)' }}
                    layoutId="activeSection"
                    transition={activeSectionAnimation}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

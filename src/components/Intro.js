"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/Hooks";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";

// Animation variants for cleaner motion code
const containerVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 }
};

const titleVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 }
};

const buttonsVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 }
  }
};

// Social links data for better maintainability
const socialLinks = [
  {
    href: "https://www.linkedin.com/in/chaitanyayeole/",
    icon: BsLinkedin,
    label: "LinkedIn Profile",
    ariaLabel: "Visit LinkedIn profile"
  },
  {
    href: "https://github.com/ChaitanyaYeole02",
    icon: FaGithubSquare,
    label: "GitHub Profile",
    ariaLabel: "Visit GitHub profile"
  }
];

// Action buttons data
const actionButtons = [
  {
    type: "link",
    href: "#contact",
    icon: BsArrowRight,
    label: "Contact me here",
    className: "gameboy-button group flex items-center gap-2",
    onClick: (setActiveSection, setTimeOfLastClick) => {
      setActiveSection("Contact");
      setTimeOfLastClick(Date.now());
    }
  },
  {
    type: "download",
    href: "/ChaitanyaYeoleResume.pdf",
    icon: HiDownload,
    label: "Download Resume",
    className: "gameboy-button group flex items-center gap-2",
    download: true
  }
];

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const handleContactClick = () => {
    setActiveSection("Contact");
    setTimeOfLastClick(Date.now());
  };

  return (
    <section
      ref={ref}
      id="home"
      className="mb-40 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      {/* Main Title */}
      <motion.h1
        className="mb-10 mt-4 px-4 gameboy-title"
        variants={titleVariants}
        initial="hidden"
        animate="visible"
      >
        Hello, I&apos;m CHAITANYA
      </motion.h1>

      {/* Action Buttons Container */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        variants={buttonsVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Primary Action Buttons */}
        {actionButtons.map((button, index) => (
          <React.Fragment key={index}>
            {button.type === "link" ? (
              <Link
                href={button.href}
                className={button.className}
                onClick={() => button.onClick?.(setActiveSection, setTimeOfLastClick)}
              >
                <span className="press-start-2p">{button.label}</span>
                <button.icon className="opacity-100" />
              </Link>
            ) : (
              <a
                className={button.className}
                href={button.href}
                download={button.download}
              >
                <span className="press-start-2p">{button.label}</span>
                <button.icon className="opacity-100" />
              </a>
            )}
          </React.Fragment>
        ))}

        {/* Social Media Links */}
        {socialLinks.map((link, index) => {
          const IconComponent = link.icon;
          return (
            <a
              key={index}
              className="gameboy-button flex items-center gap-2"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
            >
              <IconComponent />
            </a>
          );
        })}
      </motion.div>
    </section>
  );
}

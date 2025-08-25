"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/Hooks";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 }
  }
};

const contentVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 }
  }
};

// Section header component for reusability
const SectionHeader = ({ title, emoji = "📋" }) => (
  <h3
    className="text-2xl font-bold text-[#4A90E2] dark:text-[#4A90E2] border-b-2 border-[#4A90E2] dark:border-[#4A90E2] pb-2"
    style={{
      textShadow: '1.5px 1.5px 0px #2C5AA0',
      letterSpacing: '0.1em'
    }}
  >
    {emoji} {title}
  </h3>
);

// Bullet point component for highlights
const HighlightItem = ({ children }) => (
  <div className="flex items-center space-x-3">
    <span className="text-[#4A90E2] text-xl">▶</span>
    <p className="font-jetbrains text-gray-700 dark:text-gray-300 text-lg text-justify">
      {children}
    </p>
  </div>
);

// Link component with consistent styling
const StyledLink = ({ href, children, className = "" }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`text-[#4A90E2] hover:text-[#2C5AA0] underline decoration-2 decoration-[#4A90E2] hover:decoration-[#2C5AA0] transition-colors duration-200 ${className}`}
  >
    {children}
  </a>
);

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <section
      ref={ref}
      id="about"
      className="mb-28 max-w-[85rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      {/* Header Section */}
      <motion.div
        className="mb-10 mt-4 px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="gameboy-title text-3xl">About Me</h2>
        <p className="mt-4 text-lg">My journey in software development and beyond</p>
      </motion.div>

      {/* Content Container */}
      <motion.div
        className="flex flex-col items-center gap-6 px-4"
        variants={contentVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main About Card */}
        <div className="bg-white dark:bg-gray-900 p-8 rounded-lg border-2 border-black dark:border-white shadow-[4px_4px_0_#000,8px_8px_0_#000] dark:shadow-[4px_4px_0_#fff,8px_8px_0_#fff] max-w-8xl">
          <div className="text-left space-y-6">

            {/* Professional Summary */}
            <div className="space-y-3">
              <SectionHeader title="PROFESSIONAL SUMMARY" emoji="🚀" />
              <p className="font-jetbrains text-gray-700 dark:text-gray-300 leading-relaxed text-lg text-justify">
                <span className="font-bold">Software Engineer</span> with 3.5 years
                of experience <span className="font-bold">developing backend systems used daily by 100,000+ users</span>.{" "}
                <span className="font-bold">Strong background in building high-throughput APIs</span>{" "}
                and <span className="font-bold">real-time event-processing systems</span>.{" "}
                <span className="font-bold">Excellent communicator</span> and{" "}
                <span className="font-bold">cross-functional team player</span>.
              </p>
            </div>

            {/* Education */}
            <div className="space-y-3">
              <SectionHeader title="EDUCATION" emoji="🎓" />
              <div className="space-y-2">
                <p className="font-jetbrains text-gray-700 dark:text-gray-300 text-lg text-justify">
                  <span className="font-bold">Masters of Science (M.S.) in Computer Science</span>
                  <br />
                  <span className="italic text-gray-600 dark:text-gray-400">The State University of New York at Buffalo, NY</span>
                </p>
                <p className="font-jetbrains text-gray-700 dark:text-gray-300 text-lg text-justify">
                  <span className="font-bold">Bachelors of Technology (B.Tech) in Electronics and Communication Engineering</span>
                  <br />
                  <span className="italic text-gray-600 dark:text-gray-400">MIT - WPU, Pune</span>
                </p>
              </div>
            </div>

            {/* Key Highlights */}
            <div className="space-y-3">
              <SectionHeader title="KEY HIGHLIGHTS" emoji="🏆" />
              <div className="space-y-3">
                <HighlightItem>
                  <span className="font-bold">Founding Software Engineer</span> of{" "}
                  <StyledLink href="https://www.ycombinator.com/companies/statiq">
                    Statiq (YC S20)
                  </StyledLink>
                  , First developer after the CTO and raised{" "}
                  <StyledLink href="https://www.crunchbase.com/organization/statiq-e527/financial_details" className="font-bold">
                    $25.7 Million in Serie A
                  </StyledLink>.
                </HighlightItem>

                <HighlightItem>
                  <span className="font-bold">Scaled the WebSockets server</span> to handle{" "}
                  <span className="font-bold">6000 EV chargers from 150</span> and saved{" "}
                  <span className="font-bold">$5000 per month</span>
                </HighlightItem>

                <HighlightItem>
                  <StyledLink href="https://www.robocon.in/achievements" className="font-bold">
                    All India Rank 1
                  </StyledLink>{" "}
                  in Robocon 2020
                </HighlightItem>

                <HighlightItem>
                  <StyledLink href="https://www.robocon.in/achievements" className="font-bold">
                    All India Rank 3
                  </StyledLink>{" "}
                  in SAVe NIOT 2019
                </HighlightItem>

                <HighlightItem>
                  <StyledLink href="https://www.robocon.in/achievements" className="font-bold">
                    All India Rank 2
                  </StyledLink>{" "}
                  in Robocon 2018
                </HighlightItem>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

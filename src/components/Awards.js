"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/Hooks";
import { awardsData } from "@/data";

// Animation variants - moved outside component to prevent recreation
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

// Memoized Award Item Component
const AwardItem = React.memo(({ award }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="w-full"
  >
    <div className="flex flex-col group h-full bg-white dark:bg-gray-900 p-6 rounded-lg border-2 border-[#4A90E2] shadow-[2px_2px_0_#2C5AA0] hover:shadow-[4px_4px_0_#2C5AA0] transition-all duration-300 hover:scale-105">
      {/* Award Icon/Year */}
      <div className="flex items-center justify-center mb-4">
        <div className="bg-[#4A90E2] text-white px-4 py-2 rounded-full text-lg font-bold shadow-[2px_2px_0_#2C5AA0]">
          {award.year}
        </div>
      </div>

      {/* Award Info */}
      <div className="flex-1 text-center">
        <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-[#4A90E2] transition-colors duration-200 mb-3">
          {award.title}
        </h4>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
          {award.description}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 mt-4">
        {/* YouTube Video Link */}
        {award.youtubeUrl && (
          <a
            href={award.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded text-sm font-medium transition-colors duration-200 flex items-center justify-center gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            <span>🎥</span>
            Watch Video
          </a>
        )}

        {/* Robocon Achievements Link */}
        <a
          href="https://www.robocon.in/achievements"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#4A90E2] hover:bg-[#2C5AA0] text-white px-3 py-2 rounded text-sm font-medium transition-colors duration-200 flex items-center justify-center gap-2"
          onClick={(e) => e.stopPropagation()}
        >
          <span>🏆</span>
          View Details
        </a>
      </div>
    </div>
  </motion.div>
));

AwardItem.displayName = 'AwardItem';

// Main Awards Component
export default function Awards() {
  const { ref } = useSectionInView("Awards");

  // Memoized content rendering
  const contentDisplay = useMemo(() => (
    <div className="w-full max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {awardsData.map((award, index) => (
          <AwardItem key={index} award={award} />
        ))}
      </div>
    </div>
  ), []);

  return (
    <section
      id="awards"
      ref={ref}
      className="mb-28 max-w-6xl text-center sm:mb-0 scroll-mt-28"
    >
      {/* Header Section */}
      <motion.div
        className="mb-10 mt-4 px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="gameboy-title text-3xl">My Awards</h2>
        <p className="mt-4 text-lg">Recognition for robotics and engineering excellence</p>
      </motion.div>

      {/* Content Container */}
      <motion.div
        className="flex flex-col items-center gap-6 px-4"
        variants={contentVariants}
        initial="hidden"
        animate="visible"
      >
        {contentDisplay}
      </motion.div>
    </section>
  );
}

"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/Hooks";
import { publicationsData } from "@/data";
import Image from "next/image";

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

// Memoized Publication Item Component
const PublicationItem = React.memo(({ publication }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="w-full"
  >
    <a
      href={publication.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between group"
    >
      {/* Left side - Paper Name */}
      <div className="flex-1 text-left">
        <h4 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-[#4A90E2] transition-colors duration-200">
          {publication.title}
        </h4>
      </div>

      {/* Right side - Image */}
      <div className="ml-8 flex-shrink-0">
        <div className="relative w-full max-w-lg overflow-hidden rounded-lg border-2 border-[#4A90E2] shadow-[2px_2px_0_#2C5AA0] group-hover:shadow-[4px_4px_0_#2C5AA0] transition-all duration-300 group-hover:scale-110">
          {/* Default Image */}
          <Image
            src={publication.imageUrl}
            alt={publication.title}
            width={512}
            height={341}
            className="w-full h-auto object-cover transition-opacity duration-300"
            sizes="(max-width: 640px) 300px, (max-width: 768px) 400px, 512px"
            quality={100}
            priority
          />
          {/* Hover Image */}
          <Image
            src={publication.hoverImageUrl}
            alt="Publication Paper"
            width={512}
            height={341}
            className="w-full h-auto object-cover transition-opacity duration-300 absolute inset-0 opacity-0 group-hover:opacity-100"
            sizes="(max-width: 640px) 300px, (max-width: 768px) 400px, 512px"
            quality={100}
          />
        </div>
      </div>
    </a>
  </motion.div>
));

PublicationItem.displayName = 'PublicationItem';

// Main Publications Component
export default function Publications() {
  const { ref } = useSectionInView("Publications");

  // Memoized content rendering
  const contentDisplay = useMemo(() => (
    <div className="w-full max-w-6xl space-y-6">
      <div className="space-y-4">
        {publicationsData.map((publication, index) => (
          <PublicationItem key={index} publication={publication} />
        ))}
      </div>
    </div>
  ), []);

  return (
    <section
      id="publications"
      ref={ref}
      className="mb-28 max-w-8xl text-center sm:mb-0 scroll-mt-28"
    >
      {/* Header Section */}
      <motion.div
        className="mb-10 mt-4 px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="gameboy-title text-3xl">My Publications</h2>
        <p className="mt-4 text-lg">Research papers and academic contributions</p>
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

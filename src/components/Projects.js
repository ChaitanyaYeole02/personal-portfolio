"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/Hooks";
import { projectsData } from "@/data";
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

// Memoized Project Item Component
const ProjectItem = React.memo(({ project }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="w-full"
  >
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col group h-full"
    >
      {/* Project Image */}
      <div className="relative w-full overflow-hidden rounded-lg border-2 border-[#4A90E2] shadow-[2px_2px_0_#2C5AA0] group-hover:shadow-[4px_4px_0_#2C5AA0] transition-all duration-300 group-hover:scale-105">
        {/* Default Image */}
        <Image
          src={project.imageUrl}
          alt={project.title}
          width={400}
          height={250}
          className="w-full h-auto object-cover transition-opacity duration-300"
          sizes="(max-width: 640px) 300px, (max-width: 768px) 350px, 400px"
          quality={100}
          priority
        />
        {/* Hover Image */}
        <Image
          src={project.hoverImageUrl}
          alt={project.title}
          width={400}
          height={250}
          className="w-full h-auto object-cover transition-opacity duration-300 absolute inset-0 opacity-0 group-hover:opacity-100"
          sizes="(max-width: 640px) 300px, (max-width: 768px) 350px, 400px"
          quality={100}
        />
      </div>

      {/* Project Info */}
      <div className="mt-4 flex-1">
        <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-[#4A90E2] transition-colors duration-200 mb-2">
          {project.title}
        </h4>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
          {project.description}
        </p>
      </div>
    </a>
  </motion.div>
));

ProjectItem.displayName = 'ProjectItem';

// Main Projects Component
export default function Projects() {
  const { ref } = useSectionInView("Projects");

  // Memoized content rendering
  const contentDisplay = useMemo(() => (
    <div className="w-full max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      </div>
    </div>
  ), []);

  return (
    <section
      id="projects"
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
        <h2 className="gameboy-title text-3xl">My Projects</h2>
        <p className="mt-4 text-lg">Software solutions and innovative applications</p>
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

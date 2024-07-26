"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/Hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        <span className="font-medium">Software Engineer</span>{" "}with over 3 years
         of Experience in{" "}<span className="font-medium">Backend development</span>,{" "}
         <span className="italic">{" "}building scalable, high-performance</span>{" "}software solutions.
         My core stack is{" "}<span className="font-medium">Python, React, Next.js, Node.js, MySQL, MongoDB, Redis.</span>
         I am also familiar with Go, C++ and Embedded C. I am always looking to learn new technologies. I am currently
         looking for a{" "}<span className="font-medium">full-time position</span>{" "}as a software developer.
      </p>

      <p>
        I completed my Masters in <span className="font-medium">Computer Science (AI Track)</span>{" "}from{" "}
        <span className="italic">SUNY - University at Buffalo, NY</span> and my Bachelors in{" "} 
        <span className="font-medium">Electronics and Communication Engineering (AI Concentration)</span>{" "}from{" "}
        <span className="italic">Maharashtra Institute of Technology - WPU</span>.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching animes, or just exploring new cafes and restaurants with my friends. 
        I also enjoy{" "}<span className="font-medium">learning new things</span>. I am currently
        learning about{" "}<span className="font-medium">Financial management and working of CUDA</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData, educationData } from "@/lib/Data";
import { useSectionInView } from "@/lib/Hooks";
import { useTheme } from "@/context/ThemeContext";
import '../styles/globals.css';
import { LuGraduationCap } from "react-icons/lu";
import { FaBriefcase } from "react-icons/fa";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState("work");

  return (
<section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
  <SectionHeading>My Experience</SectionHeading>
  
  <div className="relative mb-8">
    <nav className="relative flex justify-center items-center h-[3.25rem]">
      <ul className="flex items-center justify-center gap-64 text-[0.9rem] font-medium text-gray-500">
        <motion.li
          className="h-3/4 flex items-center justify-center relative"
          whileHover={{ scale: 1.1 }}
        >
          <button
            onClick={() => setActiveTab("work")}
            className={`flex items-center justify-center p-4 hover:text-gray-950 transition dark:hover:text-gray-300 ${
              activeTab === "work" ? "text-gray-950 dark:text-gray-200" : ""
            }`}
          >
            <FaBriefcase className="text-4xl" />
          </button>
        </motion.li>
        <motion.li
          className="h-3/4 flex items-center justify-center relative"
          whileHover={{ scale: 1.1 }}
        >
          <button
            onClick={() => setActiveTab("education")}
            className={`flex items-center justify-center p-4 hover:text-gray-950 transition dark:hover:text-gray-300 ${
              activeTab === "education" ? "text-gray-950 dark:text-gray-200" : ""
            }`}
          >
            <LuGraduationCap className="text-4xl" />
          </button>
        </motion.li>
      </ul>
    </nav>
  </div>

      <motion.div 
        className="qualification__sections max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {activeTab === "work" ? (
          <VerticalTimeline lineColor="">
            {experiencesData.map((item, index) => (
              <TimelineElement key={index} item={item} theme={theme} />
            ))}
          </VerticalTimeline>
        ) : (
          <VerticalTimeline lineColor="">
            {educationData.map((item, index) => (
              <TimelineElement key={index} item={item} theme={theme} />
            ))}
          </VerticalTimeline>
        )}
      </motion.div>
    </section>
  );
}

function TimelineElement({ item, theme }) {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background:
          theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
        boxShadow: "none",
        border: "1px solid rgba(0, 0, 0, 0.05)",
        textAlign: "left",
        padding: "1.3rem 2rem",
      }}
      contentArrowStyle={{
        borderRight:
          theme === "light"
            ? "0.4rem solid #9ca3af"
            : "0.4rem solid rgba(255, 255, 255, 0.5)",
      }}
      date={item.date}
      icon={item.icon}
      iconStyle={{
        background:
          theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
        fontSize: "1.5rem",
      }}
    >
      <h3 className="font-semibold capitalize">{item.title}</h3>
      <p className="font-normal !mt-0">{item.location}</p>
      <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75 qualification__description">
        {item.description}
      </p>
    </VerticalTimelineElement>
  );
}
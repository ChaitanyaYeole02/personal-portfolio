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
          <ul className="flex items-center justify-center gap-64 text-[0.9rem] font-medium">
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              whileHover={{ scale: 1.1 }}
            >
              <button
                onClick={() => setActiveTab("work")}
                className={`flex items-center justify-center p-4 hover:text-green-600 dark:hover:text-green-400 transition text-gray-700 dark:text-white ${activeTab === "work" ? "text-green-600 dark:text-green-400" : ""
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
                className={`flex items-center justify-center p-4 hover:text-green-600 dark:hover:text-green-400 transition text-gray-700 dark:text-white ${activeTab === "education" ? "text-green-600 dark:text-green-400" : ""
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
          <VerticalTimeline lineColor="#16a34a">
            {experiencesData.map((item, index) => (
              <TimelineElement key={index} item={item} theme={theme} />
            ))}
          </VerticalTimeline>
        ) : (
          <VerticalTimeline lineColor="#16a34a">
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
        background: theme === "dark" ? "#000" : "#fff",
        boxShadow: "none",
        border: theme === "dark" ? "2px solid #fff" : "2px solid #000",
        textAlign: "left",
        padding: "1.3rem 2rem",
        boxShadow: theme === "dark"
          ? "4px 4px 0 #fff, 8px 8px 0 #fff"
          : "4px 4px 0 #000, 8px 8px 0 #000",
      }}
      contentArrowStyle={{
        borderRight: "0.4rem solid #16a34a",
      }}
      date={item.date}
      icon={item.icon}
      iconStyle={{
        background: theme === "dark" ? "#000" : "#fff",
        fontSize: "1.5rem",
        border: theme === "dark" ? "2px solid #fff" : "2px solid #000",
        boxShadow: theme === "dark" ? "2px 2px 0 #fff" : "2px 2px 0 #000",
      }}
    >
      <h3 className="font-semibold capitalize text-gray-900 dark:text-white">{item.title}</h3>
      <p className="font-normal !mt-0 text-green-600 dark:text-green-400">{item.location}</p>
      <p className="!mt-1 !font-normal text-green-600 dark:text-green-400 qualification__description">
        {item.description}
      </p>
    </VerticalTimelineElement>
  );
}
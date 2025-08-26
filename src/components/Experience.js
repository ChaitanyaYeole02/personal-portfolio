"use client";

import React, { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSectionInView } from "@/lib/Hooks";
import { experiencesData, educationData } from "@/data";
import { FaBriefcase, FaGraduationCap, FaChevronDown } from "react-icons/fa";

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

// Memoized Section Header Component
const SectionHeader = React.memo(({ title, emoji = "📋" }) => (
  <h3
    className="text-2xl font-bold text-[#4A90E2] dark:text-[#4A90E2] border-b-2 border-[#4A90E2] dark:border-[#4A90E2] pb-2"
    style={{
      textShadow: '1.5px 1.5px 0px #2C5AA0',
      letterSpacing: '0.1em'
    }}
  >
    {emoji} {title}
  </h3>
));

SectionHeader.displayName = 'SectionHeader';

// Memoized Tab Button Component
const TabButton = React.memo(({ isActive, onClick, children, icon: Icon }) => (
  <motion.button
    onClick={onClick}
    className={`flex items-center justify-center gap-3 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${isActive
      ? "bg-[#4A90E2] text-white shadow-[2px_2px_0_#2C5AA0]"
      : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
      }`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Icon className="text-xl" />
    {children}
  </motion.button>
));

TabButton.displayName = 'TabButton';

// Memoized Company Header Component
const CompanyHeader = React.memo(({ company, isExpanded, onClick, totalDuration, totalYears }) => (
  <motion.button
    onClick={onClick}
    className="w-full bg-white dark:bg-gray-900 p-6 rounded-lg border-2 border-black dark:border-white shadow-[4px_4px_0_#000,8px_8px_0_#000] dark:shadow-[4px_4px_0_#fff,8px_8px_0_#fff] hover:shadow-[6px_6px_0_#000,12px_12px_0_#000] dark:hover:shadow-[6px_6px_0_#fff,12px_12px_0_#fff] transition-all duration-200"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <div className="flex items-center justify-between">
      <div className="text-left flex-1">
        <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {company}
        </h4>
        <div className="flex items-center justify-between">
          <p className="text-[#4A90E2] font-semibold text-lg">
            {totalDuration}
          </p>
          <div className="bg-[#4A90E2] text-white px-3 py-1 rounded-full text-sm font-bold shadow-[2px_2px_0_#2C5AA0]">
            {totalYears.years > 0 && `${totalYears.years} ${totalYears.years === 1 ? 'year' : 'years'}`}
            {totalYears.years > 0 && totalYears.months > 0 && ' '}
            {totalYears.months > 0 && `${totalYears.months} ${totalYears.months === 1 ? 'month' : 'months'}`}
          </div>
        </div>
      </div>
      <motion.div
        animate={{ rotate: isExpanded ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="p-3 bg-[#4A90E2] rounded-full text-white ml-4"
      >
        <FaChevronDown />
      </motion.div>
    </div>
  </motion.button>
));

CompanyHeader.displayName = 'CompanyHeader';

// Memoized Role Item Component
const RoleItem = React.memo(({ role }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 ml-8 mb-3"
  >
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
          {role.title}
        </h5>
        <p className="text-[#4A90E2] font-medium mb-1">
          {role.location}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {role.date}
        </p>
      </div>
      <div className="ml-4 p-2 bg-[#4A90E2] rounded-full text-white text-sm">
        {role.icon}
      </div>
    </div>
  </motion.div>
));

RoleItem.displayName = 'RoleItem';

// Optimized duration calculation function
const calculateTotalYears = (durationString) => {
  // Cache regex patterns for better performance
  const yearPattern = /(\d+)\s*yr/;
  const monthPattern = /(\d+)\s*mos/;
  const dateRangePattern = /(\w+\s+\d{4})\s*-\s*(\w+\s+\d{4})/;

  // Try to match year/month patterns first (most common)
  const yearMatch = durationString.match(yearPattern);
  const monthMatch = durationString.match(monthPattern);

  if (yearMatch && monthMatch) {
    return { years: parseInt(yearMatch[1]), months: parseInt(monthMatch[1]) };
  } else if (yearMatch) {
    return { years: parseInt(yearMatch[1]), months: 0 };
  } else if (monthMatch) {
    return { years: 0, months: parseInt(monthMatch[1]) };
  }

  // Fallback: parse date ranges
  const dateRange = durationString.match(dateRangePattern);
  if (dateRange) {
    const startYear = parseInt(dateRange[1].split(' ')[1]);
    const endYear = parseInt(dateRange[2].split(' ')[1]);
    const startMonth = new Date(dateRange[1]).getMonth();
    const endMonth = new Date(dateRange[2]).getMonth();

    let years = endYear - startYear;
    let months = endMonth - startMonth;

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    return { years, months };
  }

  return { years: 0, months: 0 };
};

// Main Experience Component
export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const [activeTab, setActiveTab] = useState("work");
  const [expandedCompanies, setExpandedCompanies] = useState(new Set());

  // Memoized toggle function to prevent unnecessary re-renders
  const toggleCompany = useCallback((company) => {
    setExpandedCompanies(prev => {
      const newExpanded = new Set(prev);
      if (newExpanded.has(company)) {
        newExpanded.delete(company);
      } else {
        newExpanded.add(company);
      }
      return newExpanded;
    });
  }, []);

  // Memoized tab change handler
  const handleTabChange = useCallback((tab) => {
    setActiveTab(tab);
    // Reset expanded companies when switching tabs
    setExpandedCompanies(new Set());
  }, []);

  // Memoized data processing to prevent recalculation on every render
  const processedData = useMemo(() => {
    if (activeTab === "work") {
      return experiencesData.map(companyData => ({
        ...companyData,
        totalYears: companyData.duration || calculateTotalYears(companyData.totalDuration)
      }));
    } else {
      return educationData.map(institutionData => ({
        ...institutionData,
        totalYears: institutionData.duration || calculateTotalYears(institutionData.totalDuration)
      }));
    }
  }, [activeTab]);

  // Memoized tab buttons to prevent unnecessary re-renders
  const tabButtons = useMemo(() => (
    <div className="flex gap-4 mb-8">
      <TabButton
        isActive={activeTab === "work"}
        onClick={() => handleTabChange("work")}
        icon={FaBriefcase}
      >
        Work Experience
      </TabButton>
      <TabButton
        isActive={activeTab === "education"}
        onClick={() => handleTabChange("education")}
        icon={FaGraduationCap}
      >
        Education
      </TabButton>
    </div>
  ), [activeTab, handleTabChange]);

  // Memoized content rendering
  const contentDisplay = useMemo(() => (
    <div className="w-full max-w-6xl space-y-6">
      {activeTab === "work" ? (
        <>
          <SectionHeader title="WORK EXPERIENCE" emoji="💼" />
          <div className="space-y-4">
            {processedData.map((companyData) => (
              <div key={companyData.company}>
                <CompanyHeader
                  company={companyData.company}
                  isExpanded={expandedCompanies.has(companyData.company)}
                  onClick={() => toggleCompany(companyData.company)}
                  totalDuration={companyData.totalDuration}
                  totalYears={companyData.totalYears}
                />
                <AnimatePresence>
                  {expandedCompanies.has(companyData.company) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-3"
                    >
                      {companyData.roles.map((role, roleIndex) => (
                        <RoleItem key={`${companyData.company}-${roleIndex}`} role={role} />
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <SectionHeader title="EDUCATION" emoji="🎓" />
          <div className="space-y-4">
            {processedData.map((institutionData) => (
              <div key={institutionData.institution}>
                <CompanyHeader
                  company={institutionData.institution}
                  isExpanded={expandedCompanies.has(institutionData.institution)}
                  onClick={() => toggleCompany(institutionData.institution)}
                  totalDuration={institutionData.totalDuration}
                  totalYears={institutionData.totalYears}
                />
                <AnimatePresence>
                  {expandedCompanies.has(institutionData.institution) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-3"
                    >
                      {institutionData.degrees.map((degree, degreeIndex) => (
                        <RoleItem key={`${institutionData.institution}-${degreeIndex}`} role={degree} />
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  ), [activeTab, processedData, expandedCompanies, toggleCompany]);

  return (
    <section
      id="experience"
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
        <h2 className="gameboy-title text-3xl">My Experience</h2>
        <p className="mt-4 text-lg">My professional journey and educational background</p>
      </motion.div>

      {/* Content Container */}
      <motion.div
        className="flex flex-col items-center gap-6 px-4"
        variants={contentVariants}
        initial="hidden"
        animate="visible"
      >
        {tabButtons}
        {contentDisplay}
      </motion.div>
    </section>
  );
}
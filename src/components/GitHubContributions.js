"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Configuration constants
const CONFIG = {
    username: "ChaitanyaYeole02",
    loadingTimeout: 2000,
    chartUrl: "https://ghchart.rshah.org",
    githubProfileUrl: "https://github.com",
    streakStatsUrl: "https://nirzak-streak-stats.vercel.app"
};

// Animation variants for cleaner motion code
const animationVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 }
};

const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { delay: 0.1 }
    }
};

// Legend data for better maintainability
const legendData = [
    { color: "bg-gray-100 dark:bg-gray-800", label: "No contributions" },
    { color: "bg-green-200 dark:bg-green-800", label: "1-3 contributions" },
    { color: "bg-green-300 dark:bg-green-700", label: "4-6 contributions" },
    { color: "bg-green-400 dark:bg-green-600", label: "7-9 contributions" },
    { color: "bg-green-500 dark:bg-green-500", label: "10+ contributions" }
];

// Loading Spinner Component
const LoadingSpinner = () => (
    <div className="flex justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-500"></div>
    </div>
);

// Legend Component
const ContributionLegend = () => (
    <div className="flex items-center justify-center gap-2 mt-4 text-sm">
        <span className="text-gray-500">Less</span>
        <div className="flex gap-1">
            {legendData.map((item, index) => (
                <div
                    key={index}
                    className={`w-3 h-3 ${item.color} border border-gray-200 dark:border-gray-700`}
                    title={item.label}
                />
            ))}
        </div>
        <span className="text-gray-500">More</span>
    </div>
);

// Error State Component
const ErrorState = ({ onRetry }) => (
    <div className="text-center py-8">
        <p className="text-gray-500 mb-4">Unable to load GitHub contributions</p>
        <button
            onClick={onRetry}
            className="gameboy-button"
        >
            Try Again
        </button>
    </div>
);

// GitHub Profile Link Component
const GitHubProfileLink = ({ username }) => (
    <a
        href={`${CONFIG.githubProfileUrl}/${username}`}
        target="_blank"
        rel="noopener noreferrer"
        className="gameboy-button group flex items-center gap-2"
    >
        <span>View Full GitHub Profile</span>
    </a>
);

// Contribution Stats Component - Now using API data with dates
const ContributionStats = ({ totalContributions, currentStreak, longestStreak, longestStreakDates, totalContributionsDates, currentStreakDates }) => (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 text-center">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-2 border-black dark:border-white shadow-[2px_2px_0_#000,4px_4px_0_#000] dark:shadow-[2px_2px_0_#fff,4px_4px_0_#fff]">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                {totalContributions.toLocaleString()}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Total Contributions</div>
            {totalContributionsDates && (
                <div className="text-xs text-gray-500 mt-1">
                    {totalContributionsDates}
                </div>
            )}
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-2 border-black dark:border-white shadow-[2px_2px_0_#000,4px_4px_0_#000] dark:shadow-[2px_2px_0_#fff,4px_4px_0_#fff]">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {currentStreak}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Current Streak</div>
            {currentStreakDates && (
                <div className="text-xs text-gray-500 mt-1">
                    {currentStreakDates}
                </div>
            )}
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-2 border-black dark:border-white shadow-[2px_2px_0_#000,4px_4px_0_#000] dark:shadow-[2px_2px_0_#fff,4px_4px_0_#fff]">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                {longestStreak}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Longest Streak</div>
            {longestStreakDates && (
                <div className="text-xs text-gray-500 mt-1">
                    {longestStreakDates}
                </div>
            )}
        </div>
    </div>
);

// Main Component
export default function GitHubContributions() {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [contributionStats, setContributionStats] = useState({
        totalContributions: 0,
        currentStreak: 0,
        longestStreak: 0,
        longestStreakDates: "",
        totalContributionsDates: "",
        currentStreakDates: ""
    });

    // Fetch contribution statistics from GitHub Streak Stats API
    useEffect(() => {
        const fetchContributionStats = async () => {
            try {
                console.log('Fetching contribution stats from GitHub Streak Stats API...');
                const response = await fetch(`${CONFIG.streakStatsUrl}/?user=${CONFIG.username}`);

                if (response.ok) {
                    const htmlContent = await response.text();

                    // Parse the HTML to extract the stats
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(htmlContent, 'text/html');

                    // Extract the stats from the HTML content
                    const statsText = doc.body.textContent || '';
                    console.log('Stats content:', statsText);

                    // Parse the stats using regex patterns
                    const totalMatch = statsText.match(/(\d{1,3}(?:,\d{3})*)\s+Total Contributions/);
                    const currentStreakMatch = statsText.match(/(\d+)\s+Current Streak/);
                    const longestStreakMatch = statsText.match(/(\d+)\s+Longest Streak/);

                    if (totalMatch && currentStreakMatch && longestStreakMatch) {
                        const totalContributions = parseInt(totalMatch[1].replace(/,/g, ''));
                        const currentStreak = parseInt(currentStreakMatch[1]);
                        const longestStreak = parseInt(longestStreakMatch[1]);

                        // Extract date range for longest streak
                        const dateRangeMatch = statsText.match(/(\w{3}\s+\d{1,2},\s+\d{4})\s*-\s*(\w{3}\s+\d{1,2})/);
                        const longestStreakDates = dateRangeMatch ? `${dateRangeMatch[1]} - ${dateRangeMatch[2]}` : "";

                        // Extract date range for total contributions (usually shows start date to present)
                        const totalDateMatch = statsText.match(/(\w{3}\s+\d{1,2},\s+\d{4})\s*-\s*Present/);
                        const totalContributionsDates = totalDateMatch ? `${totalDateMatch[1]} - Present` : "Jan 12, 2021 - Present";

                        // Extract date for current streak (usually shows when it started)
                        const currentStreakDateMatch = statsText.match(/Current Streak\s+(\w{3}\s+\d{1,2})/);
                        const currentStreakDates = currentStreakDateMatch ? `Since ${currentStreakDateMatch[1]}` : "Since Aug 24";

                        console.log('Parsed stats:', {
                            totalContributions,
                            currentStreak,
                            longestStreak,
                            longestStreakDates,
                            totalContributionsDates,
                            currentStreakDates
                        });

                        setContributionStats({
                            totalContributions,
                            currentStreak,
                            longestStreak,
                            longestStreakDates,
                            totalContributionsDates,
                            currentStreakDates
                        });
                    } else {
                        console.log('Could not parse stats from HTML content');
                        setDefaultStats();
                    }
                } else {
                    console.log('Failed to fetch stats, status:', response.status);
                    setDefaultStats();
                }
            } catch (error) {
                console.error('Error fetching contribution stats:', error);
                setDefaultStats();
            }
        };

        const setDefaultStats = () => {
            // Set fallback values if API fails
            setContributionStats({
                totalContributions: 2848,
                currentStreak: 1,
                longestStreak: 128,
                longestStreakDates: "Dec 2, 2024 - Apr 8",
                totalContributionsDates: "Jan 12, 2021 - Present",
                currentStreakDates: "Since Aug 24"
            });
        };

        fetchContributionStats();
    }, []);

    // Handle image load success
    const handleImageLoad = () => {
        setImageLoaded(true);
        setLoading(false);
    };

    // Handle image load error
    const handleImageError = () => {
        setImageError(true);
        setLoading(false);
    };

    // Handle retry action
    const handleRetry = () => {
        setImageError(false);
        setImageLoaded(false);
        setLoading(true);
        // Reset loading state after a brief delay
        setTimeout(() => setLoading(false), 1000);
    };

    // Loading timeout effect
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, CONFIG.loadingTimeout);

        return () => clearTimeout(timer);
    }, []);

    // Loading state
    if (loading) {
        return (
            <section className="mb-28 max-w-[85rem] text-center sm:mb-0 scroll-mt-[100rem]">
                <motion.div
                    className="mb-10 mt-4 px-4"
                    variants={animationVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <h2 className="gameboy-title text-3xl">Loading GitHub Activity...</h2>
                </motion.div>
                <LoadingSpinner />
            </section>
        );
    }

    return (
        <section className="mb-28 max-w-[85rem] text-center sm:mb-0 scroll-mt-[100rem]">
            {/* Header Section */}
            <motion.div
                className="mb-10 mt-4 px-4"
                variants={animationVariants}
                initial="hidden"
                animate="visible"
            >
                <h2 className="gameboy-title text-3xl">My GitHub Activity</h2>
                <p className="mt-4 text-lg">My contribution activity over the past year</p>
            </motion.div>

            {/* Content Container */}
            <motion.div
                className="flex flex-col items-center gap-4 px-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Contribution Stats - Now from API with dates */}
                <ContributionStats
                    totalContributions={contributionStats.totalContributions}
                    currentStreak={contributionStats.currentStreak}
                    longestStreak={contributionStats.longestStreak}
                    longestStreakDates={contributionStats.longestStreakDates}
                    totalContributionsDates={contributionStats.totalContributionsDates}
                    currentStreakDates={contributionStats.currentStreakDates}
                />

                {/* Contribution Graph Container */}
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border-2 border-black dark:border-white shadow-[4px_4px_0_#000,8px_8px_0_#000] dark:shadow-[4px_4px_0_#fff,8px_8px_0_#fff] overflow-hidden">
                    {/* GitHub Contribution Graph */}
                    {!imageError ? (
                        <img
                            src={`${CONFIG.chartUrl}/${CONFIG.username}`}
                            alt={`GitHub contributions for ${CONFIG.username}`}
                            onLoad={handleImageLoad}
                            onError={handleImageError}
                            className="max-w-full h-auto"
                            width={1000}
                            height={120}
                            style={{ display: imageLoaded ? 'block' : 'none' }}
                        />
                    ) : (
                        <ErrorState onRetry={handleRetry} />
                    )}

                    {/* Contribution Legend */}
                    <ContributionLegend />
                </div>

                {/* GitHub Profile Link */}
                <GitHubProfileLink username={CONFIG.username} />
            </motion.div>
        </section>
    );
}
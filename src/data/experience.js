import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

export const experiencesData = [
    {
        company: "Datacrowd",
        location: "Chicago, IL",
        totalDuration: "January 2024 - June 2025",
        duration: { years: 1, months: 6 },
        roles: [
            {
                title: "Software Engineer",
                icon: React.createElement(CgWorkAlt),
                date: "January 2024 - June 2025 (1 yr 6 mos)",
                startDate: "2024-01-01",
                endDate: "2025-06-30",
            }
        ]
    },

    {
        company: "The Research Foundation of SUNY",
        location: "Buffalo, NY",
        totalDuration: "September 2023 - December 2024",
        duration: { years: 1, months: 4 },
        roles: [
            {
                title: "Senior Research Aide",
                description:
                    "As I was praised by my seniors for my work, my part-time was converted into an Internship." + " " +
                    "During this period, I enhanced the backend and UI of a genomic search platform, " +
                    "implemented multi-threading to reduce download speeds by 82%, and developed GraphQL APIs " +
                    "for efficient data fetching, significantly improving user experience.",
                icon: React.createElement(CgWorkAlt),
                date: "May 2024 - December 2024 (8 mos)",
                startDate: "2024-05-01",
                endDate: "2024-12-31",
            },
            {
                title: "Research Aide",
                description:
                    "I worked as a Full-Stack developer for 9 months while completing my Masters Degree." + " " +
                    "I harnessed Python, React, Next.js, and GraphQL to architect a high performance search engine, " +
                    "signficantly boosting efficiency and culmunating in a 40% improvement in search response times.",
                icon: React.createElement(LuGraduationCap),
                date: "September 2023 - April 2024 (8 mos)",
                startDate: "2023-09-01",
                endDate: "2024-04-30",
            },
        ],
    },
    {
        company: "Statiq (Y-Combinator S20)",
        location: "India",
        totalDuration: "January 2021 - June 2023",
        duration: { years: 2, months: 6 },
        roles: [
            {
                title: "Software Development Engineer II",
                description:
                    "As a Software Development Engineer II, I led the WebSockets and EV Charger teams, strategizing with the CTO to secure $25.7M in Series A funding." + " " +
                    "My team upgraded to an ASGI framework, boosting connectivity by 2600% with Kubernetes." + " " +
                    "I engineered the OCPI HUB for global EV charger access and developed DC charger firmware (60kW: CCS) for seamless use via OCPP 1.6 protocol.",
                icon: React.createElement(CgWorkAlt),
                date: "April 2022 - June 2023 (1 yr 3 mos)",
                startDate: "2022-04-01",
                endDate: "2023-06-30",
            },
            {
                title: "Software Development Engineer I",
                description:
                    "After my internship, I received a full-time offer at Statiq." + " " +
                    "I built a notification panel using Firebase and AWS Lambda, boosting marketing efficiency." + " " +
                    "I integrated Sentry, Stripe, and RazorPay for better debugging, logging, and payments." + " " +
                    "I developed RESTful APIs with Python and MySQL, improving the EV user-charger interface.",
                icon: React.createElement(CgWorkAlt),
                date: "August 2021 - March 2022 (8 mos)",
                startDate: "2021-08-01",
                endDate: "2022-03-31",
            },
            {
                title: "Software Development Intern",
                description:
                    "During my final term of graduation, I joined Statiq as their first developer, working directly under the CTO." + " " +
                    "I optimized communication via AWS SQS, enhancing data efficiency by 30%, and architected a MySQL database, boosting system efficiency by 40%." + " " +
                    "I also implemented IEC61851 models for EV chargers, increasing reliability and user satisfaction by 25%.",
                icon: React.createElement(CgWorkAlt),
                date: "January 2021 - July 2021 (7 mos)",
                startDate: "2021-01-01",
                endDate: "2021-07-31",
            },
        ],
    },
];

export const educationData = [
    {
        institution: "SUNY - University at Buffalo",
        location: "Buffalo, NY",
        totalDuration: "August 2023 - December 2024",
        duration: { years: 1, months: 5 },
        degrees: [
            {
                title: "Master of Science in Computer Science",
                description: `CGPA: 3.875/4.0
    Coursework: Deep Learning, Data Models and Query Languages, Algorithms, Technological Entrepreneurship, Computer Vision and Image Processing`,
                icon: React.createElement(LuGraduationCap),
                date: "August 2023 - December 2024",
                startDate: "2023-08-01",
                endDate: "2024-12-31",
            },
        ],
    },
    {
        institution: "MIT - WPU",
        location: "Pune, India",
        totalDuration: "July 2017 – October 2021",
        duration: { years: 4, months: 4 },
        degrees: [
            {
                title: "B.Tech in Electronics and Communication Engineering",
                description: `CGPA: 3.875/4.0
    Coursework: Data Science, Fuzzy Logic and Graph theory, NLP, Neural Networks, Pattern Recognition`,
                icon: React.createElement(LuGraduationCap),
                date: "July 2017 – October 2021",
                startDate: "2017-07-01",
                endDate: "2021-10-31",
            },
        ],
    },
];

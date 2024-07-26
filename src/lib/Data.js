import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import publicationOneImg  from "@/public/publicationOneImg.png"
import projectOcr from "@/public/projectOcr.png"
import wordanalyticsImg from "@/public/wordanalytics.png";
import projectBMS from "@/public/projectBMS.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Publications",
    hash: "#publications",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Awards",
    hash: "#awards",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
];

export const experiencesData = [
  {
    title: "Software Development Intern (Internship)",
    location: "SUNY - Research Foundation, NY",
    description:
      "As I was praised by my seniors for my work, my part-time was converted into an Internship." + " " +
      "During this period, I enhanced the backend and UI of a genomic search platform, " + 
      "implemented multi-threading to reduce download speeds by 82%, and developed GraphQL APIs " +
      "for efficient data fetching, significantly improving user experience.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2024 - August 2024 (4 mos)",
  },
  {
    title: "Assistant Full-Stack Developer (Part-time)",
    location: "SUNY - Research Foundation, NY",
    description:
      "I worked as a Full-Stack developer for 9 months while completing my Masters Degree." + " " +
      "I harnessed Python, React, Next.js, and GraphQL to architect a high performance search engine, " + 
      "signficantly boosting efficiency and culmunating in a 40% improvement in search response times.",
    icon: React.createElement(LuGraduationCap),
    date: "September 2023 - April 2024 (8 mos)",
  },
  {
    title: "Software Development Engineer II",
    location: "Statiq (Y-Combinator S20), India",
    description:
      "As a Software Development Engineer II, I led the WebSockets and EV Charger teams, strategizing with the CTO to secure $25.7M in Series A funding." + " " + 
      "My team upgraded to an ASGI framework, boosting connectivity by 2600% with Kubernetes." + " " + 
      "I engineered the OCPI HUB for global EV charger access and developed DC charger firmware (60kW: CCS) for seamless use via OCPP 1.6 protocol.",
    icon: React.createElement(CgWorkAlt),
    date: "April 2022 - June 2023 (1 yr 3 mos)",
  },
  {
    title: "Software Development Engineer I",
    location: "Statiq (Y-Combinator S20), India",
    description: 
    "After my internship, I received a full-time offer at Statiq." + " " + 
    "I built a notification panel using Firebase and AWS Lambda, boosting marketing efficiency." + " " + 
    "I integrated Sentry, Stripe, and RazorPay for better debugging, logging, and payments." + " " + 
    "I developed RESTful APIs with Python and MySQL, improving the EV user-charger interface.",
    icon: React.createElement(CgWorkAlt),
    date: "August 2021 - March 2022 (8 mos)",
  },
  {
    title: "Software Development Intern",
    location: "Statiq (Y-Combinator S20), India",
    description:
      "During my final term of graduation, I joined Statiq as their first developer, working directly under the CTO." + " " + 
      "I optimized communication via AWS SQS, enhancing data efficiency by 30%, and architected a MySQL database, boosting system efficiency by 40%." + " " + 
      "I also implemented IEC61851 models for EV chargers, increasing reliability and user satisfaction by 25%.",
    icon: React.createElement(CgWorkAlt),
    date: "January 2021 - July 2021 (7 mos)",
  },
];

export const educationData = [
  {
    title: "Master of Science in Computer Science",
    location: "SUNY - University at Buffalo, NY",
    description: `CGPA: 3.875/4.0
    Coursework: Deep Learning, Data Models and Query Languages, Algorithms, Technological Entrepreneurship, Computer Vision and Image Processing`,
    icon: React.createElement(LuGraduationCap),
    date: "August 2023 - December 2024",
  },
  {
    title: "B.Tech in ECE - Artificial Intelligence",
    location: "Maharashtra Institute of Technology - WPU, Pune",
    description: `CGPA: 3.875/4.0
    Coursework: Data Science, Fuzzy Logic and Graph theory, NLP, Neural Networks, Pattern Recognition`,
    icon: React.createElement(LuGraduationCap),
    date: "July 2017 – October 2021",
  },
];

export const projectsData = [
  {
    title: "IMDb Score Prediction System",
    description:
      "Anticipated IMDb scores with a predictive model using ensemble learning, enhancing user experience by employing ReactJS, MUI, and JavaScript for a dynamic front-end, and Python Flask for robust backend operations. CI/CD using AWS CodePipeline.",
    tags: ["Python", "PyTorch", "React", "MUI", "Ensemble Models"],
    imageUrl: projectOcr,
  },
  {
    title: "Bookstore Management System",
    description:
      "Developed a bookstore management platform reducing search times to 46ms for 10,000+ books. Improved scalability and efficiency with a relational database, and streamlined deployment with Docker.",
    tags: ["FastAPI", "AWS Lambda", "SQL", "Docker"],
    imageUrl: projectBMS,
  },
  {
    title: "Health Monitoring Dashboard",
    description:
      "Achieved real-time monitoring of over 50 patients' health metrics by developing a central hub that aggregates data streams from 78 medical devices using WebSockets and AWS IoT Core.",
    tags: ["Websockets", "AWS IoT Core", "Python", "React", "Next.js", "SQL", "MongoDB"],
    imageUrl: projectOcr,
  },
  {
    title: "Handwriting-Based Mental Health Analysis",
    description:
      "Predicted mental health states with a handwriting analysis model using SVM classifiers. Improved image quality with Adobe Photoshop and OpenCV pre-processing pipeline, and enabled sample analysis via a web portal.",
    tags: ["Python", "SVM Classifier", "React", 'Django'],
    imageUrl: projectOcr,
  },
  {
    title: "OCR using Google Cloud Platform",
    description:
      "Achieved real-time text extraction and multilingual translation by developing an OCR system with Google Vision API. Engineered an efficient image storage workflow on Google Cloud Platform, leveraging the OCR module for seamless text processing.",
    tags: ["Google Vision API", "GCP", "SQL"],
    imageUrl: projectOcr,
  },
  {
    title: "Molecular Solubility Prediction Using Deep Graph Neural Networks",
    description:
      "Predicted compound solubility in water by training a deep graph neural network in PyTorch, significantly advancing the accuracy of molecular solubility predictions.",
      tags: ["PyTorch", "GNNs", "Deep Learning"],
      imageUrl: projectOcr,
  },
];

export const publicationsData = [
  {
    title: "Deep Learning Techniques for Human Activity Recognition, IJISRT",
    description:
      "Published a research paper in IJISRT on advanced deep learning techniques for human activity recognition, demonstrating significant improvements in video-based analysis accuracy.",
      tags: ["Deep Learning", "Human Activity Recognition"],
      imageUrl: publicationOneImg,
      url: "https://ijisrt.com/deep-neural-network-approachesfor-video-based-human-activity-recognition",
  },
];

export const skillsData = [
  "Python",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Go",
  "AWS Services",
  "Websockets",
  "FastApi",
  "GraphQL",
  "Django",
  "Flask",
  "OCPP",
  "HTML",
  "CSS",
  "Git",
  "Tailwind",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Redux",
  "Framer Motion",
  "PyTorch",
  "MUI (Material-UI)",
  "Docker",
  "AWS CodePipeline",
  "AWS IoT Core",
  "Google Cloud Platform (GCP)",
  "OpenCV",
];

export const awardsData = [
  {
    title: "All India Rank 1, ABU Robocon",
    description: "Engineered omni-directional robots with ARM Cortex M4 and advanced sensor integration, completing tasks within 90 seconds.",
    year: "2020",
  },
  {
    title: "All India Rank 3, NIOT SAVe",
    description: "Programmed an AUV using NVIDIA Jetson TX1 and integrated PyKinect and ROS libraries for task-specific image processing.",
    year: "2019",
  },
  {
    title: "All India Rank 2, ABU Robocon",
    description: "Devised a coordinate-mapping equation for a robot with rotary encoders, enabling precise autonomous movement to any location.",
    year: "2018",
  },
];



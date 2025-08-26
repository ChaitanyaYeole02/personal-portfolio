"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/Hooks";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

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

// Contact methods data
const contactMethods = [
  {
    name: "Email",
    href: "mailto:cyeole@outlook.com",
    icon: FaEnvelope,
    description: "Send me a direct email",
    buttonClass: "gameboy-button-email"
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/chaitanyayeole",
    icon: FaLinkedin,
    description: "Connect with me professionally",
    buttonClass: "gameboy-button-linkedin"
  },
  {
    name: "GitHub",
    href: "https://github.com/ChaitanyaYeole",
    icon: FaGithub,
    description: "Check out my code projects",
    buttonClass: "gameboy-button-github"
  }
];

// Memoized Contact Method Component
const ContactMethod = React.memo(({ method }) => (
  <motion.a
    href={method.href}
    target="_blank"
    rel="noopener noreferrer"
    className={`${method.buttonClass} group flex flex-col items-center text-center p-6 rounded-lg transition-all duration-300 hover:scale-105`}
    whileHover={{ y: -5 }}
  >
    <method.icon className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-200" />
    <h4 className="font-semibold text-sm mb-2">{method.name}</h4>
    <p className="text-xs opacity-90 leading-relaxed">{method.description}</p>
  </motion.a>
));

ContactMethod.displayName = 'ContactMethod';

// Main Contact Component
export default function Contact() {
  const { ref } = useSectionInView("Contact");

  // Memoized contact methods display
  const contactMethodsDisplay = useMemo(() => (
    <div className="w-full max-w-4xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {contactMethods.map((method, index) => (
          <ContactMethod key={index} method={method} />
        ))}
      </div>
    </div>
  ), []);

  return (
    <section
      id="contact"
      ref={ref}
      className="mb-28 max-w-6xl text-center sm:mb-0 scroll-mt-28"
    >
      {/* Header Section */}
      <motion.div
        className="mb-12 mt-4 px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="gameboy-title text-3xl">Get In Touch</h2>
        <p className="mt-4 text-lg">Choose your preferred way to connect</p>
      </motion.div>

      {/* Content Container */}
      <motion.div
        className="flex flex-col items-center px-4"
        variants={contentVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Contact Methods Grid */}
        {contactMethodsDisplay}
      </motion.div>
    </section>
  );
}

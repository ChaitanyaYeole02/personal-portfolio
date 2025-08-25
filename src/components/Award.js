"use client";

import { motion } from "framer-motion";

export default function Award({ title, description, year }) {
  return (
    <motion.div
      className="group mb-3 sm:mb-8 last:mb-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className="terminal-bg pixel-border p-6">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{title}</h3>
        <p className="mt-2 leading-relaxed text-green-600 dark:text-green-400">
          {description}
        </p>
        <span className="block mt-4 text-sm text-green-600 dark:text-green-400">
          {year}
        </span>
      </section>
    </motion.div>
  );
}

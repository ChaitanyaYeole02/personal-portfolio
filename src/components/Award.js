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
      <section className="bg-gray-100 border border-black/5 rounded-lg p-6 dark:bg-white/10 dark:text-white">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
          {description}
        </p>
        <span className="block mt-4 text-sm text-gray-500 dark:text-white/50">
          {year}
        </span>
      </section>
    </motion.div>
  );
}

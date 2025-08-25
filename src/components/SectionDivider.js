"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      className="my-24 h-2 w-full max-w-4xl hidden sm:block pixel-border"
      style={{
        backgroundColor: 'hsl(var(--pop-yellow))',
        borderColor: 'hsl(var(--gameboy-darkest))',
        boxShadow: '1px 1px 0 hsl(var(--gameboy-darkest)), 2px 2px 0 hsl(var(--gameboy-darkest))'
      }}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    ></motion.div>
  );
}

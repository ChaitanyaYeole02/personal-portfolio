import React from "react";

export default function SectionHeading({ children }) {
  return (
    <h2 className="text-3xl font-medium capitalize mb-8 text-center terminal-bg p-4 pixel-border text-green-600 dark:text-green-400">
      {children}
    </h2>
  );
}

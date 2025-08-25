import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center">
      <div className="terminal-bg p-6 pixel-border">
        <small className="mb-2 block text-xs text-green-600 dark:text-green-400">
          &copy; 2024 CY. All rights reserved.
        </small>
        <p className="text-xs text-green-600 dark:text-green-400">
          <span className="font-semibold text-gray-900 dark:text-white">About this website:</span> built with
          React & Next.js (App Router & Server Actions), Javascript, Tailwind CSS,
          Framer Motion, React Email & Resend, Roote 53 hosting.
        </p>
      </div>
    </footer>
  );
}

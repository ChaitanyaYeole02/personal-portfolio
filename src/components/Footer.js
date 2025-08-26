import React from "react";
import { FaHeart } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mb-10 px-4 text-center">
      <div className="border-t border-gray-200 dark:border-gray-700 pt-6 max-w-2xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              &copy; {currentYear} <span className="font-semibold text-[#4A90E2]">Chaitanya Yeole</span>. All rights reserved.
            </p>
          </div>

          <div className="text-center sm:text-right">
            <p className="text-xs text-gray-500 dark:text-gray-500 flex items-center justify-center sm:justify-end gap-2">
              Made with <FaHeart className="text-red-500 text-xs" /> using modern web technologies
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Publication({
  title,
  description,
  tags,
  imageUrl,
  url,
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <a href={url} target="_blank" rel="noopener noreferrer">
        <section className="terminal-bg max-w-[42rem] pixel-border overflow-hidden sm:pr-8 relative sm:h-[26rem] hover:bg-gray-200 dark:hover:bg-gray-800 transition sm:group-even:pl-8">
          <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[51%] flex flex-col h-full sm:group-even:ml-[18rem]">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{title}</h3>
            <p className="mt-2 leading-relaxed text-green-600 dark:text-green-400">
              {description}
            </p>
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
              {tags.map((tag, index) => (
                <li
                  className="bg-white text-black dark:bg-black dark:text-white px-3 py-1 text-[0.7rem] uppercase tracking-wider pixel-border"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <Image
            src={imageUrl}
            alt="Publication I worked on"
            quality={95}
            className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] pixel-border
            transition 
            group-hover:scale-[1.04]
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2

            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2

            group-even:right-[initial] group-even:-left-40"
          />
        </section>
      </a>
    </motion.div>
  );
}

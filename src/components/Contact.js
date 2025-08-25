"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/Hooks";
import { sendEmail } from "@/actions/SendEmail";
import SubmitBtn from "./SubmitBtn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const { data, error } = await sendEmail(formData);

    if (error) {
      toast.error(error);
      return;
    }

    toast.success("Email sent successfully!");
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-green-600 dark:text-green-400 -mt-6">
        Please contact me directly at{" "}
        <a className="underline text-gray-900 dark:text-white" href="mailto:cyeole99@gmail.com">
          cyeole@outlook.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col"
        onSubmit={handleSubmit}
      >
        <input
          className="h-14 px-4 terminal-bg pixel-border text-green-600 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 focus:outline-none focus:border-green-600 dark:focus:border-green-400"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 terminal-bg pixel-border p-4 text-green-600 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 focus:outline-none focus:border-green-600 dark:focus:border-green-400"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}

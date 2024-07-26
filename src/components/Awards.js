"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { awardsData } from "@/lib/Data";
import Award from "./Award";
import { useSectionInView } from "@/lib/Hooks";

export default function Awards() {
  const { ref } = useSectionInView("Awards", 0.5);

  return (
    <section ref={ref} id="awards" className="scroll-mt-28 mb-28">
      <SectionHeading>My Awards</SectionHeading>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        {awardsData.map((award, index) => (
          <React.Fragment key={index}>
            <Award {...award} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { publicationsData } from "@/lib/Data";
import Publication from "./Publication";
import { useSectionInView } from "@/lib/Hooks";

export default function Publications() {
  const { ref } = useSectionInView("Publications", 0.5);

  return (
    <section ref={ref} id="publications" className="scroll-mt-28 mb-28">
      <SectionHeading>My Publications</SectionHeading>
      <div>
        {publicationsData.map((publication, index) => (
          <React.Fragment key={index}>
            <Publication {...publication} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

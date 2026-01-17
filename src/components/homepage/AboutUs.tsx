import React from "react";
import { AnimatedGradientText } from "../magicui/animated-gradient-text";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import { content } from "@/lib/constants";
import SectionTitle from "../Title";

function AboutUs() {
  return (
    <div className="w-full py-10 flex flex-col items-center gap-2">
      <SectionTitle
        title="About Us"
        description="We are a team of passionate developers and designers who love to create amazing things"
      />

      <StickyScroll content={content} />
    </div>
  );
}

export default AboutUs;

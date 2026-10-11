import React from "react";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="flex flex-col relative min-h-[100dvh] text-center md:text-left md:flex-row max-w-7xl mx-auto px-6 sm:px-10 pt-36 pb-12 md:pt-24 gap-8 justify-evenly items-center"
    >
      <SectionHeader sectionName="About" />

      {/* Left side image */}
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex-shrink-0 w-40 h-40 sm:w-56 sm:h-56 rounded-full object-contain md:rounded-lg xl:w-[400px] xl:h-[400px]"
        src="/Assets/images/Software-Developer.svg"
        alt="Software developer illustration"
        width={300}
        height={300}
      />

      {/* Right Side Content */}
      <div className="space-y-6 md:space-y-8 min-w-0">
        <h4 className="text-3xl sm:text-4xl font-semibold">
          WHO <span className="underline decoration-[#FFA500]/50">AM</span> I ?
        </h4>

        <motion.p
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-gray-400 max-w-2xl text-sm sm:text-base lg:text-lg"
        >
          Hello, I&apos;m Ashwin. A Frontend Architect with 5+ years owning architectural decisions,
          team leadership and delivery across enterprise and startup products. I work deeply with React, TypeScript,
          Next.js and Micro Frontends, and I&apos;m currently leading a migration from Webpack Module Federation to Vite with Zustand
          as the shared state layer. I&apos;m an AI-native engineer who uses Claude Code, GitHub Copilot and Codex daily.
          I went from a mentee at SIH (SMART INDIA HACKATHON) to a mentor at UIAH (UNESCO INDIA AFRICA HACKATHON).
          I&apos;m down to watch or play some sport if you have a spot. Could give a run for your money on an 8<sup>2</sup> box board game if you have figured out what the game is !!!
        </motion.p>

        <div className="flex justify-center md:justify-start">
          <button
            onClick={() => { window.open(`/Assets/Ashwin-resume.pdf`, '_blank') }}
            className='w-full max-w-xs font-semibold rounded-lg px-5 py-3 bg-[#FFA500]/70 hover:bg-[#FFA500] flex justify-center items-center'
          >
            <span>Download Resume</span>
            <ArrowDownTrayIcon className="h-5 w-8" />
          </button>
        </div>

        {/* Baseline */}
        <hr style={{ borderColor: "#FFA500" }} />
      </div>
    </motion.div>
  );
};

export default About;

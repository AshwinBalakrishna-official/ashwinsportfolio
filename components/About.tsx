import React from "react";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
      }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly items-center"
    >
      {/* <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About
        </h3> */}
      <SectionHeader sectionName="About" />

        {/* Left side image */}
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="-mb-20 xl:mt-20 md:mb-0 mt-20 flex-shrink-0 w-56 h-56 rounded-full object-fit md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[400px]"
        src="Assets/images/Software-Developer.svg"
        alt="no img found"
        width={300}
        height={300}
      />

        {/* Right Side Content */}
      <div className="space-y-10 px-0 md:px-10">
        
        {/* Heading for Intro */}
        <h4 className="text-4xl font-semibold">
          WHO <span className="underline decoration-[#F7AB0A]/50">AM</span> I ?
        </h4>

        {/* Paragraph for intro */}
        <motion.p
          initial={{
            y: 100,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="text-base text-lg font-semibold"
        >
          Hey this is Ash... I am a front End web developer highly passionate
          about coding and designing. A coffee addict with insomnia, I&apos;m a
          computer grad who is enthusiastic about bringing ideas into life and
          brainstorm solutions to make work life easier... Got a place to
          hangout and watch football or cricket matches, count me in.
        </motion.p>
        <br />
        <br />

        {/* Baseline */}
        <hr style={{ borderColor: "#F7AB0A" }} />

        
      </div>
    </motion.div>
  );
};

export default About;

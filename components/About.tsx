import React from "react";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

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
        className="-mb-20 xs:mb-0  xl:mt-20 mt-20  xs:mt-24 flex-shrink-0 w-56 h-56 rounded-full object-fit md:rounded-lg xl:w-[400px] xl:h-[400px]"
        src="Assets/images/Software-Developer.svg"
        alt="no img found"
        width={300}
        height={300}
      />

        {/* Right Side Content */}
      <div className="space-y-10 xs:space-y-3 px-0 md:px-0 ">
        
        {/* Heading for Intro */}
        <h4 className="text-4xl font-semibold">
          WHO <span className="underline decoration-[#FFA500]/50">AM</span> I ?
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
          className="text-gray-400 max-w-2xl xl:text-lg xl:font-semibold md:text-lg md:font-semibold xs:text-sm xs:font-thin xs:mb-0"
        >

          Hello, I&apos;m Ashwin. A vibrant front-end developer,
          highly skilled in designing progressive web applications using React and NextJs.
          I&apos;m a computer graduate who managed to complete his journey from a mentee in SIH (SMART INDIA HACKATHON) to becoming a mentor at UIAH (UNESCO INDIA AFRICA HACKATHON).
          Brainstorming ideas and finding solutions to make my job easier is a forte I enjoy.
          I&apos;m down to watch or play some sport if you have a spot. Could give a run for your money on an 8<sup>2</sup > box board game if you have figured out what the game is !!!
        </motion.p>
        

        <div className="items-center justify-center">
            <button onClick={()=>{
              window.open(`Assets/Ashwin-resume.pdf`,'_blank')
            }} className='w-[300px] xs:w-[20rem] font-semibold  rounded-lg px-5 py-3 bg-[#FFA500]/70 hover:bg-[#FFA500] flex justify-center items-center '> <span className=" flex-col">Download Resume</span>  <ArrowDownTrayIcon className="h-5 w-8  flex-col" /></button>
        </div> 
        <br />
        {/* Baseline */}
        <hr style={{ borderColor: "#FFA500" }} />

        
      </div>
    </motion.div>
  );
};

export default About;

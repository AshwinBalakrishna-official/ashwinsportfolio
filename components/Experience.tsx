import React from "react";
import ExperienceCard from "./ExperienceCard";
import SectionHeader from "./SectionHeader";

type Props = {};

const Experience = (props: Props) => {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly items-center">
      {/* <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Experience
        </h3> */}
      <SectionHeader sectionName="experience" />

      {/* Experience card */}

      <div className="mt-3 w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
        {/* Codingmart */}
        <ExperienceCard />

        {/* Codingmart-ABFRL */}
        <ExperienceCard />

        {/* Codingnmart-2HUB*/}
        <ExperienceCard />

        {/* Skillsify */}
        <ExperienceCard />
      </div>
    </div>
  );
};

export default Experience;

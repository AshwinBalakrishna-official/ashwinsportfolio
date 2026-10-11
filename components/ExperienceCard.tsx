import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  start : string;
  end : string;
  company: string;
  position:string;
  points: string[];
  img_url : string;
  techimgs :string[];
};

const ExperienceCard = ({start,end,company,position,points,img_url,techimgs}: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center flex-shrink-0 w-[85vw] max-w-[500px] snap-center px-5 sm:px-8 py-4 lg:opacity-60 lg:hover:opacity-100 bg-[#292929] transition-opacity duration-200 overflow-hidden">
      {/* Image of Company */}
      <motion.img
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="w-16 h-16 sm:w-24 sm:h-24 rounded object-contain my-1"
        src={img_url}
        alt={company}
      />

      <div className="w-full">
        {/* JOB TITLE */}
        <h4 className="text-base sm:text-lg font-light mt-3">{position}</h4>
        {/* Company Name */}
        <p className="font-bold text-lg sm:text-xl mt-1">{company}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1 my-3 justify-center md:justify-start">
          {techimgs.map((tlogo,idx)=>(
            <Image
              key={idx}
              src={tlogo}
              alt="tech logo"
              className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-white bg-opacity-85 p-1"
              width={100}
              height={100}
            />
          ))}
        </div>

        {/* Time Period */}
        <p className="uppercase text-sm sm:text-base py-1 text-gray-300">
          {start} - {end}
        </p>

        {/* summary points */}
        <ul className="list-disc space-y-2 ml-5 text-sm sm:text-base text-left max-h-[40vh] overflow-y-auto pr-2 scrollbar scrollbar-thin scrollbar-thumb-[#FFA500]/60 scrollbar-track-transparent">
          {points.map((point,idx)=>(
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;

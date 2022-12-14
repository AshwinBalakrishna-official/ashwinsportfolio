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
    <article className="flex flex-col rounded-lg items-center flex-shrink-0 w-[350px] md:w-[450px] xl:w-[500px] snap-center px-10 xl:px-5 py-3 xl:py-2 mt-24 md:mt-12 xl:mb-0 xl:opacity-40 hover:opacity-100 bg-[#292929]  cursor-pointer transition-opacity duration-200 overflow-hidden">
      {/* Image of Company */}
      <motion.img
        initial={{
          y: -50,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        viewport={{ once: true }}
        className="w-30 h-30 rounded xs:w-[80px] xs:h-[80px] xl:w-28 xl:h-28  object-left object-fit my-1"
        // Company Logo
        src={img_url}
        alt="No img"
      />

      {/* Work related to company */}
      <div className="px-0 xs:px-1">
        {/* JOB TITLE */}
        <h4 className="text-1xl font-light mt-3 ">{position}</h4>
        {/* Company Name */}
        <p className="font-bold text-xl mt-1 ">{company}</p>

        {/* Tech Stack */}
        <div className="flex space-x-1  my-5 xs:my-1">

          {techimgs.map((tlogo,idx)=>{
            return(
              <Image
              key={idx+"a"}
              src={tlogo}
              alt="No_img"
              className="h-10 w-10 rounded-full "
              width={100}
              height={100}
              />

            )
          })}
        
        </div>

        {/* Time Period */}
        <p className="uppercase py-1s text-gray-300">
          {start} - {end}
        </p>

        {/* summary points */}
        <ul className="list-disc space-y-2 ml-5 text-md md:text-lg xl:text-lg text-left">
          {points.map((point,idx)=>{
            return (<>
            <li>{point}</li>
           </> )
            
          })}
          
          
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;

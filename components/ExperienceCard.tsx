import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center flex-shrink-0 w-[400px] md:w-[500px] xl:w-[600px] snap-center p-5 mt-24 md:mt-28 xl:opacity-40 hover:opacity-100 bg-[#292929]  cursor-pointer transition-opacity duration-200 overflow-hidden">

        {/* Image of Company */}
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.5,
        }}

        viewport={{once :true}}

        className="w-16 h-16 rounded-full md:rounded-full xl:w-[80px] xl:h-[80px] object-center object-cover "
        

        // Company Logo
        src="Assets/logo/codingmartlogo.png"
        
        alt="No img"

        
        
      />

        {/* Work related to company */}
      <div className="px-0 md:px-5">
        {/* JOB TITLE */}
        <h4 className="text-2xl font-light">PRODUCT ENGINEER</h4>
        {/* Company Name */}
        <p className="font-bold text-1xl mt-1">Codingmart Technologies</p>

        {/* Tech Stack */}
        <div className="flex space-x-2 my-5 md:my-1">
            {/* Tech1 */}
            <img src="Assets/techlogo/NextjsIcon.png" alt="No_img"  className="h-10 w-10 rounded-full bg-white" />
            
            {/* Tech2 */}
            <Image src="/Assets/techlogo/ReactIcon.png" alt="No_img"  className="h-10 w-10 rounded-full bg-white" width={10} height={10} />

            {/* Tech3 */}
        </div>
        

        {/* Time Period */}
        <p className="uppercase py-2 text-gray-300">Started work - Ended work</p>

        {/* summary points */}
        <ul className="list-disc space-y-2 ml-5 text-lg">
          <li>summary points</li>
          <li>summary points</li>
          <li>summary points</li>
          <li>summary points</li>
          <li>summary points</li>
        </ul>

      </div>
    </article>
  );
};

export default ExperienceCard;

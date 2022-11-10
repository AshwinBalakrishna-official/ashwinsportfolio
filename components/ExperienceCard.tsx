import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article>

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
        className="w-32 h-32 rounded-full md:rounded-full xl:w-[150px] xl:h-[150px] object-center object-cover "
        src="Assets/logo/codingmartlogo.png"
        alt="No img"
        
      />

        {/* Work related to company */}
      <div>
        {/* JOB TITLE */}
        <h4>PRODUCT ENGINEER</h4>
        <p>Codingmart Technologies</p>

        {/* Tech Stack */}
        <div>
            {/* Tech1 */}

            
            {/* Tech2 */}


            {/* Tech3 */}
        </div>
        

        {/* Time Period */}
        <p>Started work - Ended work</p>

      </div>
    </article>
  );
};

export default ExperienceCard;

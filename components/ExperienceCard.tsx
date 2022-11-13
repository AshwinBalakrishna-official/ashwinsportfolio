import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center flex-shrink-0 w-[350px] md:w-[450px] xl:w-[550px] snap-center px-10 xl:px-5 py-3 xl:py-1 mt-24 md:mt-12 xl:mb-0 xl:opacity-40 hover:opacity-100 bg-[#292929]  cursor-pointer transition-opacity duration-200 overflow-hidden">
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
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full md:rounded-full md:w-[80px] md:h-[80px] xl:w-32 xl:h-32  object-left object-cover my-1"
        // Company Logo
        src="Assets/logo/codingmartlogo.png"
        alt="No img"
      />

      {/* Work related to company */}
      <div className="px-0 md:px-5">
        {/* JOB TITLE */}
        <h4 className="text-1xl font-light mt-3 ">PRODUCT ENGINEER</h4>
        {/* Company Name */}
        <p className="font-bold text-xl mt-1 ">Codingmart Technologies</p>

        {/* Tech Stack */}
        <div className="flex space-x-2 my-5 md:my-1">
          {/* Tech1 */}
          <Image
            src="/Assets/techlogo/NextjsIcon.png"
            alt="No_img"
            className="h-10 w-10 rounded-full bg-white"
            width={100}
            height={100}
          />

          {/* Tech2 */}
          <Image
            src="/Assets/techlogo/ReactIcon.png"
            alt="No_img"
            className="h-10 w-10 rounded-full "
            width={100}
            height={100}
          />

          {/* Tech3 */}
        </div>

        {/* Time Period */}
        <p className="uppercase py-2 text-gray-300">
          Started work - Ended work
        </p>

        {/* summary points */}
        <ul className="list-disc space-y-2 ml-5 text-md md:text-lg xl:text-lg text-left">
          <li>summary points better than my previous job </li>
          <li>summary points better than my previous job </li>
          <li>summary points better than my previous job </li>
          <li>summary points better than my previous job </li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;

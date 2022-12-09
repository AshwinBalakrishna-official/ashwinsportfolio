import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import SectionHeader from "./SectionHeader";

type Props = {};

const Projects = (props: Props) => { 
  const projects = [
    {
      url:"https://2hub.travel/home",
      img: "/Assets/logo/2HUBlogo.png",
      name: "Cinescape",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolorem ipsum quae ea sint quidem saepe porro ipsa eum. Quas commodi voluptatum numquam sit fuga quibusdam a culpa. Recusandae, expedita?",
    },

    {
      url:"",
      img: "/Assets/logo/ABFRLlogo.png",
      name: "CV-Maker",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolorem ipsum quae ea sint quidem saepe porro ipsa eum. Quas commodi voluptatum numquam sit fuga quibusdam a culpa. Recusandae, expedita?",
    },

    {
      img: "/Assets/logo/codingmartlogo.png",
      name: "KALANJU",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolorem ipsum quae ea sint quidem saepe porro ipsa eum. Quas commodi voluptatum numquam sit fuga quibusdam a culpa. Recusandae, expedita?",
    },

    {
      img: "/Assets/logo/skillsifylogo.png",
      name: "Skillsify",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolorem ipsum quae ea sint quidem saepe porro ipsa eum. Quas commodi voluptatum numquam sit fuga quibusdam a culpa. Recusandae, expedita?",
    },

    {
      img: "/Assets/logo/Tinderlogo.png",
      name: "TinDog",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolorem ipsum quae ea sint quidem saepe porro ipsa eum. Quas commodi voluptatum numquam sit fuga quibusdam a culpa. Recusandae, expedita?",
    },
  ];
  return (
    <div className="flex flex-col relative text-center md:flex-row max-w-full px-10 justify-evenly mx-auto items-center w-full z-0 h-screen">
      {/* <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
           Projects
        </h3> */}
      <SectionHeader sectionName="projects" />

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#88f305]/80 scrollbar-thin ">
        {/* Projects */}
        {projects.map((project, idx) => (
          <div
            key={idx + 1}
            className="w-screen mt-12 flex-shrink-0 snap-center items-center m-auto flex flex-col space-y-10 justify-center p-20"
          >
            <motion.img
              initial={{
                y: -150,
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              src={project.img}
              alt="no_img"
              className="m-auto w-32 rounded xs:mt-20"
            />
            <div className="space-y-5 xs:space-y-2 xl:px-20 xs:px-1 px-1 xs:max-w-6xl max-w-3xl ">
              <h3 className="text-4xl xs:text-2xl font-semibold text-center mb-1">
                {project.name}
              </h3>
              <p className="mt-2">{project.description}</p>
              <h4>
                <span className=" text-xl font-semibold underline decoration-[#88f305]">
                  Project: {idx + 1} of {projects.length}
                </span>
              </h4>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute mt-10 bg-[#88f305]/10 left-0 xl:h-[400px] h-[600px] w-full -skew-y-12"></div>
    </div>
  );
};

export default Projects;

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import SectionHeader from "./SectionHeader";

type Props = {};

const Projects = (props: Props) => { 
  const projects = [
    {
      url:"https://github.com/AshwinBalakrishna-official/cinescape-ott",
      img: "/Assets/logo/ciniscape_logo.png",
      name: "Cinescape",
      description:
        "Ciniscape is an OTT-aggregator website that aggregates all the OTT platforms that a movie is available in, in India while working as an intern as part of a team in Codingmart Technologies. Worked in Docker, AWS, CI, FullStack.",
    },

 

    {
      url : 'https://kalanju.com' ,
      img: "/Assets/logo/codingmartlogo.png",
      name: "KALANJU",
      description:
        "Kalanju - A Codingmart Technologies internal application for maintaining the details of its employees and tracking their everyday attendance. Kalanju is also used for tracking the company's assets provided to the employees and their project details. It is also used for managing the client details and users can also generate invoices and credit notes for clients within its integrated invoice management system.",
    },

    {
      url: 'https://skillsify.in/',
      img: "/Assets/logo/skillsifylogo.png",
      name: "Skillsify",
      description:
        "A full fledged e-commerce web application developed on Wordpress including stripe integration for selling gardening products, books and plants.Did this while I worked as the Head of web development as Skillsify",
    },

    // {
    //   url:'https://ashwinbalakrishna-official.github.io/Tindog/',
    //   img: "/Assets/logo/Tinderlogo.png",
    //   name: "TinDog",
    //   description:
    //     ' Tindog is a tinder clone meant for animals where  came up with a design using vanillaJs and pure bootstrap for the styling part '
    // },
  ];

  return (
    <div className="flex flex-col relative text-center md:flex-row max-w-full px-10 justify-evenly mx-auto items-center w-full z-0 h-screen">
      {/* <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
           Projects
        </h3> */}
      <SectionHeader sectionName="projects" />

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#FFA500]/80 scrollbar-thin ">
        {/* Projects */}
        {projects.map((project, idx) => (
          <div
            key={idx + 1}
            className="w-screen mt-12 flex-shrink-0 snap-center items-center m-auto flex flex-col space-y-10 justify-center p-20"
            onClick={()=>{window.open(project.url,'_blank')}}
            style={{cursor:"pointer"}}

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
              className="m-auto w-28 rounded xs:mt-20"
            />
            <div className="space-y-5 xs:space-y-2 xl:px-20 xs:px-1 px-1 xs:max-w-6xl max-w-3xl ">
              <h3 className="text-4xl xs:text-2xl font-semibold text-center mb-1">
                {project.name}
              </h3>
              <p className="mt-2">{project.description}</p>
              <h4>
                <span className=" text-xl font-semibold underline decoration-[#FFA500]">
                  Project: {idx + 1} of {projects.length}
                </span>
              </h4>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute mt-10 bg-[#FFA500]/10 left-0 xl:h-[400px] h-[600px] w-full -skew-y-12"></div>
    </div>
  );
};

export default Projects;

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import SectionHeader from "./SectionHeader";

type Props = {};

const Projects = (props: Props) => { 
  const projects = [
    // Solutions by Text
    {
      url: 'https://solutionsbytext.com/',
      img: "/Assets/logo/sbtlogo.png",
      name: "Solutions by Text — BPO Two-Way Chat Platform",
      description:
        "A real-time two-way chat PWA for BPO call centre operations, built at Payoda Technologies. Architected and own 10+ MFE modules using React.js, TypeScript and Webpack Module Federation, currently migrating to Vite with Zustand as the shared state layer. Eliminated lock-based operator-chat contention so multiple operators can handle concurrent multi-topic threads. Includes AWS Parameter Store runtime config and a zero-regression react-router-dom v5 to v7 upgrade.",
    },

    // ABFRL
    {
      url: 'https://allensolly.abfrl.in/',
      img: "/Assets/logo/ABFRLlogo.png",
      name: "Aditya Birla Fashion and Retail — CMS Dashboard",
      description:
        "Tech Lead for a team of 3 building a greenfield CMS dashboard using Next.js, Redux Toolkit, SSR/SSG, TypeScript and REST APIs. Drove HOC patterns and Redux Toolkit optimisations to reduce bundle size, enforced responsive design and WCAG a11y standards, and delivered on schedule with zero critical bugs at launch.",
    },

    // Sagent
    {
      url: 'https://sagent.com/dara/',
      img: "/Assets/logo/sagentlogo.png",
      name: "Sagent Dara Moonshot",
      description:
        "Dara is an industry-first mortgage software platform that unifies all data and user experiences for servicers and homeowners across the entire servicing lifecycle. Build customer relationships, reduce operational costs, and prioritize compliance within a single user experience for your teams and homeowners built on real-time, end-to-end data.",
    },
    
    // Skillsify
    {
      url: 'https://skillsify.in/',
      img: "/Assets/logo/skillsifylogo.png",
      name: "Skillsify",
      description:
        "A full fledged e-commerce web application developed on Wordpress including stripe integration for selling gardening products, books and plants.Did this while I worked as the Head of web development as Skillsify",
    },
      // Travolgo
      {
        name:'Travolgo',
        img: '/Assets/logo/travolgologo.png',
        description:
        "Hotel and travel booking platform at Codingmart Technologies. Achieved a 63.3% page load improvement through Webpack bundle optimisation, lazy loading and debouncing, and engineered an automated CI/CD pipeline that cut deployment time and removed manual release errors.",
        url: 'https://www.travolgo.com/home',
      },
    
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

   

    // {
    //   url:'https://ashwinbalakrishna-official.github.io/Tindog/',
    //   img: "/Assets/logo/Tinderlogo.png",
    //   name: "TinDog",
    //   description:
    //     ' Tindog is a tinder clone meant for animals where  came up with a design using vanillaJs and pure bootstrap for the styling part '
    // },
  ];

  return (
    <div className="flex flex-col relative min-h-[100dvh] max-w-full px-0 sm:px-10 pt-32 sm:pt-36 xl:pt-28 pb-10 justify-center mx-auto items-center w-full z-0 overflow-hidden">
      <SectionHeader sectionName="projects" />

      <div className="relative w-full flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#FFA500]/80 scrollbar-thin">
        {/* Projects */}
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="w-full flex-shrink-0 snap-center flex flex-col items-center justify-center space-y-6 sm:space-y-8 px-6 py-6 sm:p-12 lg:p-16 cursor-pointer"
            onClick={()=>{window.open(project.url,'_blank')}}
          >
            <motion.img
              initial={{ y: -150, opacity: 0 }}
              transition={{ duration: 1.2 }}
              animate={{ opacity: 1, y: 0 }}
              src={project.img}
              alt={project.name}
              className="w-24 sm:w-36 rounded-lg object-contain bg-white p-2"
            />
            <div className="space-y-3 sm:space-y-5 max-w-3xl">
              <h3 className="text-xl sm:text-3xl lg:text-4xl font-semibold text-center">
                {project.name}
              </h3>
              <p className="text-sm sm:text-base lg:text-lg max-h-[35vh] overflow-y-auto text-gray-300">{project.description}</p>
              <h4>
                <span className="text-base sm:text-xl font-semibold underline decoration-[#FFA500]">
                  Project: {idx + 1} of {projects.length}
                </span>
              </h4>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-1/3 bg-[#FFA500]/10 left-0 h-[60%] sm:h-[400px] w-full -skew-y-12 pointer-events-none"></div>
    </div>
  );
};

export default Projects;

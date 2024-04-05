import React from "react";
import ExperienceCard from "./ExperienceCard";
import SectionHeader from "./SectionHeader";

type Props = {};

const Experience = (props: Props) => {
  const points={
    codingmart: [' A vibrant React and NextJs front end developer ', 'Responsible for converting Figma designs to Interactive UI', 'Responsible for CI/CD Integration', 'Ec2 Instance Setup']
    }
    
  const experiences=[

    // Codingmart
    {
      company : 'Codingmart Technologies',
      company_img: 'Assets/logo/codingmartlogo.png',
      position : 'Senior Product Engineer ',
      start : 'MAR-2021',
      end: 'PRESENT',
      points: ['React and NextJs developer', 'Converted Figma designs to UI', 'Responsible for CI/CD Integration', 'Carried out the Ec2 Instance Setup', 'REST API creation'],
      tech: ['/Assets/techlogo/NextjsIcon.png', '/Assets/techlogo/ReactIcon.png','/Assets/techlogo/Nodejs.png', '/Assets/techlogo/dockerIcon.png','/Assets/techlogo/GitIcon.png']
    },
    
    // ABFRL
    {
      company :'Aditya Birla Fashion and Retail Ltd',
      company_img: 'Assets/logo/ABFRLlogo.png',
      position : 'React Js Developer (Consultant)',
      start : 'AUG-2022',
      end: 'PRESENT',
      points: ['CMS APPLICATION','Next/React Js developer', 'Revamped the website from PHP to React', 'Responsible for maintaining coding standards', 'Integrated Redux store to improve performance'],
      tech: ['/Assets/techlogo/NextjsIcon.png', '/Assets/techlogo/ReactIcon.png', '/Assets/techlogo/TSIcon.png','/Assets/techlogo/GitIcon.png', '/Assets/techlogo/tailwindcss.png']
    },
    
    // 2HUB
    {
      company :'2HUB',
      company_img: 'Assets/logo/2hublogo.png',
      position : 'NextJs Developer',
      start : 'SEP-2021',
      end: 'AUG-2022',
      points: ['Travel and hotel booking domain website','NextJs developer', 'Converted Figma designs to UI', 'Responsible for CI/CD Integration', 'Carried out the Ec2 Instance Setup'],
      tech: ['/Assets/techlogo/NextjsIcon.png','/Assets/techlogo/SassIcon.png', '/Assets/techlogo/dockerIcon.png', '/Assets/techlogo/GItIcon.png', '/Assets/techlogo/CICDIcon.png']
    },


    

     // Aztrikz Tech
     {
      company : 'Aztrikz Tech',
      company_img: 'Assets/logo/AztrikzTech.png',
      position : 'Founder',
      start : 'AUG-2019',
      end: 'MAR-2021',
      points: ['Founded and led Aztrikz Tech.', 'Proficient in understanding client needs' , 'Skilled in translating client requirements', 'Spearheaded the development and optimisation', 'Product and Project Owner'],
      tech: ['/Assets/techlogo/ReactIcon.png','/Assets/techlogo/wordpressicon.png','/Assets/techlogo/elementorIcon.png','/Assets/techlogo/bootstrapicon.png','/Assets/techlogo/GitIcon.png']
    },

    // Skillsify
    {
      company : 'Skillsify',
      company_img: 'Assets/logo/skillsifylogo.png',
      position : 'Head Of Web Development',
      start : 'JUL-2020',
      end: 'SEPT-2020',
      points: ['Wordpress developer', 'Created a full stack ecommerce application', 'Responsible for Integrating stripe payments', 'Deployed and setup the website', 'Improved  the SEO of the website'],
      tech: ['/Assets/techlogo/wordpressicon.png','/Assets/techlogo/elementorIcon.png', '/Assets/techlogo/stripe.png', '/Assets/techlogo/hostinger.png']
    },


  ]
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly items-center">
      {/* <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Experience
        </h3> */}
      <SectionHeader sectionName="experience" />

      {/* Experience card */}

      <div className="mt-3 w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#FFA500]/80 scrollbar-thin ">
        {/* Codingmart */}

        {experiences.map((exp,idx)=>{
          return(
             <ExperienceCard key={idx+'a'} img_url={exp.company_img}  company={exp.company} position={exp.position} start={exp.start} end={exp.end} points={exp.points}  techimgs={exp.tech}/>
          )

        })

        }

        {/* Codingmart-ABFRL */}
        {/* <ExperienceCard /> */}

        {/* Codingnmart-2HUB*/}
        {/* <ExperienceCard /> */}

        {/* Skillsify */}
        {/* <ExperienceCard /> */}
      </div>
    </div>
  );
};

export default Experience;

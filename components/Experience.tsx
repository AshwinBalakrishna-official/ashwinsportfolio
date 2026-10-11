import React from "react";
import ExperienceCard from "./ExperienceCard";
import SectionHeader from "./SectionHeader";

type Props = {};

const Experience = (props: Props) => {
      
  const experiences=[

    // Payoda
    {
      company : 'Payoda Technologies',
      company_img: '/Assets/logo/payodalogo.png',
      position : 'Frontend Architect / Software Engineer I',
      start : 'JUN-2024',
      end: 'PRESENT',
      points: [
        'Own frontend architecture: MFE topology, shared dependencies, state management and upgrade roadmap',
        'Leading migration from Webpack to Vite-based Module Federation with Zustand as shared state',
        'Delivered zero-regression react-router-dom v5 to v7 upgrade, a backlog item deferred for ~2 years',
        'Driving roadmap and architecture for a real-time BPO two-way chat platform',
        'AWS Parameter Store runtime config and LaunchDarkly from POC to production',
        '90%+ Jest + RTL coverage enforced as CI/CD gates',
      ],
      tech: [ '/Assets/techlogo/ReactIcon.png','/Assets/techlogo/TSIcon.png','/Assets/techlogo/launchdarklylogo.jpg','/Assets/techlogo/MaterialUiLogo.png','/Assets/techlogo/GitIcon.png']
    },

    // Codingmart
    {
      company : 'Codingmart Technologies',
      company_img: '/Assets/logo/codingmartlogo.png',
      position : 'Senior Product Engineer ',
      start : 'MAR-2021',
      end: 'JUN-2024',
      points: ['Tech Lead for a team of 3 frontend engineers', '63.3% page load improvement on Travolgo (2Hub) via Webpack optimisation and lazy loading', 'Improved SEO and WCAG a11y across 3 client projects', 'Designed end-to-end CI/CD pipelines and set up EC2 instances', 'Mentored junior developers on React/TypeScript best practices'],
      tech: ['/Assets/techlogo/NextjsIcon.png', '/Assets/techlogo/ReactIcon.png','/Assets/techlogo/Nodejs.png', '/Assets/techlogo/dockerIcon.png','/Assets/techlogo/GitIcon.png']
    },

    // ABFRL
    {
      company :'Aditya Birla Fashion and Retail Ltd (Consultant)',
      company_img: '/Assets/logo/ABFRLlogo.png',
      position : 'Tech Lead (Consultant)',
      start : 'AUG-2022',
      end: 'JUN-2024',
      points: ['Built the CMS Dashboard from scratch with a team of 3', 'Owned Next.js SSR/SSG strategy and Redux Toolkit state design', 'Revamped the website from PHP to React', 'HOC patterns and Redux Toolkit optimisations to reduce bundle size', 'Delivered on schedule with zero critical bugs at launch'],
      tech: ['/Assets/techlogo/NextjsIcon.png', '/Assets/techlogo/ReactIcon.png', '/Assets/techlogo/TSIcon.png','/Assets/techlogo/GitIcon.png', '/Assets/techlogo/tailwindcss.png']
    },

    // Aztrikz Tech
    {
      company : 'Aztrikz Tech',
      company_img: '/Assets/logo/AztrikzTech.png',
      position : 'Founder and Lead Frontend Engineer',
      start : 'AUG-2019',
      end: 'MAR-2021',
      points: ['Founded a web solutions startup', 'Delivered 3 end-to-end client products with React.js, Next.js and WordPress', 'Managed architecture, development, CI/CD pipelines and AWS deployments', 'Product and Project Owner'],
      tech: ['/Assets/techlogo/ReactIcon.png','/Assets/techlogo/wordpressIcon.png','/Assets/techlogo/elementorIcon.png','/Assets/techlogo/bootstrapIcon.png','/Assets/techlogo/GitIcon.png']
    },

    // Skillsify
    {
      company : 'Skillsify',
      company_img: '/Assets/logo/skillsifylogo.png',
      position : 'Head Of Web Development',
      start : 'JUL-2020',
      end: 'SEPT-2020',
      points: ['Wordpress developer', 'Created a full stack ecommerce application', 'Responsible for Integrating stripe payments', 'Deployed and setup the website', 'Improved the SEO of the website'],
      tech: ['/Assets/techlogo/wordpressIcon.png','/Assets/techlogo/elementorIcon.png', '/Assets/techlogo/stripe.png', '/Assets/techlogo/hostinger.png']
    },
  ]
  return (
    <div className="flex flex-col relative min-h-[100dvh] text-center md:text-left max-w-7xl mx-auto px-4 sm:px-10 pt-32 sm:pt-36 xl:pt-28 pb-8 justify-center items-center">
      <SectionHeader sectionName="experience" />

      {/* Experience cards */}
      <div className="w-full flex gap-5 overflow-x-auto py-6 px-2 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#FFA500]/80 scrollbar-thin">
        {experiences.map((exp,idx)=>(
          <ExperienceCard key={idx} img_url={exp.company_img} company={exp.company} position={exp.position} start={exp.start} end={exp.end} points={exp.points} techimgs={exp.tech}/>
        ))}
      </div>
    </div>
  );
};

export default Experience;

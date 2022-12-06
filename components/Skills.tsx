import React from 'react'
import SectionHeader from './SectionHeader'
import Skill from './Skill'
import { motion } from 'framer-motion';

type Props = {}

const Skills = (props: Props) => {
  return (
    <motion.div 
    initial={{
      opacity :0 
    }}

    whileInView={{
      opacity:1
    }}

    transition={{
      duration: 1.5
    }}
    
    
    
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly items-center'>
        {/* <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Skills
        </h3> */}

        <SectionHeader sectionName="skills" />
        
        <h3 className='absolute top-36 xl:top-36 md:top-24 uppercase tracking-[3px] text-gray-500 text-sm'>
          Hover over a skill to view Proficiency
        </h3>

        {/* List all skills */}
        <div className='grid grid-cols-4 gap-5 mt-20 '>
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
        </div>
    </motion.div>
  )
}

export default Skills
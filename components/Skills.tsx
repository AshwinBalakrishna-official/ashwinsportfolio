import React from 'react'
import SectionHeader from './SectionHeader'
import Skill from './Skill'
import { motion } from 'framer-motion';

type Props = {}

const Skills = (props: Props) => {
  return (
    <motion.div 
    
    
    
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly items-center'>
        {/* <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Skills
        </h3> */}

        <SectionHeader sectionName="skills" />

        {/* List all skills */}
        <div className='grid grid-cols-4 gap-5'>
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
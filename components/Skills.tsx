import React from 'react'
import SectionHeader from './SectionHeader'

type Props = {}

const Skills = (props: Props) => {
  return (
    <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly items-center'>
        {/* <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Skills
        </h3> */}

        <SectionHeader sectionName="skills" />
    </div>
  )
}

export default Skills
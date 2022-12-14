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
        
        <h3 className='absolute top-24 xl:top-28 md:top-24 uppercase tracking-[3px] text-gray-500 text-sm'>
          Hover or click over a skill to view Proficiency
        </h3>

        {/* List all skills */}
        <div className='grid grid-cols-4 gap-5 mt-28 '>
          <Skill url={"/Assets/techlogo/NextjsIcon.png"} score={80} />
          <Skill url={"/Assets/techlogo/Reacticon.png"} score={85}/>
          <Skill url={"/Assets/techlogo/Jsicon.png"} score={90}/>
          <Skill url={"/Assets/techlogo/TSIcon.png"} score={75}/>
          <Skill url={"/Assets/techlogo/Nodejs.png"} score={70}/>
          <Skill url={"/Assets/techlogo/tailwindcss.png"} score={85}/>
          <Skill url={"/Assets/techlogo/bootstrapicon.png"} score={90}/>
          <Skill url={"/Assets/techlogo/Sassicon.png"} score={75}/>
          <Skill url={"/Assets/techlogo/Giticon.png"} score={90}/>
          <Skill url={"/Assets/techlogo/dockericon.png"} score={75}/>
          <Skill url={"/Assets/techlogo/wordpressicon.png"} score={85}/>
          <Skill url={"/Assets/techlogo/elementoricon.png"} score={90}/>
          <Skill url={"/Assets/techlogo/PythonIcon.png"} score={90}/>
          <Skill url={"/Assets/techlogo/NumpyIcon.png"} score={70}/>
          <Skill url={"/Assets/techlogo/PandasIcon.png"} score={70}/>
          <Skill url={"/Assets/techlogo/MangoIcon.png"} score={70}/>
          
          

        </div>
    </motion.div>
  )
}

export default Skills
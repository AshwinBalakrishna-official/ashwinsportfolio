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
    
    
    
    className='flex flex-col relative min-h-[100dvh] text-center max-w-7xl mx-auto px-6 sm:px-10 pt-40 pb-12 justify-center items-center'>
        {/* <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Skills
        </h3> */}

        <SectionHeader sectionName="skills" />
        
        <h3 className='absolute top-32 sm:top-36 xl:top-28 left-0 right-0 px-6 text-center uppercase tracking-[2px] sm:tracking-[3px] text-gray-500 text-xs sm:text-sm'>
          Hover or tap a skill to view Proficiency
        </h3>

        {/* List all skills */}
        <div className='grid grid-cols-4 gap-4 sm:gap-6 xl:gap-8 justify-items-center mt-6'>
          <Skill url={"/Assets/techlogo/NextjsIcon.png"} score={80} />
          <Skill url={"/Assets/techlogo/ReactIcon.png"} score={85}/>
          <Skill url={"/Assets/techlogo/JsIcon.png"} score={90}/>
          <Skill url={"/Assets/techlogo/TSIcon.png"} score={85}/>
          <Skill url={"/Assets/techlogo/MaterialUiLogo.png"} score={90}/>
          <Skill url={"/Assets/techlogo/tailwindcss.png"} score={85}/>
          <Skill url={"/Assets/techlogo/bootstrapIcon.png"} score={90}/>
          <Skill url={"/Assets/techlogo/SassIcon.png"} score={80}/>
          <Skill url={"/Assets/techlogo/recoillogo.svg"} score={80}/>
          <Skill url={"/Assets/techlogo/Nodejs.png"} score={70}/>
          <Skill url={"/Assets/techlogo/MangoIcon.png"} score={70}/>
          <Skill url={"/Assets/techlogo/GitIcon.png"} score={90}/>
          <Skill url={"/Assets/techlogo/dockerIcon.png"} score={75}/>
          <Skill url={"/Assets/techlogo/wordpressIcon.png"} score={85}/>
          <Skill url={"/Assets/techlogo/elementorIcon.png"} score={90}/>
          <Skill url={"/Assets/techlogo/PythonIcon.png"} score={90}/>
        </div>
    </motion.div>
  )
}

export default Skills
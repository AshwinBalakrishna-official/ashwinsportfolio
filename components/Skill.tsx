import { motion } from 'framer-motion';
import React from 'react'

type Props = {

  directionLeft?: boolean ;
}

const Skill = ({directionLeft}: Props) => {
  return (
    <div className='group relative flex cursor-pointer '>
      <motion.img 
        initial={{
          x: directionLeft? -200 :200,
          opacity : 0
        }
      }

      whileInView={{
        x:0,
        opacity:1
      }}

      transition={{
        duration :1.5
      }}

      src="Assets/techlogo/NextjsIcon.png"

      className='rounded-full border border-gray-500 object-cover w-18 h-18 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out'
      />

      <div className='absolute rounded-full opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-16 h-16 xl:w-24 xl:h-24'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-1xl xl:text-3xl font-bold text-black'>100%</p>
        </div>
      </div>

    </div>

   
  )
}

export default Skill
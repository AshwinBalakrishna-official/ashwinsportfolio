import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react'

type Props = {

  directionLeft?: boolean ;
  url :string;
  score :number;
}

const Skill = ({directionLeft,url,score}: Props) => {
  return (
    <div className='group relative flex cursor-pointer '>
      <Image src={url}
      alt="no_img"
      className='rounded-full p-2 border border-gray-500 object-cover w-18 h-18 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out'
      width={100}
      height={100}
      />

      <div className='absolute rounded-full opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-16 h-16 xl:w-24 xl:h-24 z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-1xl xl:text-3xl font-bold text-black' style={{userSelect: "none"}}>{score}%</p>
        </div>
      </div>

    </div>

   
  )
}

export default Skill
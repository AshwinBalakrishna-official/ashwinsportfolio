import Image from 'next/image';
import React from 'react'

type Props = {
  directionLeft?: boolean ;
  url :string;
  score :number;
}

const Skill = ({directionLeft,url,score}: Props) => {
  return (
    <div className='group relative flex cursor-pointer w-16 h-16 sm:w-20 sm:h-20 xl:w-24 xl:h-24'>
      <Image src={url}
      alt="skill"
      className='rounded-full p-2 border border-gray-500 object-cover w-full h-full filter group-hover:grayscale transition duration-300 ease-in-out'
      width={100}
      height={100}
      />

      <div className='absolute inset-0 rounded-full opacity-0 group-hover:opacity-80 group-active:opacity-80 transition duration-300 ease-in-out group-hover:bg-white group-active:bg-white z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-base sm:text-xl xl:text-3xl font-bold text-black' style={{userSelect: "none"}}>{score}%</p>
        </div>
      </div>
    </div>
  )
}

export default Skill

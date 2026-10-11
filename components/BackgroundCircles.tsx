import React from 'react';
import {motion} from 'framer-motion';

type Props = {}

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{
        scale : [1,0.3,0.6,0.8,0.2,1],
        opacity :[ 0.2, 0.5, 0.3,1 ]
    }}
    transition={{ duration :2.5 }}
    className='absolute inset-0 flex justify-center items-center pointer-events-none'>

        {/* Ripple effect circles */}

        {/* Inner Circle */}
        <div className="absolute border border-[#333333] rounded-full h-[110px] w-[110px] sm:h-[150px] sm:w-[150px] animate-ping"/>

        {/* Middle circle */}
        <div className="absolute border border-[#333333] rounded-full h-[190px] w-[190px] sm:h-[250px] sm:w-[250px] animate-pulse"/>

        {/* Outer Circle */}
        <div className="absolute border border-[#333333] rounded-full h-[280px] w-[280px] sm:h-[450px] sm:w-[450px]"/>

        {/* Diff color circle */}
        <div className="absolute border border-[#FFA500] opacity-30 rounded-full h-[340px] w-[340px] sm:h-[600px] sm:w-[600px] animate-pulse"/>
    </motion.div>
  )
}

export default BackgroundCircles

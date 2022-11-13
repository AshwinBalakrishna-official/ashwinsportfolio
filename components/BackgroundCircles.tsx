import React from 'react';
import {motion} from 'framer-motion';

type Props = {}

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div 
    
    initial={
        {
            opacity :0
        }
    }


    animate={{
        scale : [1,0.3,0.6,0.8,0.2,1],
        opacity :[ 0.2, 0.5, 0.3,1 ]
    }}

    transition={{
        duration :2.5,
    }}
    className='relative flex justify-center items-center mt-56 md:mt-24 xl:mt-34'>
    
    
    
        {/* Ripple effect circles */}

        {/* Inner Circle */}
        <div className=" absolute border border-[#333333] rounded-full h-[150px] w-[150px] mt-52 animate-ping"/>
        
        {/* Middle circle */}
        <div className=" absolute border border-[#333333] rounded-full h-[250px] w-[250px] mt-52 animate-pulse"/>
        
        {/* Outer Circle */}
        <div className=" absolute border border-[#333333] rounded-full h-[450px] w-[450px] mt-52"/>


        {/* Diff color circle */}
        <div className=" absolute border border-[#F7AB0A] opacity-30 rounded-full h-[600px] w-[600px] mt-52 animate-pulse"/>



    </motion.div>
  )
}

export default BackgroundCircles
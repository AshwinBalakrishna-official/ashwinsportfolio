import React from 'react';
import { SocialIcon } from 'react-social-icons';
import {motion} from 'framer-motion';

import { DocumentTextIcon } from '@heroicons/react/24/outline'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>

        {/* Social Icons */}
        <motion.div

        // Slide in from left
        initial={{
          x:500,
          opacity : 0,
          scale : 0.5
        }}


        animate={{
          x : 0,
          opacity :1,
          scale : 1,
          
        }}

        transition ={{
          duration :1.5
        }}


        className='flex flex-row items-center '
        
        >
            {/* Social Icon Urls */}
            <span className='px-2 m-0 xs:px-1'><SocialIcon  url="https://www.linkedin.com/in/ashwin-balakrishna/" fgColor='gray' bgColor='transparent' /></span>
            <span className='px-2 m-0 xs:px-1'><SocialIcon  url="https://github.com/AshwinBalakrishna-official" fgColor='gray' bgColor='transparent'/></span>
            <span className='px-2 m-0 xs:px-1'><SocialIcon  url="https://twitter.com/ashwinbkrish" fgColor='gray' bgColor='transparent'/> </span>
            <span className='px-2 m-0 xs:px-1'><SocialIcon  url="https://www.instagram.com/crypto_._ash/" fgColor='gray' bgColor='transparent'/> </span>
            
           
        </motion.div>



        {/* Email to get in touch */}
        <motion.div 

        // Slide in from right
          initial={{
            x :-700,
            opacity : 0.5,
            scale : 0.1
          }}

           animate={{
            x:0,
            opacity:1,
            scale :1
            
           }}

           transition={{
            duration :1
           }}
          

         
          
          className='flex flex-row cursor-pointer items-center mr-24' 
          >

          {/* Mail */}
          <div  
            //  Open the mail Id to send
             onClick={()=>{window.location.href=`mailto:ashwinbkrish@gmail.com`}}
          >
            <SocialIcon className='cursor-pointer' fgColor='gray' bgColor='transparent' network='email' />
            <p className='uppercase hidden md:inline-flex text-sm text-gray-600'>Get in touch</p>
          </div>
          
          {/* Resume */}
          <div  
            //  Open the mail Id to send

             onClick={()=>{window.location.href=`Assets/Ashwin-resume.pdf`}}
            className='flex flex-row ml-4 xs:ml-3'
          >
            {/* <SocialIcon className='cursor-pointer' fgColor='gray' bgColor='transparent' network='soundcloud' /> */}
            <DocumentTextIcon className='h-6 w-6 text-gray-500 text-semibold'/>
            <p className='ml-2 font-semibold uppercase hidden md:inline-flex text-sm text-gray-600'>Resume</p>
          </div>  
        </motion.div>
    </header>
  )
}

export default Header
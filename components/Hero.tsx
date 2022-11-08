import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {Cursor, useTypewriter} from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Image1 from '../public/Assets/images/ash2.JPG';


type Props = {}



// Type writer package content
const Hero = (props: Props) => {

      const [text, count] = useTypewriter({
        words : [`Hey!!!! It's Ash and I ❤️`,"Coding", "Exploring", "& Traveling"],
        loop :true,
        delaySpeed : 1500
      })



  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        
        {/* ANIMATION BACKGROUND */}
        <BackgroundCircles />

        {/* HERO IMAGE */}
        <Image className=' relative rounded-full h-32 w-32 mx-auto object-cover' src={Image1}  alt={"No Image found"}/> 
        
        
        <div className='z-20'>
          {/* Title */}
          <h2 className='text-sm uppercase text-gray-600 pb-2 tracking-[15px] '>
            Software engineer
          </h2>
          
          {/* Hobbies */}
          <h1 className='text-4xl lg:text-5xl font-semibold px-2'>
            <span>{text}</span>
            <Cursor   cursorColor='#F7AB0A' />
          </h1>



          {/* Menu TO TRAVEL IN PAGE */}
          <div className='pt-5' >

            {/* About Section */}
            <Link href="#about">
             <button className='heroButton'>About</button>
            </Link>
            
            {/* SKills Section */}
            <Link href="#skills">
              <button className='heroButton'>Skills</button>
            </Link>
            
            {/* Experience section */}
            <Link href="#experience">
              <button className='heroButton'>Experience</button>
            </Link>
            
            {/* Projects section */}
            <Link href="#projects">
              <button className='heroButton'>Projects</button>
            </Link>
            
          </div>
            
        </div>
    


    </div>
  )
}

export default Hero
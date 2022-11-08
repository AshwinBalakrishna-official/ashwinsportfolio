import React from 'react';
import Image from 'next/image';
import {Cursor, useTypewriter} from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Image1 from '../public/Assets/images/ash2.JPG';


type Props = {}

const Hero = (props: Props) => {

      const [text, count] = useTypewriter({
        words : [`Hey!!!! It's Ash and I ❤️`,"Coding", "Exploring", "& Traveling"],
        loop :true,
        delaySpeed : 1500
      })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />


        <Image className=' relative rounded-full h-32 w-32 mx-auto object-cover' src={Image1}  alt={"No Image found"}/> 
        
        
        <div >
          <h2 className='text-sm uppercase text-gray-600 pb-2 tracking-[15px] '>
            Software engineer
          </h2>
          
          
          <h1 className='text-4xl lg:text-5xl font-semibold px-2'>
            <span>{text}</span>
            <Cursor   cursorColor='#F7AB0A' />
          </h1>
            
        </div>
    


    </div>
  )
}

export default Hero
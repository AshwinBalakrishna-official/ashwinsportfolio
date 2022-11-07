import React from 'react';
import Image from 'next/image';
import {Cursor, useTypewriter} from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';


type Props = {}

const Hero = (props: Props) => {

    const [text, count] = useTypewriter({
        words : ["Developer","Creator","Traveler"],
        loop :true,
        delaySpeed : 2500
      })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center'>
        <BackgroundCircles />

        {/* <Image src={} alt={"No Image found"} />  */}
        <h1>
            <span>{text}</span>
            <Cursor cursorColor='#F7AB0A' />
        </h1>
    


    </div>
  )
}

export default Hero
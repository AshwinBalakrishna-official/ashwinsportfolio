import React from 'react';
import {Cursor, useTypewriter} from 'react-simple-typewriter';

type Props = {}

const Hero = (props: Props) => {

    const [text, count] = useTypewriter({
        words : ["Developer","Creator","Traveler"],
        loop :true,
        delaySpeed : 2500
      })
  return (
    <>

        <h1 className="">{text}<Cursor cursorColor='red' /></h1>
        


    </>
  )
}

export default Hero
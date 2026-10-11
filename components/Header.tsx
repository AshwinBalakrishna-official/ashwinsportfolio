import React from 'react';
import { SocialIcon } from 'react-social-icons';
import {motion} from 'framer-motion';

type Props = {}

const iconStyle = { height: 40, width: 40 }

const Header = (props: Props) => {
  return (
    <header className='sticky top-0 px-3 py-3 sm:p-5 flex items-center justify-between max-w-7xl mx-auto z-20'>

        {/* Social Icons */}
        <motion.div
        initial={{ x: -100, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className='flex flex-row items-center'
        >
            <SocialIcon style={iconStyle} url="https://www.linkedin.com/in/ashwin-balakrishna/" target='_blank' fgColor='gray' bgColor='transparent' />
            <SocialIcon style={iconStyle} url="https://github.com/AshwinBalakrishna-official" target='_blank' fgColor='gray' bgColor='transparent'/>
            <SocialIcon style={iconStyle} url="https://twitter.com/ashwinbkrish" target='_blank' fgColor='gray' bgColor='transparent'/>
            <SocialIcon style={iconStyle} url="https://www.instagram.com/crypto_._ash/" target='_blank' fgColor='gray' bgColor='transparent'/>
        </motion.div>

        {/* Email to get in touch */}
        <motion.div
          initial={{ x: 100, opacity: 0.5, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className='flex flex-row cursor-pointer items-center'
          onClick={()=>{window.location.href='mailto:ashwinbkrish@gmail.com'}}
          >
          <SocialIcon style={iconStyle} className='cursor-pointer' fgColor='gray' bgColor='transparent' network='email' />
          <p className='uppercase hidden md:inline-flex text-sm text-gray-600'>Get in touch</p>
        </motion.div>
    </header>
  )
}

export default Header

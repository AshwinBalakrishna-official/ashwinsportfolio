import React from 'react'
import SectionHeader from './SectionHeader'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid'

type Props = {}

const ContactMe = (props: Props) => {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
  
        <SectionHeader sectionName="Contact" />
        <div className='flex flex-col space-y-10 mt-3'>
            <h4 className='text-3xl font-semibold'>
                <span>I guess I have what you need!</span>
                <span className='text-xl font-semibold underline decoration-[#F7AB0A]'> Lets Talk</span>
            </h4>

            {/* Mobile Number */}
            <div className='mt-3 flex items-center space-x-5 justify-center'>
                <PhoneIcon className='text-[#F7AB0A]/80 w-7 h-7 animate-pulse'/>
                <p className='text-2xl'>+91 9791091511</p>
            </div>

            {/* Email */}
            <div className='mt-3 flex items-center space-x-5 justify-center'>
                <EnvelopeIcon className='text-[#F7AB0A]/90 w-7 h-7 animate-pulse'/>
                <p className='text-2xl'>ashwinbkrish@gmail.com</p>
            </div>

            <div className='flex flex-row text-center justify-between'>
            
                <div >
                   <button className='w-[200px] text-black font-semibold  rounded-lg px-5 py-3 bg-[#F7AB0A] opacity-50 hover:opacity-100  '>Make a Call</button>
                </div> 
                
                <div>
                   <button className='w-[200px] rounded-lg font-semibold opacity-50 px-5 py-3 bg-black hover:opacity-100  '>Send an email</button>
                </div> 
                {/* <button className="w-[50%] ">Send a Mail</button> */}

            </div>          
        </div>


    
      
    </div>
  )
}

export default ContactMe
import React from 'react'
import SectionHeader from './SectionHeader'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid'

type Props = {}

const ContactMe = (props: Props) => {
  return (
    <div className="flex flex-col relative min-h-[100dvh] text-center max-w-7xl px-6 sm:px-10 pt-32 pb-12 justify-center mx-auto items-center">
        <SectionHeader sectionName="Contact" />
        <div className='flex flex-col space-y-6 sm:space-y-10 w-full max-w-xl'>
            <h4 className='text-2xl sm:text-3xl font-semibold'>
                <span>Guess I have what you need? </span>
                <span className='text-lg sm:text-xl font-semibold underline decoration-[#FFA500]'> Lets Talk</span>
            </h4>

            {/* Mobile Number */}
            <div className='flex items-center gap-4 justify-center'>
                <PhoneIcon className='text-[#FFA500] w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0 animate-pulse'/>
                <p className='text-lg sm:text-2xl'>+91 9791091511</p>
            </div>

            {/* Email */}
            <div className='flex items-center gap-4 justify-center'>
                <EnvelopeIcon className='text-[#FFA500] w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0 animate-pulse'/>
                <p className='text-base sm:text-2xl break-all'>ashwinbkrish@gmail.com</p>
            </div>

            <div className='flex flex-col sm:flex-row gap-3 sm:justify-between'>
                <button className='w-full sm:w-[200px] font-semibold rounded-lg px-5 py-3 bg-[#FFA500]/70 hover:bg-[#FFA500]' onClick={()=>{window.location.href='tel:9791091511'}}>Make a Call</button>
                <button className='w-full sm:w-[200px] rounded-lg font-semibold sm:opacity-50 px-5 py-3 bg-black hover:opacity-100' onClick={()=>{window.location.href='mailto:ashwinbkrish@gmail.com'}}>Send an email</button>
            </div>
        </div>
    </div>
  )
}

export default ContactMe

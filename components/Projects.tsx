import Image from 'next/image'
import React from 'react'
import SectionHeader from './SectionHeader'

type Props = {}

const Projects = (props: Props) => {
  const projects=["2HUB","ABFRL","KALANJU","E-COURT SEVA","TinDog" ]
  return (
    
    <div className='flex flex-col relative h-screen text-center md:flex-row max-w-full px-10 justify-evenly items-center w-full z-0'>
        {/* <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
           Projects
        </h3> */}
        <SectionHeader sectionName='projects' />

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
        
          {/* Projects */}
          {projects.map((project,idx)=>(
            <div key={idx+1} className='w-screen flex-shrink-0 snap-center items-center flex flex-col space-y-5 justify-center p-20 md:p-40' >
              <Image width={400} height={250} src="/Assets/logo/2hublogo.png" alt="no_img" className='m-auto' />
              <div>
                <h3>
                  {project}
                </h3> 
                <h4>
                  <span className='underline decoration-[#F7AB0A]'>
                  Case Study: {idx+1} of {projects.length}
                  </span>
                </h4>
                  

              </div>
            </div>
          ))}
        </div>

        <div className='absolute mt-12 bg-[#F7AB0A]/10 left-0 h-[400px] w-full -skew-y-12'>
          
        </div>
    </div>
  )
}

export default Projects
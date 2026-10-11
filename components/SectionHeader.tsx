import React from 'react'

type Props = {
    sectionName : string
}

const SectionHeader:React.FC<Props> = (props) => {
  return (
    <h3 className='absolute top-20 sm:top-24 xl:top-12 left-0 right-0 text-center uppercase tracking-[8px] sm:tracking-[20px] text-gray-500 text-lg sm:text-2xl'>
        {props.sectionName}
    </h3>
  )
}

export default SectionHeader

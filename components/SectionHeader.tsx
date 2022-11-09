import React from 'react'

type Props = {
    sectionName : string
}

const SectionHeader:React.FC<Props> = (props) => {
  return (
    <>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            {props.sectionName}
        </h3>
    </>
  )
}

export default SectionHeader
import React from 'react'
import Timeline from './Timeline'

const Education = () => {
    return (
        <div id='education' className='flex-grow bg-darkSecondary w-full md:w-3/4 max-w-[95%] mx-auto mt-3 sm:mt-6 p-4 sm:p-6 rounded-lg flex flex-col justify-center items-center gap-4 sm:gap-8'>
            <div className='flex gap-3'>
                <img src='src/assets/education.svg' height={50} width={35}/>
                <span className='text-4xl font-bold'>Education</span>
            </div>
            <div className='self-center'>
                <Timeline />
            </div>
        </div>
    )
}

export default Education

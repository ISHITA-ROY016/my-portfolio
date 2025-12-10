import React from 'react'
import Timeline from './Timeline'

const Education = () => {
    return (
        <div id='education' className='rounded-lg border border-[#bcbcbc] dark:border-none dark:animated-border w-full md:w-3/4 max-w-[95%] mx-auto mt-4 sm:mt-7'>
            <div className='flex-grow rounded-lg bg-white/80 dark:bg-none dark:bg-darkSecondary bg-darkSecondary p-4 sm:p-6 flex flex-col justify-center items-center gap-4 sm:gap-8'>
                <div className='flex gap-3'>
                    <img src='/assets/education.svg' height={50} width={35} />
                    <span className='text-3xl md:text-4xl font-bold text-text dark:text-white'>Education</span>
                </div>
                <div className='self-center my-2'>
                    <Timeline />
                </div>
            </div>
        </div>
    )
}

export default Education

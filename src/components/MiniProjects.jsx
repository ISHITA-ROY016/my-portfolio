import React from 'react'
import SkillsTechMarquee from './SkillsTechMarquee'

const MiniProjects = () => {
    return (
        <div id='miniprojects' className='flex-grow bg-darkSecondary w-full md:w-3/4 max-w-[95%] mx-auto mt-3 sm:mt-6 p-4 sm:p-6 rounded-lg flex flex-col md:flex-col justify-center items-center gap-6 sm:gap-8'>
            {/* 🧱 Title */}
            <div className="flex items-center gap-3 mb-4">
                <img src="/assets/projects.svg" height={50} width={55} alt="projects-icon" />
                <span className="text-4xl font-bold text-white">Mini Projects</span>
            </div>
        </div>
    )
}

export default MiniProjects

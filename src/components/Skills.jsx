import React from 'react'
import Timeline from './Timeline'
import SkillsTechMarquee from './SkillsTechMarquee'

const Skills = () => {
    return (
        <div id='education' className='flex-grow bg-darkSecondary w-full md:w-3/4 max-w-[95%] mx-auto mt-3 sm:mt-6 p-4 sm:p-6 rounded-lg flex flex-col justify-center items-center gap-4 sm:gap-8'>
            <div className='flex gap-3'>
                <img src='src/assets/Skills.svg' height={50} width={55} />
                <span className='text-4xl font-bold'>My Skills</span>
            </div>
            <div className='flex justify-center gap-3 w-full'>
                <div className='w-2/4 h-[40px] '>
                    <SkillsTechMarquee />
                </div>
                <div className="items-center w-[2px] h-full bg-textColor"></div>
                <div>
                    <ul className="pl-5">
                        <li className="text-iconColor text-2xl before:content-['•'] before:text-iconColor before:text-6xl before:mr-2 before:mb-2 before:inline-block before:align-middle">
                            Front-End: <span className='text-textColor text-lg font-semibold'>HTML, CSS, JS, TS, React, Redux</span>
                        </li>
                        <li className="text-iconColor text-2xl before:content-['•'] before:text-iconColor before:text-6xl before:mr-2 before:mb-2 before:inline-block before:align-middle">
                            Styling and UI: <span className='text-textColor text-lg font-semibold'>Tailwind CSS, Material UI, Shadcn UI, Framer Motion</span>
                        </li>
                        <li className="text-iconColor text-2xl before:content-['•'] before:text-iconColor before:text-6xl before:mr-2 before:mb-2 before:inline-block before:align-middle">
                            Testing: <span className='text-textColor text-lg font-semibold'>Jest, React Testing Library, Cypress</span>
                        </li>
                        <li className="text-iconColor text-2xl before:content-['•'] before:text-iconColor before:text-6xl before:mr-2 before:mb-2 before:inline-block before:align-middle">
                            Databases: <span className='text-textColor text-lg font-semibold'>Oracle, PostgreSQL, MongoDB</span>
                        </li>
                        <li className="text-iconColor text-2xl before:content-['•'] before:text-iconColor before:text-6xl before:mr-2 before:mb-2 before:inline-block before:align-middle">
                            Tools and Platform: <span className='text-textColor text-lg font-semibold'>Azure, Power BI, Git</span>
                        </li>
                        <li className="text-iconColor text-2xl before:content-['•'] before:text-iconColor before:text-6xl before:mr-2 before:mb-2 before:inline-block before:align-middle">
                            Others: <span className='text-textColor text-lg font-semibold'>Java, Firebase, RESTful APIs, GraphQL, Postman  </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills

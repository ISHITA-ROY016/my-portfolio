import React from 'react'
import SkillsTechMarquee from './SkillsTechMarquee'

const Skills = () => {
    return (
        <div id='skills' className='rounded-lg border border-[#bcbcbc] dark:border-none dark:animated-border w-full md:w-3/4 max-w-[95%] mx-auto mt-4 sm:mt-7'>
            <div
                className='flex-grow bg-white/80 dark:bg-none dark:bg-darkSecondary bg-darkSecondary p-4 py-8 sm:p-6 rounded-lg flex flex-col justify-center items-center gap-4 sm:gap-8 min-h-[400px]'
            >
                {/* Title */}
                <div className='flex gap-3 items-center'>
                    <img src='/assets/Skills.svg' height={50} width={55} alt="skills-icon" />
                    <span className='text-3xl md:text-4xl font-bold text-text dark:text-white'>My Skills</span>
                </div>

                {/* Responsive Layout */}
                <div className='mb-4 flex flex-col md:flex-row justify-center items-stretch  md:items-stretch  gap-6 md:gap-8 w-full'>

                    {/* Left Side — Tech Marquee */}
                    <div className='w-full md:w-[40%] flex items-start justify-center md:items-center !self-start md:!self-center flex-none'>
                        <SkillsTechMarquee />
                    </div>

                    {/* Divider — visible only on medium+ screens */}
                    <div className='hidden md:block w-[2px] self-stretch bg-text dark:bg-darkText opacity-60 items-center'></div>

                    {/* Right Side — Skills List */}
                    <div className='w-full md:w-[60%]'>
                        <ul className='pl-2 md:pl-5 space-y-3'>

                            {/*  Frontend */}
                            <li className="flex items-start">
                                <span className="text-iconColor text-2xl mr-2">•</span>
                                <div>
                                    <span className="text-iconColor text-xl md:text-2xl font-semibold ">Frontend:</span>{" "}
                                    <span className="text-text dark:text-darkText text-sm md:text-base font-semibold ml-2">
                                        HTML, CSS, JavaScript (ES6+), TypeScript, ReactJS, Redux, Context API,
                                        Tailwind CSS, Material UI, Shadcn UI, Framer Motion
                                    </span>
                                </div>
                            </li>

                            {/*  Backend */}
                            <li className="flex items-start">
                                <span className="text-iconColor text-2xl mr-2">•</span>
                                <div>
                                    <span className="text-iconColor text-xl md:text-2xl font-semibold">Backend:</span>{" "}
                                    <span className="text-text dark:text-darkText text-sm md:text-base font-semibold ml-2">
                                        Java, Spring (Core, Boot, ORM, DAO, AOP, AI), Hibernate, RESTful APIs,
                                        Microservices
                                    </span>
                                </div>
                            </li>

                            {/*  Databases */}
                            <li className="flex items-start">
                                <span className="text-iconColor text-2xl mr-2">•</span>
                                <div>
                                    <span className="text-iconColor text-xl md:text-2xl font-semibold">Databases:</span>{" "}
                                    <span className="text-text dark:text-darkText text-sm md:text-base font-semibold ml-2">
                                        SQL (Oracle, MySQL, PostgreSQL), MongoDB
                                    </span>
                                </div>
                            </li>

                            {/*  Testing */}
                            <li className="flex items-start">
                                <span className="text-iconColor text-2xl mr-2">•</span>
                                <div>
                                    <span className="text-iconColor text-xl md:text-2xl font-semibold">Testing:</span>{" "}
                                    <span className="text-text dark:text-darkText text-sm md:text-base font-semibold ml-2">
                                        Jest, React Testing Library, Cypress
                                    </span>
                                </div>
                            </li>

                            {/*  Tools & Platforms */}
                            <li className="flex items-start">
                                <span className="text-iconColor text-2xl mr-2">•</span>
                                <div>
                                    <span className="text-iconColor text-xl md:text-2xl font-semibold">Tools & Platforms:</span>{" "}
                                    <span className="text-text dark:text-darkText text-sm md:text-base font-semibold ml-2">
                                        Git, GitHub, Jenkins (CI/CD), Firebase, IntelliJ IDEA, VS Code, Postman,
                                        Bash Script (Linux), Power Platform, Azure, Swagger UI
                                    </span>
                                </div>
                            </li>

                            {/*  Core Concepts */}
                            <li className="flex items-start">
                                <span className="text-iconColor text-2xl mr-2">•</span>
                                <div>
                                    <span className="text-iconColor text-xl md:text-2xl font-semibold">Core Concepts:</span>{" "}
                                    <span className="text-text dark:text-darkText text-sm md:text-base font-semibold ml-2">
                                        OOPs, MVC Architecture, Responsive Design, State Management, UI/UX Design,
                                        Product Strategy
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills

import React from 'react'
import SkillsTechMarquee from './SkillsTechMarquee'

const Skills = () => {
    return (
        <div
            id='skills'
            className='flex-grow bg-darkSecondary w-full md:w-3/4 max-w-[95%] mx-auto mt-3 sm:mt-6 p-4 sm:p-6 rounded-lg flex flex-col justify-center items-center gap-4 sm:gap-8'
        >
            {/* Title */}
            <div className='flex gap-3 items-center'>
                <img src='/assets/Skills.svg' height={50} width={55} alt="skills-icon" />
                <span className='text-4xl font-bold'>My Skills</span>
            </div>

            {/* Responsive Layout */}
            <div className='flex flex-col md:flex-row justify-center items-center md:items-start gap-6 md:gap-8 w-full'>

                {/* Left Side — Tech Marquee */}
                <div className='w-full md:w-1/2 h-full flex items-center justify-center'>
                    <SkillsTechMarquee />
                </div>

                {/* Divider — visible only on medium+ screens */}
                <div className='hidden md:block w-[2px] h-full bg-textColor opacity-60 items-center'></div>

                {/* Right Side — Skills List */}
                <div className='w-full md:w-1/2'>
                    <ul className='pl-2 md:pl-5 space-y-3'>

                        {/* 🖥️ Frontend */}
                        <li className="flex items-start">
                            <span className="text-iconColor text-2xl mr-2">•</span>
                            <div>
                                <span className="text-iconColor text-2xl font-semibold">Frontend:</span>{" "}
                                <span className="text-textColor text-lg font-semibold"> 
                                    HTML, CSS, JavaScript (ES6+), TypeScript, ReactJS, Redux, Context API,
                                    Tailwind CSS, Material UI, Shadcn UI, Framer Motion
                                </span>
                            </div>
                        </li>

                        {/* ⚙️ Backend */}
                        <li className="flex items-start">
                            <span className="text-iconColor text-2xl mr-2">•</span>
                            <div>
                                <span className="text-iconColor text-2xl font-semibold">Backend:</span>{" "}
                                <span className="text-textColor text-lg font-semibold">
                                    Java, Spring (Core, Boot, ORM, DAO, AOP, AI), Hibernate, RESTful APIs,
                                    Microservices
                                </span>
                            </div>
                        </li>

                        {/* 🗃️ Databases */}
                        <li className="flex items-start">
                            <span className="text-iconColor text-2xl mr-2">•</span>
                            <div>
                                <span className="text-iconColor text-2xl font-semibold">Databases:</span>{" "}
                                <span className="text-textColor text-lg font-semibold">
                                    SQL (Oracle, MySQL, PostgreSQL), MongoDB
                                </span>
                            </div>
                        </li>

                        {/* 🧪 Testing */}
                        <li className="flex items-start">
                            <span className="text-iconColor text-2xl mr-2">•</span>
                            <div>
                                <span className="text-iconColor text-2xl font-semibold">Testing:</span>{" "}
                                <span className="text-textColor text-lg font-semibold">
                                    Jest, React Testing Library, Cypress
                                </span>
                            </div>
                        </li>

                        {/* 🔧 Tools & Platforms */}
                        <li className="flex items-start">
                            <span className="text-iconColor text-2xl mr-2">•</span>
                            <div>
                                <span className="text-iconColor text-2xl font-semibold">Tools & Platforms:</span>{" "}
                                <span className="text-textColor text-lg font-semibold">
                                    Git, GitHub, Jenkins (CI/CD), Firebase, IntelliJ IDEA, VS Code, Postman,
                                    Bash Script (Linux), Power Platform, Azure, Swagger UI
                                </span>
                            </div>
                        </li>

                        {/* 💡 Core Concepts */}
                        <li className="flex items-start">
                            <span className="text-iconColor text-2xl mr-2">•</span>
                            <div>
                                <span className="text-iconColor text-2xl font-semibold">Core Concepts:</span>{" "}
                                <span className="text-textColor text-lg font-semibold">
                                    OOPs, MVC Architecture, Responsive Design, State Management, UI/UX Design,
                                    Product Strategy
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills

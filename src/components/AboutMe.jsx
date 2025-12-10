import Typewriter from 'typewriter-effect';
import "./header.css";
import HighlightDiv from '../style/HighlightDiv';
import TechMarquee from '../style/TechMarquee';
import Download from '/assets/download.svg';

const AboutMe = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/pdf/cv.pdf';
        link.download = 'Ishita_Roy_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div id='aboutme' className="rounded-lg border border-[#bcbcbc] dark:border-none dark:animated-border w-full md:w-3/4 max-w-[95%] mx-auto mt-3 sm:mt-6">
            <div className='flex-grow rounded-lg bg-white/80 dark:bg-none dark:bg-darkSecondary p-4 sm:p-6 flex flex-col md:flex-row justify-start items-center gap-4 sm:gap-8'>

                <div className='relative md:w-1/2 min-w-[150px] flex justify-center items-start'>
                    <img src="/assets/ishita1.png" alt='profile-pic' className="w-3/4 h-auto object-cover rounded-lg" />
                    <div className="absolute bottom-[-25px] flex justify-center">
                        <div className="relative w-[70px] h-[70px]">
                            <img
                                src="/assets/hexagon.png"
                                alt="hexagon bg"
                                className="absolute inset-0 w-full h-full object-contain"
                            />
                            <img
                                src="/assets/codeBadge.png"
                                alt="code icon"
                                className="absolute inset-0 m-auto w-[45px] h-[45px]"
                            />

                        </div>
                    </div>
                </div>

                {/* Text Content */}
                <div className='w-[90%] md:w-1/2 flex flex-col gap-3 md:gap-5 flex-grow'>

                    {/* Typewriter Name */}
                    <div className='inline-flex flex-wrap text-text dark:text-white'>
                        <HighlightDiv>&lt;span&gt;</HighlightDiv>
                        <span className='inline-block'>
                            <Typewriter
                                options={{
                                    strings: ['Hey, I’m Ishita Roy'],
                                    autoStart: true,
                                    loop: false,
                                    delay: 100,
                                    deleteSpeed: Infinity,
                                    cursor: "|"
                                }} />
                        </span>
                        <HighlightDiv>&lt;/span&gt;</HighlightDiv>
                    </div>

                    {/* Role */}
                    <div className='max-w-full break-words'>
                        <span className='text-3xl sm:text-5xl md:text-6xl block font-bold text-text dark:text-bioDark'>
                            Junior <span className='animated-gradient-text'>{"{"}FullStack{"}"}</span> Web & App{" "}
                            <span className='whitespace-nowrap'>
                                Developer
                                <span className='inline-block'>
                                    <Typewriter
                                        options={{
                                            strings: [''],
                                            autoStart: true,
                                            loop: false,
                                            delay: 100,
                                            deleteSpeed: Infinity,
                                            cursor: "_"
                                        }} />
                                </span>
                            </span>
                        </span>
                    </div>

                    {/* Description */}
                    <div className='mt-2 text-text dark:text-white'>
                        <span>
                            <HighlightDiv>&lt;p&gt;</HighlightDiv>
                            With expertise in cutting-edge technologies such as <HighlightDiv>React, Spring Boot, and Jenkins</HighlightDiv>...  I deliver production-ready web solutions that are both innovative and robust.
                            <HighlightDiv>&lt;/p&gt;</HighlightDiv>
                        </span>
                    </div>

                    <div className='w-full flex gap-7 items-end mt-3'>
                        <div className='overflow-hidden w-3/4 md:w-1/2'>
                            <TechMarquee />
                        </div>
                        <span className='whitespace-nowrap text-text dark:text-white'>. . . and more</span>
                    </div>
                    <div>
                        <button className='flex items-center p-3 border border-solid border-black rounded-lg backdrop-blur-lg bg-white/0 mt-2' onClick={handleDownload}>
                            <img src={Download} alt='download' />
                            <span className='text-text dark:text-[#B3B3B3]'>[ Download my cv ]</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;

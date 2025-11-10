import Typewriter from 'typewriter-effect';
import "./header.css";
import HighlightDiv from '../style/HighlightDiv';
import TechMarquee from '../style/TechMarquee';
import Download from '/assets/download.svg';

const AboutMe = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/cv.pdf';
        link.download = 'Ishita_Roy_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div id='aboutme' className='flex-grow bg-darkSecondary w-full md:w-3/4 max-w-[95%] mx-auto mt-3 sm:mt-6 p-4 sm:p-6 rounded-lg flex flex-col md:flex-row justify-start items-center gap-4 sm:gap-8'>

            {/* Profile Image Section */}
            <div className='md:w-1/2 min-w-[150px] flex justify-center items-start'>
                <img src="/assets/profile_photo2.png" alt='profile-pic' className="w-4/5 h-auto object-cover rounded-lg" />
            </div>

            {/* Text Content */}
            <div className='w-[90%] md:w-1/2 flex flex-col gap-3 md:gap-5 flex-grow'>

                {/* Typewriter Name */}
                <div className='inline-flex flex-wrap'>
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
                    <span className='text-3xl sm:text-5xl md:text-6xl block font-bold text-bioDark'>
                        Junior <span className='animated-gradient-text'>{"{"}FullStack{"}"}</span> Web & App Developer
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
                </div>

                {/* Description */}
                <div className='mt-2'>
                    <span>
                        <HighlightDiv>&lt;p&gt;</HighlightDiv>
                        With expertise in cutting-edge technologies such as <HighlightDiv>React, Firebase, and Java</HighlightDiv>... I deliver web solutions that are both innovative and robust.
                        <HighlightDiv>&lt;/p&gt;</HighlightDiv>
                    </span>
                </div>

                <div className='w-full flex gap-7 items-end'>
                    <div className='overflow-hidden w-3/4 md:w-1/2'>
                        <TechMarquee />
                    </div>
                    <span className='whitespace-nowrap'>. . . and more</span>
                </div>
                <div>
                    <button className='flex items-center p-3 border border-solid border-black rounded-lg backdrop-blur-lg bg-white/0' onClick={handleDownload}>
                        <img src={Download} alt='download'/>
                        <span className='text-[#B3B3B3]'>[ Download my cv ]</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;

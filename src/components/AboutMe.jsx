import React from 'react'
// import "./header.css"
import HexagonProfile from './HexagonProfile'

const AboutMe = () => {
    return (
        <div className='flex-grow bg-darkHeaderBg w-full md:max-w-[70%] max-w-[95%] mx-auto mt-3 sm:mt-6 p-4 sm:p-6 rounded-lg flex flex-wrap justify-between items-center gap-4 sm:gap-8'>
            <div className='hexagon'>
            <img src="src\assets\profile_photo.jpg" alt='profile-pic' className="w-full h-full object-cover rounded-lg"/>
        </div>
            <div>About me</div>
        </div>
    )
}

export default AboutMe

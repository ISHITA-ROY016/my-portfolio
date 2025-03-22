import "./timeline.css"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Timeline = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="overflow-hidden">
            <div className="container_education">
                <div className="text it1 text-base md:text-lg md:font-semibold" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500">2017-2018</div>
                <div className='ig it3' data-aos="flip-up" data-aos-easing="linear" data-aos-duration="500"></div>
                <div className="text1 it5" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="500">
                    <div data-aos="fade-left" data-aos-delay="0" className="text-base md:text-2xl font-semibold md:font-bold text-darkHeading">Class X</div>
                    <div data-aos="fade-left" data-aos-delay="250" className="text-lg md:text-xl font-bold">R. K. S. M. Sister Nivedita Girls’ School</div>
                    <div data-aos="fade-left" data-aos-delay="500" className="text-base text-darkComponent font-semibold">92%</div>
                </div>

                <div className="vl vrt1" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500"></div>

                <div className="text it6 text-base md:text-lg md:font-semibold" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500">2019-2020</div>
                <div className='ig it8' data-aos="flip-up" data-aos-easing="linear" data-aos-duration="500"></div>
                <div className="text1 it10" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="500">
                    <div data-aos="fade-left" data-aos-delay="0" className="text-base md:text-2xl font-semibold md:font-bold text-darkHeading">Class XII</div>
                    <div data-aos="fade-left" data-aos-delay="250" className="text-lg md:text-xl font-bold">Bidhannagar Govt. High School</div>
                    <div data-aos="fade-left" data-aos-delay="500" className="text-base text-darkComponent font-semibold">90%</div>
                </div>

                <div className="vl vrt2" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500"></div>

                <div className="text it11 text-base md:text-lg md:font-semibold" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500">2020-2024</div>
                <div className='ig it13' data-aos="flip-up" data-aos-easing="linear" data-aos-duration="500"></div>
                <div className="text1 it15" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="500">
                    <div data-aos="fade-left" data-aos-delay="0" className="text-base md:text-2xl font-semibold md:font-bold text-darkHeading">B. Tech [CSE]</div>
                    <div data-aos="fade-left" data-aos-delay="250" className="text-lg md:text-xl font-bold">Academy of TecTechnology</div>
                    <div data-aos="fade-left" data-aos-delay="500" className="text-base text-darkComponent font-semibold">9.32 CGPA</div>
                </div>

                <div className="vl vrt3" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500"></div>
            </div>
        </div>
    )
}

export default Timeline

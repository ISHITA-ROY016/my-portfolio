import { useState, useEffect, useRef } from "react";
import { FiRefreshCw } from "react-icons/fi";
import GithubIcon from "/assets/github.svg";
import "./miniProjects.css";

const MiniProjectCard = ({ project, onFlipChange }) => {
    const [flipped, setFlipped] = useState(false);
    const [wobble, setWobble] = useState(0);
    const wrapperRef = useRef(null);

    useEffect(() => {
        if (onFlipChange) onFlipChange(flipped);
    }, [flipped]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setWobble(1);
                        setTimeout(() => setWobble(0), 900);
                    } else {
                        setFlipped(false);
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (wrapperRef.current) observer.observe(wrapperRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={wrapperRef}
            className="relative h-52 sm:h-52 rounded-xl cursor-pointer select-none"
            style={{ perspective: "1200px" }}
            onClick={() => setFlipped(!flipped)}
        >
            <div
                className={`w-full h-full duration-700 transform-style-preserve-3d 
                    ${wobble ? "animate-wobble-y" : ""}`}
                style={{ transform: `rotateY(${flipped ? 180 : 0}deg)` }}
            >
                {/* FRONT */}
                <div className="absolute inset-0 bg-blue-50 dark:bg-gray-300/50 border border-gray-300 rounded-xl backface-hidden 
                    flex flex-col justify-center items-center gap-2 p-2 overflow-hidden">
                    <span className="absolute top-2 right-2 px-2 py-0.5 text-[12px] font-semibold bg-darkHeading dark:bg-[#0b253a] text-[#0b253a] dark:text-darkHeading rounded-md shadow">
                        {project.category}
                    </span>

                    <span className="text-xl md:text-2xl font-bold text-gray-800 text-center">
                        {project.title}
                    </span>

                    <FiRefreshCw className="text-gray-900/70 text-xl font-extrabold" />
                </div>

                {/* BACK */}
                <div className="absolute inset-0 bg-[#c9dcea] dark:bg-[#123b52] text-white rounded-xl p-3 
                    flex flex-col rotate-y-180 backface-hidden overflow-hidden">

                    <p className="text-sm text-text dark:text-white/90">{project.description}</p>

                    <div className="flex flex-wrap gap-1 mt-3">
                        {project.techStack.map((t, idx) => (
                            <span key={idx}
                                className="px-2 py-0.5 text-[12px] bg-darkHeading dark:bg-[#0b253a] text-[#0b253a] dark:text-darkHeading border border-white/20 rounded-md">
                                {t}
                            </span>
                        ))}
                    </div>

                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-max mt-auto text-sm font-medium text-darkComponent 
                               border border-gray-700 dark:border-white/30 hover:bg-[#5c8eb4] dark:hover:bg-white/10 rounded-lg px-2 py-1 flex items-center gap-2">
                        <img src={GithubIcon} className="w-4 h-4 filter invert brightness-100" />
                        <span>GitHub</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MiniProjectCard;


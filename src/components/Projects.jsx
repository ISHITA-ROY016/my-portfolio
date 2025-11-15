import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import GithubIcon from "/assets/github.svg";
import projects from "../data/projects.json";

const Projects = () => {
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const current = projects[index];
    const intervalRef = useRef(null);

    // 🔄 Auto-slide effect
    useEffect(() => {
        if (!paused) {
            intervalRef.current = setInterval(() => {
                setIndex((prev) => (prev + 1) % projects.length);
            }, 6000); // every 6 seconds
        }
        return () => clearInterval(intervalRef.current);
    }, [paused]);

    // ⬅️➡️ Manual navigation
    const nextProject = () => setIndex((prev) => (prev + 1) % projects.length);
    const prevProject = () =>
        setIndex((prev) => (prev - 1 + projects.length) % projects.length);

    // 🧠 Handle swipe gestures (mobile)
    const handleSwipe = (event, info) => {
        const swipeDistance = info.offset.x;
        if (swipeDistance > 100) prevProject();
        else if (swipeDistance < -100) nextProject();
    };

    return (
        <div
            id="projects"
            className="flex-grow bg-darkSecondary w-full md:w-3/4 max-w-[95%] mx-auto 
      mt-3 sm:mt-6 p-4 sm:p-6 rounded-lg flex flex-col justify-center items-center 
      gap-6 sm:gap-8"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            {/* 🧱 Title */}
            <div className="flex items-center gap-3 mb-4">
                <img src="/assets/projects.svg" height={50} width={55} alt="projects-icon" />
                <span className="text-4xl font-bold text-white">My Projects</span>
            </div>

            {/* 🪄 Project Card */}
            <div className="relative w-full md:w-[95%] bg-[#0b253a] rounded-xl border border-white/10 shadow-lg p-4 sm:p-6 flex flex-col md:flex-row gap-6 items-center transition-all duration-300">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        onDragEnd={handleSwipe}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="flex flex-col md:flex-row items-center gap-6 w-full cursor-grab active:cursor-grabbing"
                    >
                        {/* 🖼️ Image */}
                        <div className="md:w-1/2 flex justify-center">
                            <img
                                src={current.image}
                                alt={current.title}
                                className="rounded-lg border border-white/20 object-cover w-full md:w-[90%] shadow-md"
                            />
                        </div>

                        {/* 📜 Details */}
                        <div className="md:w-1/2 flex flex-col gap-3 text-white">
                            <h2 className="text-2xl font-bold text-darkHeading">{current.title}</h2>
                            <p className="text-darkText">{current.description}</p>

                            <div className="border-t border-white/20 my-2"></div>
                            <h3 className="text-darkComponent font-semibold mb-1">Tech Stack</h3>

                            <div className="flex flex-wrap gap-2 mt-2">
                                {current.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-2 py-1 text-xs bg-[#123b52] text-darkHeading border border-[#f5a623]/30 rounded-md"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* 🔗 Buttons */}
                            <div className="flex gap-4 mt-4">
                                {current.liveDemo && (
                                    <a
                                        href={current.liveDemo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-white border border-white/30 rounded-lg px-4 py-2 flex items-center gap-2 hover:bg-white/10 transition-all"
                                    >
                                        🔗 Live Demo
                                    </a>
                                )}
                                <a
                                    href={current.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-white border border-white/30 rounded-lg px-4 py-2 flex items-center gap-2 hover:bg-white/10 transition-all"
                                >
                                    <img
                                        src={GithubIcon}
                                        alt="GitHub"
                                        className="w-4 h-4 filter invert brightness-100 text-textColor"
                                    /> <span>GitHub</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* ⬅️➡️ Navigation */}
            <div className="flex gap-6 mt-6">
                <button
                    onClick={prevProject}
                    className="p-3 bg-darkHeaderBg border border-[#f5a623]/40 rounded-full hover:scale-110 hover:bg-[#f5a623]/10 transition-all"
                >
                    <FaArrowLeft className="text-[#f5a623]" />
                </button>
                <button
                    onClick={nextProject}
                    className="p-3 bg-darkHeaderBg border border-[#f5a623]/40 rounded-full hover:scale-110 hover:bg-[#f5a623]/10 transition-all"
                >
                    <FaArrowRight className="text-[#f5a623]" />
                </button>
            </div>
        </div>
    );
};

export default Projects;

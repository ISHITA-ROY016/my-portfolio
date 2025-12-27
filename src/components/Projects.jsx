import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import GithubIcon from "/assets/github.svg";
import projects from "../data/projects.json";

const Projects = () => {
    const [page, setPage] = useState(0);
    const [paused, setPaused] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [imgLoaded, setImgLoaded] = useState(false);
    const directionRef = useRef(1);
    const intervalRef = useRef(null);

    const current = projects[page];

    useEffect(() => {
        setImgLoaded(false);
    }, [page]);


    // Auto-slide
    useEffect(() => {
        if (!paused) {
            intervalRef.current = setInterval(() => {
                directionRef.current = 1;
                setPage((p) => (p + 1) % projects.length);
            }, 6000);
        }
        return () => clearInterval(intervalRef.current);
    }, [paused]);

    const nextProject = () => {
        if (isAnimating) return;
        directionRef.current = 1;
        setPage((p) => (p + 1) % projects.length);
    };

    const prevProject = () => {
        if (isAnimating) return;
        directionRef.current = -1;
        setPage((p) => (p - 1 + projects.length) % projects.length);
    };

    const variants = {
        enter: (dir) => ({
            x: dir === 1 ? 100 : -100,
            opacity: 0,
            position: "absolute",
        }),
        center: {
            x: 0,
            opacity: 1,
            position: "absolute",
        },
        exit: (dir) => ({
            x: dir === 1 ? -100 : 100,
            opacity: 0,
            position: "absolute",
        }),
    };

    const handleSwipe = (e, info) => {
        if (info.offset.x > 100) prevProject();
        else if (info.offset.x < -100) nextProject();
    };

    const trackGithubClick = (projectTitle, projectIndex) => {
        if (window.gtag) {
            window.gtag("event", "project_github_click", {
                event_category: "portfolio",
                event_label: projectTitle,
                project_index: projectIndex + 1,
            });
        }
    };

    return (
        <div id="projects" className="rounded-lg border border-[#bcbcbc] dark:border-none dark:animated-border w-full md:w-3/4 max-w-[95%] mx-auto mt-4 sm:mt-7 relative z-0">
            <div
                className="flex-grow bg-white/80 dark:bg-none dark:bg-darkSecondary bg-darkSecondary p-4 py-8 sm:p-6 rounded-lg flex flex-col justify-center items-center gap-6 sm:gap-8"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
            >
                {/* Title */}
                <div className="flex items-center gap-3 mb-4">
                    <img src="/assets/projects.svg" height={50} width={55} alt="projects-icon" />
                    <span className="text-3xl md:text-4xl font-bold text-text dark:text-white">My Projects</span>
                </div>

                {/* FIXED HEIGHT CONTAINER */}
                <div className="relative w-full md:w-[95%] h-[670px] md:h-[550px] xl:h-[400px] overflow-hidden">
                    <AnimatePresence initial={false} custom={directionRef.current}>
                        <motion.div
                            key={page}
                            custom={directionRef.current}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.35, ease: "easeInOut" }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            onDragEnd={handleSwipe}
                            onAnimationStart={() => setIsAnimating(true)}
                            onAnimationComplete={() => setIsAnimating(false)}
                            className="absolute top-0 left-0 w-full h-full bg-[#e2eefb] dark:bg-[#0b253a] rounded-xl border border-black dark:border-white/10 shadow-xl p-4 sm:p-4 pointer-events-none"
                        >
                            <div className="pointer-events-auto flex flex-col [@media(min-width:900px)]:flex-row gap-6 items-center h-full">
                                {/* IMAGE */}
                                <div className="md:w-1/2 flex justify-center">
                                    <div className="relative w-full md:w-[90%] h-[150px] sm:h-[210px] rounded-lg overflow-hidden">
                                        {!imgLoaded && (
                                            <div className="absolute inset-0 bg-gray-500/20 rounded-lg animate-pulse"></div>
                                        )}
                                        <img
                                            src={current.image}
                                            alt={current.title}
                                            onLoad={() => setImgLoaded(true)}
                                            className={`rounded-lg border border-white/20 w-full h-full object-cover bg-[#143447] shadow-md transition-opacity duration-500 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
                                        />
                                    </div>
                                </div>

                                {/* TEXT CONTENT */}
                                <div className="md:w-1/2 flex flex-col gap-3 text-darkText overflow-auto pr-2 touch-pan-y">
                                    <h2 className="text-xl md:text-2xl font-bold text-darkHeading">
                                        {page + 1}. {current.title}
                                    </h2>

                                    <p className="text-text dark:text-darkText text-sm md:text-base leading-relaxed">
                                        {current.description}
                                    </p>

                                    <div className="border-t border-black dark:border-white/20 my-2"></div>

                                    <h3 className="text-darkComponent font-semibold mb-0 md:mb-1">Tech Stack</h3>

                                    <div className="flex flex-wrap gap-2 mt-1 md:mt-2">
                                        {current.techStack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2 py-1 text-xs bg-darkHeading dark:bg-[#123b52] text-text dark:text-darkHeading border border-[#f5a623]/30 rounded-md"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* BUTTONS */}
                                    <div className="flex gap-4 mt-4">
                                        {current.liveDemo && (
                                            <a
                                                href={current.liveDemo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm text-text dark:text-white border border-gray-700 dark:border-white/30 rounded-lg px-4 py-2 flex items-center gap-2 hover:bg-[#5c8eb4] dark:hover:bg-white/10 transition-all"
                                            >
                                                🔗 Live Demo
                                            </a>
                                        )}

                                        <a
                                            href={current.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={() => trackGithubClick(current.title, page)}
                                            className="text-sm text-text dark:text-white border border-gray-700 dark:border-white/30 rounded-lg px-4 py-2 flex items-center gap-2 hover:bg-[#5c8eb4] dark:hover:bg-white/10 transition-all"
                                        >
                                            <img
                                                src={GithubIcon}
                                                alt="GitHub"
                                                className="w-4 h-4 filter invert brightness-100"
                                            />
                                            <span>GitHub</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* NAVIGATION */}
                <div className="flex gap-6 mt-3 md:mt-6 relative z-50">
                    <button
                        onClick={prevProject}
                        className="p-3 bg-[#cbe2f8] dark:bg-darkHeaderBg border border-[#f5a623]/40 rounded-full hover:scale-110 hover:bg-[#f5a623]/10 transition-all cursor-pointer"
                    >
                        <FaArrowLeft className="text-[#f5a623]" />
                    </button>
                    <button
                        onClick={nextProject}
                        className="p-3 bg-[#cbe2f8] dark:bg-darkHeaderBg border border-[#f5a623]/40 rounded-full hover:scale-110 hover:bg-[#f5a623]/10 transition-all cursor-pointer"
                    >
                        <FaArrowRight className="text-[#f5a623]" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Projects;

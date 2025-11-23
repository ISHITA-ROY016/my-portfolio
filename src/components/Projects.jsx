import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import GithubIcon from "/assets/github.svg";
import projects from "../data/projects.json";

const Projects = () => {
    const [page, setPage] = useState(0);
    const [paused, setPaused] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const directionRef = useRef(1);
    const intervalRef = useRef(null);

    const current = projects[page];

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

    return (
        <div id="projects" className="animated-border rounded-lg w-full md:w-3/4 max-w-[95%] mx-auto mt-4 sm:mt-7 relative z-0">
            <div
                className="flex-grow bg-darkSecondary p-4 sm:p-6 rounded-lg flex flex-col justify-center items-center gap-6 sm:gap-8"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
            >
                {/* Title */}
                <div className="flex items-center gap-3 mb-4">
                    <img src="/assets/projects.svg" height={50} width={55} alt="projects-icon" />
                    <span className="text-3xl md:text-4xl font-bold text-white">My Projects</span>
                </div>

                {/* FIXED HEIGHT CONTAINER */}
                <div className="relative w-full md:w-[95%] h-[810px] md:h-[500px] overflow-hidden">
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
                            className="absolute top-0 left-0 w-full h-full bg-[#0b253a] rounded-xl border border-white/10 shadow-xl p-4 sm:p-4 pointer-events-none"
                        >
                            <div className="pointer-events-auto flex flex-col md:flex-row gap-6 items-center h-full">
                                {/* IMAGE */}
                                <div className="md:w-1/2 flex justify-center">
                                    <img
                                        src={current.image}
                                        alt={current.title}
                                        className="rounded-lg border border-white/20 w-full md:w-[90%] h-[200px] object-content object-center bg-[#143447] shadow-md"
                                    />
                                </div>

                                {/* TEXT CONTENT */}
                                <div className="md:w-1/2 flex flex-col gap-3 text-darkText overflow-auto pr-2 touch-pan-y">
                                    <h2 className="text-2xl font-bold text-darkHeading">
                                        {page + 1}. {current.title}
                                    </h2>

                                    <p className="text-darkText text-base">
                                        {current.description}
                                    </p>

                                    <div className="border-t border-white/20 my-2"></div>

                                    <h3 className="text-darkComponent font-semibold mb-1">Tech Stack</h3>

                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {current.techStack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2 py-1 text-sm bg-[#123b52] text-darkHeading border border-[#f5a623]/30 rounded-md"
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
                <div className="flex gap-6 mt-6 relative z-50">
                    <button
                        onClick={prevProject}
                        className="p-3 bg-darkHeaderBg border border-[#f5a623]/40 rounded-full hover:scale-110 hover:bg-[#f5a623]/10 transition-all cursor-pointer"
                    >
                        <FaArrowLeft className="text-[#f5a623]" />
                    </button>
                    <button
                        onClick={nextProject}
                        className="p-3 bg-darkHeaderBg border border-[#f5a623]/40 rounded-full hover:scale-110 hover:bg-[#f5a623]/10 transition-all cursor-pointer"
                    >
                        <FaArrowRight className="text-[#f5a623]" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Projects;

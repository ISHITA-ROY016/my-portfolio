import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MiniProjectCard from "../style/MiniProjectCard.jsx";
import miniProjects from "../data/miniProjects.json";

const splitIntoRowsDesktop = (items) => {
    const rows = [];
    let i = 0;

    while (i < items.length) {
        rows.push(items.slice(i, i + 3));
        i += 3;
    }

    if (rows.length > 1 && rows[rows.length - 1].length === 1) {
        const last = rows[rows.length - 1];
        const prev = rows[rows.length - 2];

        const moved = prev.pop();
        last.unshift(moved);

        if (prev.length === 0) rows.splice(rows.length - 2, 1);
    }

    return rows;
};

const splitIntoRows = (items, itemsPerRow) => {
    const rows = [];
    for (let i = 0; i < items.length; i += itemsPerRow) {
        rows.push(items.slice(i, i + itemsPerRow));
    }
    return rows;
};

const MiniProjects = () => {
    const width = window.innerWidth;
    const isMobile = width < 640;
    const isTablet = width >= 640 && width < 1200;
    const isDesktop = width >= 1200;

    const rowsTablet = splitIntoRows(miniProjects, 2);
    const rowsDesktop = splitIntoRowsDesktop(miniProjects);

    const [activeIndex, setActiveIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    useEffect(() => {
        if (!isMobile) return;
        if (isFlipped) return;

        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % miniProjects.length);
        }, 3000);

        return () => clearInterval(timer);
    }, [isMobile, isFlipped]);

    return (
        <div id="miniprojects" className="animated-border rounded-lg w-full md:w-3/4 max-w-[95%] mx-auto mt-4 sm:mt-7">
            <div
                className="flex-grow bg-darkSecondary p-4 sm:p-6 rounded-lg flex flex-col gap-8"
            >
                {/* Title */}
                <div className="flex items-center gap-3 mx-auto">
                    <img src="/assets/miniProjects.svg" height={50} width={55} />
                    <span className="text-3xl md:text-4xl font-bold text-white">Mini Projects</span>
                </div>

                {/* MOBILE VERSION (1 card) */}
                {isMobile ? (
                    <div className="flex flex-col items-center gap-4 w-full">

                        <div className="relative w-full overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.25, ease: "easeInOut" }}
                                    className="w-full"
                                >
                                    <MiniProjectCard
                                        project={miniProjects[activeIndex]}
                                        onFlipChange={setIsFlipped}
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Dots */}
                        <div className="flex gap-2 mt-2">
                            {miniProjects.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveIndex(i)}
                                    className={`w-3 h-3 rounded-full transition-all 
                                    ${i === activeIndex ? "bg-darkHeading" : "bg-gray-500"}`}
                                ></button>
                            ))}
                        </div>
                    </div>
                ) : (
                    /* TABLET (2 per row) + DESKTOP (3 per row) */
                    <div className="flex flex-col gap-8 w-full">
                        {(isTablet ? rowsTablet : rowsDesktop).map((row, idx) => (
                            <div
                                key={idx}
                                className="grid gap-6 mx-auto"
                                style={{
                                    width: "100%",
                                    gridTemplateColumns: `repeat(${row.length}, 1fr)`
                                }}
                            >
                                {row.map((project, i) => (
                                    <MiniProjectCard key={i} project={project} />
                                ))}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MiniProjects;

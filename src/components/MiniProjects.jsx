import React, { useState, useEffect, useRef } from "react";
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

const MiniProjects = () => {
    const isMobile = window.innerWidth < 640;
    const rowsDesktop = splitIntoRowsDesktop(miniProjects);

    const [activeIndex, setActiveIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false); // NEW
    const startX = useRef(null);

    useEffect(() => {
        if (isFlipped) return; 

        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % miniProjects.length);
        }, 3000);

        return () => clearInterval(timer);
    }, [isFlipped]);

    const handleTouchStart = (e) => {
        startX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        if (startX.current === null) return;

        const endX = e.changedTouches[0].clientX;
        const diff = startX.current - endX;

        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                setActiveIndex((prev) => (prev + 1) % miniProjects.length);
            } else {
                setActiveIndex((prev) =>
                    prev === 0 ? miniProjects.length - 1 : prev - 1
                );
            }
        }
        startX.current = null;
    };

    return (
        <div
            id="miniprojects"
            className="flex-grow bg-darkSecondary w-full md:w-3/4 max-w-[95%] mx-auto 
            mt-3 sm:mt-6 p-4 sm:p-6 rounded-lg flex flex-col gap-8"
        >
            <div className="flex items-center gap-3 mb-4 mx-auto">
                <img src="/assets/miniProjects.svg" height={50} width={55} />
                <span className="text-4xl font-bold text-white">Mini Projects</span>
            </div>

            {isMobile ? (
                <div className="flex flex-col items-center gap-4 w-full"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    <div className="w-full transition-opacity duration-300" key={activeIndex}>
                        <MiniProjectCard
                            project={miniProjects[activeIndex]}
                            onFlipChange={setIsFlipped}
                        />
                    </div>
                    <div className="flex gap-2 mt-2">
                        {miniProjects.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveIndex(i)}
                                className={`w-3 h-3 rounded-full transition-all 
                                ${i === activeIndex ? "bg-[#EDAE49]" : "bg-gray-500"}`}
                            ></button>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="flex flex-col gap-8 w-full">
                    {rowsDesktop.map((row, idx) => (
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
    );
};

export default MiniProjects;

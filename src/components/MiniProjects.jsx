import React from "react";
import MiniProjectCard from "../style/MiniProjectCard.jsx";
import miniProjects from "../data/miniProjects.json";

const splitIntoRows = (items, isMobile) => {
    const maxPerRow = isMobile ? 2 : 3;  // ⭐ KEY CHANGE

    const rows = [];
    let i = 0;

    while (i < items.length) {
        rows.push(items.slice(i, i + maxPerRow));
        i += maxPerRow;
    }

    // Fix orphan rows (no lonely last row)
    while (rows.length > 1 && rows[rows.length - 1].length === 1) {
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
    const rows = splitIntoRows(miniProjects, isMobile);

    // Check if ANY row has 3 cards
    const hasThree = rows.some((r) => r.length === 3);

    // Width logic
    const rowWidth = isMobile
        ? "100%"                      // mobile always full width
        : (hasThree ? "100%" : "66.66%");  // desktop logic

    return (
        <div
            id="miniprojects"
            className="flex-grow bg-darkSecondary w-full md:w-3/4 max-w-[95%] mx-auto mt-3 sm:mt-6 p-4 sm:p-6 rounded-lg flex flex-col gap-8"
        >
            {/* Title */}
            <div className="flex items-center gap-3 mb-4 mx-auto">
                <img src="/assets/miniProjects.svg" height={50} width={55} alt="projects-icon" />
                <span className="text-4xl font-bold text-white">Mini Projects</span>
            </div>

            {/* Dynamic Rows */}
            <div className="flex flex-col gap-6 w-full ">
                {rows.map((row, idx) => (
                    <div
                        key={idx}
                        className="grid gap-6"
                        style={{
                            width: isMobile ? "100%" : rowWidth,
                            gridTemplateColumns: `
                                repeat(
                                    ${isMobile ? 1 : row.length},
                                    1fr
                                )
                            `
                        }}
                    >
                        {row.map((project, i) => (
                            <MiniProjectCard key={i} project={project} />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MiniProjects;

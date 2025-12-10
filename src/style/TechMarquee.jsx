import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const techLogos = [
    { src: "/assets/react.svg", alt: "React Logo" },
    { src: "/assets/typescript.svg", alt: "TypeScript Logo" },
    { src: "/assets/redux.svg", alt: "Redux Logo" },
    { src: "/assets/framer-motion.svg", alt: "Framer Motion" },
    { src: "/assets/spring-core.svg", alt: "Spring Core" },
    { src: "/assets/jenkins.svg", alt: "Jenkins" },
    { src: "/assets/mongodb.png", alt: "MongoDB Logo" },
    { src: "/assets/postgresql.svg", alt: "PostgreSQL Logo" },
    { src: "/assets/graphql.svg", alt: "GraphQL" },
];

const TechMarquee = () => {
    const controls = useAnimation();
    const [tooltip, setTooltip] = useState(null);

    const startAnimation = () => {
        controls.start({
            x: "-100%",
            transition: { repeat: Infinity, duration: 10, ease: "linear" },
        });
    };

    const handleEnter = (e, logo) => {
        const rect = e.currentTarget.getBoundingClientRect();
        controls.stop();

        setTooltip({
            text: logo.alt,
            x: rect.left + rect.width / 2,
            y: rect.top - 10,
        });
    };

    const handleLeave = () => {
        setTooltip(null);
        startAnimation();
    };

    useEffect(() => {
        startAnimation();
    }, []);

    return (
        <div className="flex relative overflow-hidden items-center max-h-20 flex-none">
            <motion.div className="flex w-fit flex-shrink-0" animate={controls}>
                {techLogos.map((logo, index) => (
                    <div
                        key={index}
                        className="flex-none w-8 h-7 p-1 mx-2 sm:mx-3 sm:w-12 sm:h-10 sm:p-3 bg-[#F3F5F7] dark:bg-[#012435] border border-iconBorder rounded-lg flex items-center justify-center cursor-pointer shrink-0"
                        onMouseEnter={(e) => handleEnter(e, logo)}
                        onMouseLeave={handleLeave}
                    >
                        <img src={logo.src} alt={logo.alt} className="w-5 h-5 sm:w-7 sm:h-7" />
                    </div>
                ))}
            </motion.div>

            <motion.div className="flex w-fit flex-shrink-0" animate={controls}>
                {techLogos.map((logo, index) => (
                    <div
                        key={index}
                        className="flex-none w-8 h-7 p-1 mx-2 sm:mx-3 sm:w-12 sm:h-10 sm:p-3 bg-[#F3F5F7] dark:bg-[#012435] border border-iconBorder rounded-lg flex items-center justify-center cursor-pointer shrink-0"
                        onMouseEnter={(e) => handleEnter(e, logo)}
                        onMouseLeave={handleLeave}
                    >
                        <img src={logo.src} alt={logo.alt} className="w-5 h-5 sm:w-7 sm:h-7" />
                    </div>
                ))}
            </motion.div>

            {/* Tooltip */}
            {tooltip &&
                createPortal(
                    <div
                        className="fixed z-[9999] bg-[#001b2b]/80 backdrop-blur-md border border-white/10
            text-white text-xs font-medium py-1 px-2 rounded-md shadow-lg pointer-events-none"
                        style={{
                            top: tooltip.y,
                            left: tooltip.x,
                            transform: "translate(-50%, -100%)",
                        }}
                    >
                        {tooltip.text}
                        <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[#001b2b]/80" />
                    </div>,
                    document.body
                )}
        </div>
    );
};

export default TechMarquee;

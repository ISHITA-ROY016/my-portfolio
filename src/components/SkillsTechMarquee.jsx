import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

const techLogos = [
    { src: "src/assets/react.svg", alt: "React Logo" },
    { src: "src/assets/js.svg", alt: "JavaScript Logo" },
    { src: "src/assets/typescript.svg", alt: "TypeScript Logo" },
    { src: "src/assets/redux.svg", alt: "Redux Logo" },
    { src: "src/assets/firebase.svg", alt: "Firebase Logo" },
    { src: "src/assets/nextjs.svg", alt: "Next.js Logo" },
    { src: "src/assets/mongodb.png", alt: "MongoDB Logo" },
    { src: "src/assets/postgresql.svg", alt: "PostgreSQL Logo" }
];
const SkillsTechMarquee = () => {
    const controls = useAnimation();
    const [paused, setPaused] = useState(false);

    return (
        <>
            <div className="flex">
                <motion.div
                    className="flex w-fit flex-shrink-0"
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                >
                    {techLogos.map((logo, index) => {
                        return (
                            <div key={index} className="w-12 h-10 bg-[#012435] p-3 mx-3 border border-solid border-iconBorder rounded-lg flex items-center justify-center">
                                <img src={logo.src} alt={logo.alt} />
                            </div>
                        );
                    })}
                </motion.div>
                <motion.div
                    className="flex w-fit flex-shrink-0"
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                >
                    {techLogos.map((logo, index) => {
                        return (
                            <div key={index} className="w-12 h-10 bg-[#012435] p-3 mx-3 border border-solid border-iconBorder rounded-lg flex items-center justify-center">
                                <img src={logo.src} alt={logo.alt} />
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </>
    )
}

export default SkillsTechMarquee

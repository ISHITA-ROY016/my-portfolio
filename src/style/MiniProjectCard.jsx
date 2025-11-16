import { useState } from "react";
import { FiRefreshCw } from "react-icons/fi";
import GithubIcon from "/assets/github.svg";
import './miniProjects.css';

const MiniProjectCard = ({ project }) => {
    const [flipped, setFlipped] = useState(false);

    return (
        <div
            className="relative h-40 sm:h-44 rounded-xl cursor-pointer select-none"
            style={{ perspective: "1200px" }}
            onClick={() => setFlipped(!flipped)}
        >
            <div
                className={`w-full h-full duration-700 transform-style-preserve-3d 
        ${flipped ? "rotate-y-180" : ""}`}
            >
                {/* FRONT */}
                <div className="absolute inset-0 bg-gray-300/80 rounded-xl backface-hidden 
                flex flex-col justify-center items-center gap-2 p-2 overflow-hidden
">

                    {/* Badge */}
                    <span className="absolute top-2 right-2 px-2 py-0.5 md:text-[12px] text-[10px] font-semibold 
                   bg-[#0b253a] text-darkHeading rounded-md shadow">
                        {project.category}
                    </span>

                    <span className="text-sm md:text-2xl font-bold text-gray-800 text-center">
                        {project.title}
                    </span>

                    <FiRefreshCw className="text-gray-900/70 text-xl font-extrabold" />
                </div>

                {/* BACK */}
                <div className="absolute inset-0 bg-[#123b52] text-white rounded-xl p-3 flex flex-col rotate-y-180 backface-hidden overflow-hidden
">
                    <p className="text-xs md:text-sm text-white/90">{project.description}</p>

                    <div className="flex flex-wrap gap-1 mt-3">
                        {project.techStack.map((t, idx) => (
                            <span
                                key={idx}
                                className="px-2 py-0.5 text-[9px] md:text-[12px] text-darkHeading bg-[#0b253a] border border-white/20 rounded-md"
                            >
                                {t}
                            </span>
                        ))}
                    </div>

                    <a
                        href={project.github}
                        className="w-max mt-auto text-xs md:text-sm text-darkComponent font-semibold border border-white/30 rounded-lg px-2 py-1 flex items-center gap-2 hover:bg-white/10 transition-all"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={GithubIcon}
                            alt="GitHub"
                            className="w-4 h-4 filter invert brightness-100 text-textColor"
                        />
                        <span>GitHub</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MiniProjectCard;

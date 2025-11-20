import React, { useState } from "react";
import experienceData from "../data/experience.json";

const Experience = () => {
  const [selected, setSelected] = useState(0);

  const exp = experienceData[selected];

  return (
    <section
      id="experience"
      className="flex-grow bg-darkSecondary w-full md:w-3/4 max-w-[95%] mx-auto mt-3 sm:mt-6 p-4 sm:p-6 rounded-lg flex flex-col justify-center items-center gap-4 sm:gap-8"
    >
      {/* Title */}
      <div className="flex gap-3 items-center">
        <img src="/assets/experience.svg" width={35} height={50} />
        <span className="text-4xl font-bold ">Experience</span>
      </div>

      <div className="flex flex-col md:flex-row gap-8 w-full">
        {/* LEFT — Experience List */}
        <div
          className="w-full md:w-[30%] flex flex-col gap-4 pr-2"
        >
          {experienceData.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setSelected(idx)}
              className={`
                  flex items-center gap-4 p-4 w-full rounded-lg transition-all border
                  ${selected === idx
                  ? "bg-[#0b253a] border-[#EDAE49] shadow-[0_0_12px_#EDAE49]"
                  : "bg-[#123b52] border-white/10 hover:border-white/20"
                }
                `}
            >
              <img
                src={item.logo}
                className="w-14 h-14 object-contain rounded-full bg-white"
              />
              <div className="flex flex-col text-left">
                <p className="font-bold text-white">{item.company}</p>
                <p className="text-xs text-white/70">{item.period}</p>
              </div>
            </button>
          ))}
        </div>

        {/* RIGHT — Details */}
        <div className="w-full md:w-[70%] bg-[#0b253a] rounded-xl p-6 border border-white/20">
          <h2 className="text-2xl font-bold text-darkHeading">{exp.role}</h2>

          {/* Badge */}
          <span
            className={`inline-block mt-2 px-3 py-1 rounded-md text-xs font-semibold
            ${exp.type === "Internship" ? "bg-[#F5A623] text-black" : "bg-[#3CB043] text-white"}`}
          >
            {exp.type}
          </span>

          <ul className="mt-6 list-disc list-inside text-darkText space-y-2">
            {exp.description.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-3 mt-6">
            {exp.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-[#123b52] border border-white/20 
                rounded-md text-sm text-darkHeading"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

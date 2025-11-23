import React, { useState } from "react";
import experienceData from "../data/experience.json";

const Experience = () => {
  const [selected, setSelected] = useState(0);

  const exp = experienceData[selected];

  return (
    <div id="experience" className="animated-border rounded-lg w-full md:w-3/4 max-w-[95%] mx-auto mt-4 sm:mt-7 relative z-10">
      <div
        className="flex-grow bg-darkSecondary p-4 sm:p-6 rounded-lg flex flex-col justify-center items-center gap-4 sm:gap-8"
      >
        {/* Title */}
        <div className="flex gap-3 items-center mb-4">
          <img src="/assets/experience.svg" width={55} height={50} />
          <span className="text-3xl md:text-4xl font-bold ">Experience</span>
        </div>

        {/* MOBILE — Accordion */}
        <div className="flex flex-col gap-4 w-full md:hidden mb-4">
          {experienceData.map((item, idx) => (
            <div key={idx}>
              {/* Accordion Button */}
              <button
                onClick={() => setSelected(idx)}
                className={`w-full flex items-center gap-4 p-4 rounded-lg border transition-all
                ${selected === idx
                    ? "bg-[#0b253a] border-[#EDAE49] shadow-[0_0_12px_#EDAE49]"
                    : "bg-[#123b52] border-white/10"
                  }`}
              >
                <img
                  src={item.logo}
                  className="w-14 h-14 rounded-full bg-white object-contain"
                />
                <div className="text-left">
                  <p className="font-bold text-white">{item.company}</p>
                  <p className="text-xs text-white/70">{item.period}</p>
                </div>
              </button>

              {/* Accordion Content */}
              {selected === idx && (
                <div className="mt-3 bg-[#0b253a] rounded-xl p-5 border border-white/20">
                  {/* Row: Role + Visit Link */}
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <h2 className="text-xl font-bold text-darkHeading">
                      {item.role}
                    </h2>

                    {item.companyUrl && (
                      <a
                        href={item.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 sm:mt-0 px-3 py-1 border border-borderColor text-borderColor rounded-md text-sm font-bold hover:bg-borderColor hover:text-black"
                      >
                        Visit {item.company} →
                      </a>
                    )}
                  </div>

                  {/* Badge */}
                  <span
                    className={`inline-block mt-3 px-3 py-1 rounded-md text-xs font-semibold ${item.type === "Internship"
                      ? "bg-[#F5A623] text-black"
                      : "bg-[#3CB043] text-white"
                      }`}
                  >
                    {item.type}
                  </span>

                  <ul className="mt-4 list-disc list-inside text-darkText space-y-2">
                    {item.description.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {item.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[#123b52] border border-white/20 rounded-md text-sm text-darkHeading"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* DESKTOP — Normal Two-Column Layout */}
        <div className="hidden md:flex flex-col md:flex-row gap-8 w-full">
          {/* LEFT List */}
          <div className="w-full md:w-[30%] flex flex-col gap-4 pr-2">
            {experienceData.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setSelected(idx)}
                className={`flex items-center gap-4 p-4 w-full rounded-lg border transition-all
                ${selected === idx
                    ? "bg-[#0b253a] border-[#EDAE49] shadow-[0_0_12px_#EDAE49]"
                    : "bg-[#123b52] border-white/10 hover:border-white/20"
                  }`}
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

          {/* RIGHT Details */}
          <div className="w-full md:w-[70%] bg-[#0b253a] rounded-xl p-6 border border-white/20">
            {/* TOP ROW */}
            <div className="flex justify-between items-center w-full">
              <h2 className="text-2xl font-bold text-darkHeading">
                {exp.role}
              </h2>

              {exp.companyUrl && (
                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 border border-borderColor text-borderColor rounded-md text-sm font-bold hover:bg-borderColor hover:text-black transition"
                >
                  Visit {exp.company} →
                </a>
              )}
            </div>

            {/* Badge */}
            <span
              className={`inline-block mt-3 px-3 py-1 rounded-md text-xs font-semibold ${exp.type === "Internship"
                ? "bg-[#F5A623] text-black"
                : "bg-[#3CB043] text-white"
                }`}
            >
              {exp.type}
            </span>

            <ul className="mt-6 list-disc list-inside text-darkText space-y-2">
              {exp.description.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 mt-6">
              {exp.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-[#123b52] border border-white/20 rounded-md text-sm text-darkHeading"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

// import { useRef, useEffect, useState } from "react";

// const techRow1 = [
//     { src: "/assets/react.svg", alt: "React" },
//     { src: "/assets/js.svg", alt: "JavaScript" },
//     { src: "/assets/typescript.svg", alt: "TypeScript" },
//     { src: "/assets/redux.svg", alt: "Redux" },
//     { src: "/assets/tailwind.svg", alt: "Tailwind CSS" },
//     { src: "/assets/nextjs.svg", alt: "Next.js" },
//     { src: "/assets/framer-motion.svg", alt: "Framer Motion" },
//     { src: "/assets/jest.svg", alt: "Jest" },
//     { src: "/assets/cypress.svg", alt: "Cypress" },
//     { src: "/assets/swagger-ui.svg", alt: "Swagger UI" },
//     { src: "/assets/git.svg", alt: "Git" },
//     { src: "/assets/github2.svg", alt: "GitHub" },
// ];

// const techRow2 = [
//     { src: "/assets/java.svg", alt: "Java" },
//     { src: "/assets/spring-core.svg", alt: "Spring Core" },
//     { src: "/assets/spring-security.svg", alt: "Spring Security" },
//     { src: "/assets/hibernate.svg", alt: "Hibernate" },
//     { src: "/assets/microservice-icon.svg", alt: "Microservices" },
//     { src: "/assets/mysql.svg", alt: "MySQL" },
//     { src: "/assets/postgresql.svg", alt: "PostgreSQL" },
//     { src: "/assets/mongodb.png", alt: "MongoDB" },
//     { src: "/assets/graphql.svg", alt: "GraphQL" },
//     { src: "/assets/firebase.svg", alt: "Firebase" },
//     { src: "/assets/jenkins.svg", alt: "Jenkins" },
//     { src: "/assets/postman.svg", alt: "Postman" },
//     { src: "/assets/bashscript.svg", alt: "Bash Script" },
//     { src: "/assets/azure.svg", alt: "Azure" },
// ];

// const SkillsTechMarquee = () => {
//     const [pausedRow, setPausedRow] = useState(null); // track which row is paused
//     const [hoveredIcon, setHoveredIcon] = useState(null); // track tooltip icon

//     const renderRow = (logos, direction = "left", duration = 20, rowIndex = 0) => {
//         const keyframeName = useRef(`scroll-${Math.random().toString(36).slice(2, 8)}`).current;

//         const keyframes =
//             direction === "left"
//                 ? `@keyframes ${keyframeName} {
//             from { transform: translateX(0); }
//             to { transform: translateX(-33.3333%); }
//           }`
//                 : `@keyframes ${keyframeName} {
//             from { transform: translateX(-33.3333%); }
//             to { transform: translateX(0); }
//           }`;

//         useEffect(() => {
//             const style = document.createElement("style");
//             style.textContent = keyframes;
//             document.head.appendChild(style);
//             return () => style.remove();
//         }, [keyframes]);

//         return (
//             <div className="relative overflow-hidden w-full">
//                 {/* Fade edges */}
//                 <div className="absolute left-0 top-0 w-12 h-full bg-gradient-to-r from-darkSecondary to-transparent z-10"></div>
//                 <div className="absolute right-0 top-0 w-12 h-full bg-gradient-to-l from-darkSecondary to-transparent z-10"></div>

//                 {/* Marquee track */}
//                 <div
//                     className="flex w-max gap-6 relative"
//                     style={{
//                         animation: `${keyframeName} ${duration}s linear infinite`,
//                         animationPlayState: pausedRow === rowIndex ? "paused" : "running",
//                         willChange: "transform",
//                     }}
//                 >
//                     {[...logos, ...logos, ...logos].map((logo, i) => (
//                         <div
//                             key={i}
//                             className="relative group w-20 h-16 bg-[#012435] p-3 border border-solid border-iconBorder rounded-lg flex items-center justify-center cursor-pointer"
//                             onMouseEnter={() => {
//                                 setPausedRow(rowIndex);
//                                 setHoveredIcon(logo.alt);
//                             }}
//                             onMouseLeave={() => {
//                                 setPausedRow(null);
//                                 setHoveredIcon(null);
//                             }}
//                         >
//                             {/* Icon */}
//                             <img
//                                 src={logo.src}
//                                 alt={logo.alt}
//                                 className="w-10 h-10 object-contain transition-transform duration-200 group-hover:scale-110"
//                             />

//                             {/* Tooltip */}
//                             {hoveredIcon === logo.alt && (
//                                 <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#001b2b]/60 backdrop-blur-md border border-white/10
//  text-white text-xs font-medium py-1 px-2 rounded-md shadow-lg whitespace-nowrap z-50 pointer-events-none">
//                                     {logo.alt}
//                                     <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[#001b2b]" />
//                                 </div>
//                             )}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         );
//     };

//     return (
//         <div className="flex flex-col items-center justify-center gap-6 py-6 w-full pr-3">
//             {/* Top row → scrolls right */}
//             {renderRow(techRow1, "right", 22, 1)}

//             {/* Bottom row → scrolls left */}
//             {renderRow(techRow2, "left", 26, 2)}
//         </div>
//     );
// };

// export default SkillsTechMarquee;

import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";

const techRow1 = [
  { src: "/assets/react.svg", alt: "React" },
  { src: "/assets/js.svg", alt: "JavaScript" },
  { src: "/assets/typescript.svg", alt: "TypeScript" },
  { src: "/assets/redux.svg", alt: "Redux" },
  { src: "/assets/tailwind.svg", alt: "Tailwind CSS" },
  { src: "/assets/nextjs.svg", alt: "Next.js" },
  { src: "/assets/framer-motion.svg", alt: "Framer Motion" },
  { src: "/assets/jest.svg", alt: "Jest" },
  { src: "/assets/cypress.svg", alt: "Cypress" },
  { src: "/assets/swagger-ui.svg", alt: "Swagger UI" },
  { src: "/assets/git.svg", alt: "Git" },
  { src: "/assets/github2.svg", alt: "GitHub" },
];

const techRow2 = [
  { src: "/assets/java.svg", alt: "Java" },
  { src: "/assets/spring-core.svg", alt: "Spring Core" },
  { src: "/assets/spring-security.svg", alt: "Spring Security" },
  { src: "/assets/hibernate.svg", alt: "Hibernate" },
  { src: "/assets/microservice-icon.svg", alt: "Microservices" },
  { src: "/assets/mysql.svg", alt: "MySQL" },
  { src: "/assets/postgresql.svg", alt: "PostgreSQL" },
  { src: "/assets/mongodb.png", alt: "MongoDB" },
  { src: "/assets/graphql.svg", alt: "GraphQL" },
  { src: "/assets/firebase.svg", alt: "Firebase" },
  { src: "/assets/jenkins.svg", alt: "Jenkins" },
  { src: "/assets/postman.svg", alt: "Postman" },
  { src: "/assets/bashscript.svg", alt: "Bash Script" },
  { src: "/assets/azure.svg", alt: "Azure" },
];

const SkillsTechMarquee = () => {
  const [pausedRow, setPausedRow] = useState(null);
  const [tooltip, setTooltip] = useState(null); // stores position + text

  const renderRow = (logos, direction = "left", duration = 20, rowIndex = 0) => {
    const keyframeName = useRef(`scroll-${Math.random().toString(36).slice(2, 8)}`).current;

    const keyframes =
      direction === "left"
        ? `@keyframes ${keyframeName} {
            from { transform: translateX(0); }
            to { transform: translateX(-33.3333%); }
          }`
        : `@keyframes ${keyframeName} {
            from { transform: translateX(-33.3333%); }
            to { transform: translateX(0); }
          }`;

    useEffect(() => {
      const style = document.createElement("style");
      style.textContent = keyframes;
      document.head.appendChild(style);
      return () => style.remove();
    }, [keyframes]);

    const handleMouseEnter = (e, logo) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setPausedRow(rowIndex);
      setTooltip({
        text: logo.alt,
        x: rect.left + rect.width / 2,
        y: rect.top - 10,
      });
    };

    const handleMouseLeave = () => {
      setPausedRow(null);
      setTooltip(null);
    };

    return (
      <div className="relative overflow-hidden w-full">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 w-12 h-full bg-gradient-to-r from-gradient-secondary-light to-transparent dark:from-darkSecondary dark:to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-12 h-full bg-gradient-to-l from-gradient-secondary-light to-transparent dark:from-darkSecondary dark:to-transparent z-10"></div>

        {/* Marquee track */}
        <div
          className="flex w-max gap-6 relative"
          style={{
            animation: `${keyframeName} ${duration}s linear infinite`,
            animationPlayState: pausedRow === rowIndex ? "paused" : "running",
            willChange: "transform",
          }}
        >
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="relative group w-20 h-16 bg-[#e6f1fb] dark:bg-[#012435] p-3 border border-solid border-iconBorder rounded-lg flex items-center justify-center cursor-pointer"
              onMouseEnter={(e) => handleMouseEnter(e, logo)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-10 h-10 object-contain transition-transform duration-200 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 py-6 w-full pr-3 relative">
      {renderRow(techRow1, "right", 22, 1)}
      {renderRow(techRow2, "left", 26, 2)}

      {/* Tooltip rendered in portal outside overflow clipping */}
      {tooltip &&
        createPortal(
          <div
            className="fixed z-[9999] bg-[#001b2b]/80 backdrop-blur-md border border-white/10 text-white text-xs font-medium py-1 px-2 rounded-md shadow-lg pointer-events-none transition-opacity duration-150 ease-in-out"
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

export default SkillsTechMarquee;


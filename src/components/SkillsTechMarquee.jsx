// import { useRef, useState, useEffect } from "react";

// const techRow1 = [
//     { src: "/assets/react.svg", alt: "React Logo" },
//     { src: "/assets/js.svg", alt: "JavaScript Logo" },
//     { src: "/assets/typescript.svg", alt: "TypeScript Logo" },
//     { src: "/assets/redux.svg", alt: "Redux Logo" },
//     { src: "/assets/tailwind.svg", alt: "Tailwind CSS Logo" },
//     { src: "/assets/nextjs.svg", alt: "Next.js Logo" },
//     { src: "/assets/nextjs.svg", alt: "Next.js Logo" },
// ];

// const techRow2 = [
//     { src: "/assets/firebase.svg", alt: "Firebase Logo" },
//     { src: "/assets/mongodb.png", alt: "MongoDB Logo" },
//     { src: "/assets/postgresql.svg", alt: "PostgreSQL Logo" },
//     { src: "/assets/java.svg", alt: "Java Logo" },
//     { src: "/assets/graphql.svg", alt: "GraphQL Logo" },
//     { src: "/assets/git.svg", alt: "Git Logo" },
//     { src: "/assets/git.svg", alt: "Git Logo" },
// ];

// const SkillsTechMarquee = () => {
//     const renderRow = (logos, direction = "left", duration = 20) => {
//         const containerRef = useRef(null);
//         const idRef = useRef(`marquee-${Math.random().toString(36).slice(2, 8)}`);
//         const [measured, setMeasured] = useState(false);

//         useEffect(() => {
//             if (containerRef.current) {
//                 requestAnimationFrame(() => setMeasured(true));
//             }
//         }, []);

//         const keyframeName = idRef.current;
//         const keyframes = measured
//             ? direction === "left"
//                 ? `@keyframes ${keyframeName} { 
//                     from { transform: translateX(0); } 
//                     to { transform: translateX(-50%); }
//                   }`
//                 : `@keyframes ${keyframeName} { 
//                     from { transform: translateX(-50%); } 
//                     to { transform: translateX(0); }
//                   }`
//             : "";

//         const Half = ({ isDuplicate = false }) => (
//             <div
//                 className="half flex gap-6"
//                 style={{
//                     flex: "0 0 50%",
//                     width: "50%",
//                 }}
//             >
//                 {logos.map((logo, i) => (
//                     <div
//                         key={isDuplicate ? `dup-${i}` : i}
//                         className="w-20 h-16 bg-[#012435] p-3 border border-solid border-iconBorder rounded-lg flex items-center justify-center"
//                     >
//                         <img src={logo.src} alt={logo.alt} className="w-10 h-10 object-contain" />
//                     </div>
//                 ))}
//             </div>
//         );

//         return (
//             <div className="overflow-hidden relative">
//                 <style>{keyframes}</style>
//                 <div
//                     ref={containerRef}
//                     className="track flex gap-6"
//                     style={{
//                         width: "200%",
//                         display: "flex",
//                         animation: measured ? `${keyframeName} ${duration}s linear infinite` : "none",
//                         willChange: "transform",
//                         transform: "translateZ(0)", // hardware acceleration
//                     }}
//                     aria-hidden={!measured}
//                 >
//                     <Half />
//                     <Half isDuplicate />
//                 </div>
//             </div>
//         );
//     };

//     return (
//         <div className="relative w-full overflow-hidden flex flex-col gap-6 py-3 pr-6">
//             {renderRow(techRow1, "right", 20)}
//             {renderRow(techRow2, "left", 20)}
//         </div>
//     );
// };

// export default SkillsTechMarquee;

import { useRef, useEffect } from "react";

const techRow1 = [
    { src: "/assets/react.svg", alt: "React" },
    { src: "/assets/js.svg", alt: "JavaScript" },
    { src: "/assets/typescript.svg", alt: "TypeScript" },
    { src: "/assets/redux.svg", alt: "Redux" },
    { src: "/assets/tailwind.svg", alt: "Tailwind" },
    { src: "/assets/nextjs.svg", alt: "Next.js" },
    { src: "/assets/framer-motion.svg", alt: "Framer Motion" },
    { src: "/assets/jest.svg", alt: "Jest" },
    { src: "/assets/cypress.svg", alt: "Cypress" },
    { src: "/assets/swagger-ui.svg", alt: "Swagger UI" },
    { src: "/assets/git.svg", alt: "Git" },
    { src: "/assets/github2.svg", alt: "Github" },
];

const techRow2 = [
    { src: "/assets/java.svg", alt: "Java" },
    { src: "/assets/spring-core.svg", alt: "Spring Core" },
    { src: "/assets/spring-security.svg", alt: "Spring Security" },
    { src: "/assets/hibernate.svg", alt: "Hibernate" },
    { src: "/assets/microservice-icon.svg", alt: "Microservice" },
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
    const renderRow = (logos, direction = "left", duration = 20) => {
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

        return (
            // 👇 fade-edge wrapper
            <div className="relative overflow-hidden w-full">
                {/* fade edges */}
                <div className="absolute left-0 top-0 w-12 h-full bg-gradient-to-r from-darkSecondary to-transparent z-10"></div>
                <div className="absolute right-0 top-0 w-12 h-full bg-gradient-to-l from-darkSecondary to-transparent z-10"></div>

                {/* marquee track */}
                <div
                    className="flex w-max gap-6"
                    style={{
                        animation: `${keyframeName} ${duration}s linear infinite`,
                        willChange: "transform",
                    }}
                >
                    {[...logos, ...logos, ...logos].map((logo, i) => (
                        <div
                            key={i}
                            className="w-20 h-16 bg-[#012435] p-3 border border-solid border-iconBorder rounded-lg flex items-center justify-center"
                        >
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                className="w-10 h-10 object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="flex flex-col items-center justify-center gap-6 py-6 w-full pr-3">
            {/* Top row → scrolls right */}
            {renderRow(techRow1, "right", 22)}

            {/* Bottom row → scrolls left */}
            {renderRow(techRow2, "left", 26)}
        </div>
    );
};

export default SkillsTechMarquee;


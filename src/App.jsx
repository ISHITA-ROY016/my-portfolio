import { useState, useEffect } from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

const App = () => {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const header = document.getElementById("site-header");
    if (header) {
      const updateHeight = () => {
        const baseHeight = header.offsetHeight;
        const screenWidth = window.innerWidth;

        // ✅ Mobile vs Desktop adjustment
        const extraSpace = screenWidth < 640 ? 8 : 14; // 10px for mobile, 20px for larger screens
        setHeaderHeight(baseHeight + extraSpace);
      };
      updateHeight();
      window.addEventListener("resize", updateHeight);
      return () => window.removeEventListener("resize", updateHeight);
    }
  }, []);

  return (
    <div className="min-h-screen bg-darkPrimary flex flex-col">
      {/* Fixed Header */}
      <Header />

      {/* Actual Content starts below header */}
      <main style={{ paddingTop: `${headerHeight}px` }}>
        <AboutMe />
        <Education />
        <Skills />
        <Footer />
      </main>
    </div>
  );
};

export default App;

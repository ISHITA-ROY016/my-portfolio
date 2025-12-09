import { useState, useEffect } from "react";
import Loader from "./loader/Loader";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import MiniProjects from "./components/MiniProjects";
import Experience from "./components/Experience";
import Connect from "./components/Connect";
import Footer from "./components/Footer";

const App = () => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fake load time so loader is visible
    const timer = setTimeout(() => setLoading(false), 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) return;

    const header = document.getElementById("site-header");
    if (header) {
      const updateHeight = () => {
        const baseHeight = header.offsetHeight;
        const screenWidth = window.innerWidth;
        const extraSpace = screenWidth < 640 ? 8 : 14;
        setHeaderHeight(baseHeight + extraSpace);
      };

      updateHeight();
      window.addEventListener("resize", updateHeight);
      return () => window.removeEventListener("resize", updateHeight);
    }
  }, [loading]);


  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-primary dark:bg-red-500 bg-fixed bg-cover bg-no-repeat flex flex-col transition-all duration-300">
      <Header />

      <main style={{ paddingTop: `${headerHeight}px` }}>
        <AboutMe />
        <Education />
        <Skills />
        <Projects />
        <MiniProjects />
        <Experience />
        <Connect />
        <Footer />
      </main>
    </div>
  );
};

export default App;

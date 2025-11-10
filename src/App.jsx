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
      const updateHeight = () => setHeaderHeight(header.offsetHeight + 32); // +32px breathing space
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

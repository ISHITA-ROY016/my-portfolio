// import { useTheme } from "./context/themeContext"
import Footer from "./components/Footer"
import Header from "./components/Header"
import "./app.css"
import AboutMe from "./components/AboutMe"
const App = () => {
  // const { isDarkMode, toggleTheme } = useTheme();
  return (
    <div className="flex flex-col h-screen">
      <Header />
      {/* <main className="flex-grow"> main component</main> */}
      <AboutMe />
      <Footer />
       {/* <button onClick={toggleTheme}>Toggle Theme</button> */}
       {/* <p>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</p> */}
    </div>
  )
}

export default App


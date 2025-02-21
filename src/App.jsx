// import { useTheme } from "./context/themeContext"
import Footer from "./components/Footer"
import Header from "./components/Header"
import "./app.css"
const App = () => {
  // const { isDarkMode, toggleTheme } = useTheme();
  return (
    <div>
      <Header />
      <Footer />
       {/* <button onClick={toggleTheme}>Toggle Theme</button> */}
       {/* <p>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</p> */}
    </div>
  )
}

export default App


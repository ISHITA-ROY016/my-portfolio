import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext({
    theme: "dark",
    toggleTheme: () => { },
});

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("dark"); // default → dark

    useEffect(() => {
        const saved = localStorage.getItem("theme");

        if (saved) {
            setTheme(saved);
            document.documentElement.classList.toggle("dark", saved === "dark");
            return;
        }

        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        if (prefersDark) {
            setTheme("dark");
            document.documentElement.classList.add("dark");
        } else {
            setTheme("light");
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const toggleTheme = () => {
        const next = theme === "dark" ? "light" : "dark";
        setTheme(next);
        localStorage.setItem("theme", next);

        document.documentElement.classList.toggle("dark", next === "dark");
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
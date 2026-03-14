"use client";
import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [colorTheme, setColorTheme] = useState("color-primary");
    const [mode, setMode] = useState("light"); // light | dark
    const [direction, setDirection] = useState("ltr"); // ltr | rtl
    const [boxLayout, setBoxLayout] = useState("default"); // default | box-1 | box-2

    useEffect(() => {
        document.documentElement.setAttribute("data-sp-mode-dark", mode);
        if (mode === "dark") {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [mode]);

    useEffect(() => {
        document.documentElement.setAttribute("dir", direction);
    }, [direction]);

    return (
        <ThemeContext.Provider
            value={{
                colorTheme, setColorTheme,
                mode, setMode,
                direction, setDirection,
                boxLayout, setBoxLayout,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}

import React, { useState } from "react"
import Navbar from "./Navbar/Navbar"
import CopyRight from "./Copyright"
import ThemeContext from "../../contexts/themeContext"
import useDarkMode from "../../hooks/useDarkMode"

type LayoutProps = {
    children: React.ReactNode
    className?: string
}

const Layout = ({ children, className = "" }: LayoutProps) => {
    const [theme, toggleTheme] = useDarkMode()

    return (
        <React.Fragment>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                <div className={theme === "dark" ? "dark" : ""}>
                    <div className="min-h-screen min-w-screen overflow-auto font-sans font-bold bg-gray-100 text-slate-800 dark:bg-black dark:text-gray-100 transition-colors duration-300">
                        <Navbar />
                        <main className={className}>{children}</main>
                        <CopyRight />
                    </div>
                </div>
            </ThemeContext.Provider>
        </React.Fragment>
    )
}
export default Layout
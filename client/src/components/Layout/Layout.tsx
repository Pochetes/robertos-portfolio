import React, { useState } from "react"
import Navbar from "./Navbar/Navbar"
import CopyRight from "./Copyright"
import { SunIcon, MoonIcon } from "@heroicons/react/solid"
import { ThemeProvider } from "styled-components"
import ThemeContext from "../../contexts/themeContext"
import useDarkMode from "../../hooks/useDarkMode"
import GlobalTheme, { lightTheme, darkTheme } from "../../styles/globalTheme"

type LayoutProps = {
    children: React.ReactNode
    className?: string
}

const Layout = ({ children, className = "" }: LayoutProps) => {
    const [theme, toggleTheme] = useDarkMode()
    const themeMode = theme === "dark" ? darkTheme : lightTheme

    return (
        <ThemeProvider theme={themeMode}>
            <React.Fragment>
                <GlobalTheme />
                <ThemeContext.Provider value={{ theme, toggleTheme }}>
                    <div className="min-h-screen min-w-screen overflow-auto font-sans font-bold">
                        <Navbar />
                        <main className={className}>{children}</main>
                        <CopyRight />
                    </div>
                </ThemeContext.Provider>
            </React.Fragment>
        </ThemeProvider>
        )
}
export default Layout
import React, { useContext } from 'react'
import { SunIcon, MoonIcon } from '@heroicons/react/solid'
import ThemeContext from '../contexts/ThemeContext'

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <button
        type="button"
        // @ts-ignore
        onClick={toggleTheme}
        >
            {
                theme === "dark" ? 
                <MoonIcon className="h-8"/>
                : <SunIcon className="h-8"/>
            }
        </button>
    )
}

export default ThemeToggle
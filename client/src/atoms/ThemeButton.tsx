import React, { useContext } from 'react'
import { SunIcon, MoonIcon } from '@heroicons/react/solid'
import ThemeContext from '../contexts/themeContexts';

const ThemeButton = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const handleThemeToggle = () => {
        setTheme(prev => !prev)
    }

    return (
        <div>
            <button
            type="button"
            onClick={handleThemeToggle}
            >
                {
                    theme
                    ? <SunIcon className="h-8"/>
                    : <MoonIcon className="h-8"/>
                }
            </button>
        </div>
    )
}
export default ThemeButton
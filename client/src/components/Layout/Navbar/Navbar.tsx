import React, { useState, useMemo } from 'react'
import { Popover } from '@headlessui/react';
import NormalMenu from './NormalMenu';
import HamburgerMenu from './HamburgerMenu';
import ThemeContext from '../../../contexts/themeContext';


const Navbar = () => {
    const [theme, setTheme] = useState<boolean>(false)

    const handleThemeToggle = () => {
        setTheme(prev => !prev)
    }

    const value = useMemo(() => ({
        theme, setTheme
    }), [theme, setTheme])

    return (
        <header className="py-6 px-6">
            <Popover>
                <ThemeContext.Provider value={value}>
                    <NormalMenu />
                    <HamburgerMenu />
                </ThemeContext.Provider>
            </Popover>
        </header>
    )
};

export default Navbar;

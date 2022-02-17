import React, { useState } from 'react'
import { SunIcon, MoonIcon, MenuIcon, XIcon } from '@heroicons/react/solid'
import Hamburger from './Hamburger';

const Navbar = () => {
    const [hamburgerMenu, setHamburgerMenu] = useState<boolean>(false);
    const [theme, setTheme] = useState<boolean>(false);

    const handleMenuToggle = () => {
        setHamburgerMenu(prev => !prev)
    }

    const handleThemeToggle = () => {
        setTheme(prev => !prev)
    }

    return (
        <header className="py-6 px-6">
            <div>
                <div className="flex justify-between font-semibold">
                    <div className="lg:hidden">
                        <button 
                        type="button" 
                        onClick={handleMenuToggle}
                        aria-controls="mobile-menu"
                        >
                            {
                                hamburgerMenu
                                ? <XIcon className="h-8"/>
                                : <MenuIcon className="h-8"/>
                            }
                        </button>
                    </div>
                    <div className="p-2">
                        <a href="#">Roberto</a>
                    </div>
                    <nav className="hidden lg:flex lg:justify-between lg:text-shadow-main lg:space-x-10">
                        <a className="p-2" href="#">Home</a>
                        <a className="p-2" href="#">About</a>
                        <a className="p-2" href="#">Projects</a>
                        <a className="p-2" href="#">Resume</a>
                        <a className="p-2" href="#">Extras</a>
                        <a className="p-2" href="#">Contacts</a>
                    </nav>
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
                </div>
            </div>
            <Hamburger hamburgerMenu={hamburgerMenu}/>
        </header>
    )
};

export default Navbar;

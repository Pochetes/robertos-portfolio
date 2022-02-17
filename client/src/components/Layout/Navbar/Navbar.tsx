import React, { useState, Fragment } from 'react'
import { SunIcon, MoonIcon, MenuIcon, XIcon } from '@heroicons/react/solid'
import { Popover, Transition } from '@headlessui/react';

const Navlinks = [
    { name: "Home", href: "#"},
    { name: "About", href: "#"},
    { name: "Projects", href: "#"},
    { name: "Resume", href: "#"},
    { name: "Extras", href: "#"},
    { name: "Contact", href: "#"},
]

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
            <Popover>
                <div className="mobile-menu flex justify-between font-semibold">
                    <div className="lg:hidden">
                        <Popover.Button>
                            <span className="sr-only">Open main menu</span>
                            <MenuIcon className="h-8" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                    <div className="p-2">
                        <a href="#">Roberto</a>
                    </div>
                    <nav className="hidden lg:flex lg:justify-between lg:text-shadow-main lg:space-x-10">
                        {Navlinks.map((link) => (
                            <a className="p-2" key={link.name} href={link.href}>
                                {link.name}
                            </a>
                        ))}
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
                <Transition
                as={Fragment}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel
                        focus
                        className="absolute top-0 z-10 inset-x-0 min-w-screen min-h-screen bg-black lg:hidden"
                    >
                    <div className="flex px-6 py-6 justify-between">
                        <div className="lg:hidden">
                            <Popover.Button>
                                <span className="sr-only">Close main menu</span>
                                <XIcon className="h-8" aria-hidden="true" />
                            </Popover.Button>
                        </div>
                        <div className="p-2">
                            <a href="#">Roberto Menu</a>
                        </div>
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
                    <div className="min-h-screen bg-black">
                        <nav className=" flex flex-col items-center pt-12 space-y-7 md:space-y-10">
                            {Navlinks.map((link) => (
                                <a className="p-2 text-xl sm:text-2xl" key={link.name} href={link.href}>
                                    {link.name}
                                </a>
                            ))}
                        </nav>
                    </div>
                    </Popover.Panel>
                </Transition>
            </Popover>
        </header>
    )
};

export default Navbar;

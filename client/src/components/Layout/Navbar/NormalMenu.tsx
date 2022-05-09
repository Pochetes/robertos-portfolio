import React, { useContext } from 'react'
import { Popover } from '@headlessui/react'
import { MenuIcon } from '@heroicons/react/solid'
import Navlinks from './Navlinks'
import NavContext from '../../../contexts/NavContext'
import ThemeToggle from '../../../atoms/themeToggle'

const NormalMenu = () => {
    const { navRefs } = useContext(NavContext)

    const scrollToSection = (index) => {
        window.scrollTo({
            top: index > 0 
                ? navRefs[index].current.offsetTop
                : 0,
            behavior: "smooth"
        })
    }

    return (
        <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between" aria-label="Global">
                <div className="lg:hidden">
                    <Popover.Button className="p-2">
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon className="h-8" aria-hidden="true" />
                    </Popover.Button>
                </div>
                <div>
                    <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt=""
                    />
                </div>
                <nav className="hidden lg:flex lg:justify-between lg:text-shadow-main lg:space-x-10">
                    {Navlinks.map((item) => (
                        <div
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="p-2 gradient-link cursor-pointer"
                        >
                        {item.name}
                        </div>
                    ))}
                </nav>
                <div className="pt-2">
                    <ThemeToggle />
                </div>
            </div>
        </div>
    )
}

export default NormalMenu
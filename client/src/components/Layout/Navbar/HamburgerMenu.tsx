import React, { Fragment, useContext } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/solid'
import Navlinks from './Navlinks'
import ThemeToggle from '../../../atoms/themeToggle'
import ThemeContext from '../../../contexts/themeContext'

const HamburgerMenu = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
        >
            <Popover.Panel
                focus
                className="fixed z-10 top-0 inset-x-0 transition transform origin-top-right lg:hidden"
            >
                <div className={`shadow-md min-h-screen ${theme === "dark" ? "bg-black" : "bg-gray-100"} overflow-hidden`}>
                    <div className="px-5 pt-4 flex items-center justify-between">
                        <div className="-mr-2">
                            <Popover.Button className="p-2">
                                <span className="sr-only">Close main menu</span>
                                <XIcon className="h-8" aria-hidden="true" />
                            </Popover.Button>
                        </div>
                        <div>
                            <img
                                className="h-10 w-auto"
                                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                alt=""
                            />
                        </div>
                        <div className="pt-2">
                            <ThemeToggle />
                        </div>
                    </div>
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {Navlinks.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="flex flex-col items-center p-7 text-xl sm:text-2xl rounded-md"
                        >
                            <span className="p-2 gradient-link">{item.name}</span>
                        </a>
                        ))}
                    </div>
                </div>
            </Popover.Panel>
        </Transition>
    )
}

export default HamburgerMenu
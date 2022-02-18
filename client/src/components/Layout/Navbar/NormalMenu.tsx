import React from 'react'
import { Popover } from '@headlessui/react'
import { MenuIcon } from '@heroicons/react/solid'
import Navlinks from './Navlinks'
import ThemeButton from '../../../atoms/ThemeButton'

const NormalMenu = () => (
    <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between" aria-label="Global">
            <div className="lg:hidden">
                <Popover.Button className="p-2">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-8" aria-hidden="true" />
                </Popover.Button>
            </div>
            <a href="#">Roberto</a>
            <nav className="hidden lg:flex lg:justify-between lg:text-shadow-main lg:space-x-10">
                {Navlinks.map((item) => (
                    <a key={item.id} href={item.href} className="p-2">
                    {item.name}
                    </a>
                ))}
            </nav>
            <ThemeButton />
        </div>
    </div>
)

export default NormalMenu
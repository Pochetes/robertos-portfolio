import React from 'react'
import { Popover } from '@headlessui/react'
import { MenuIcon } from '@heroicons/react/solid'
import Navlinks from './Navlinks'
import ThemeButton from '../../../atoms/ThemeButton'

const NormalMenu = () => (
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
        <ThemeButton />
    </div>
)

export default NormalMenu
import * as React from 'react'
import { SunIcon, MoonIcon, MenuIcon } from '@heroicons/react/solid'

const Navbar = () => (
    <header className="py-6 px-6 sticky top-0 z-50">
        <div className="flex justify-between font-semibold">
            <div className="lg:hidden">
                <MenuIcon className="h-8" />
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
                {/* <SunIcon className="h-8"/> */}
                <MoonIcon className="h-8"/>
            </div>
        </div>
    </header>
);

export default Navbar;

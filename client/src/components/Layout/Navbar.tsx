import * as React from 'react'
import { SunIcon, MoonIcon } from '@heroicons/react/solid'

const Navbar = () => (
    <nav className="h-20 fixed left-0 right-0">
        <div className="mx-auto mt-6 px-6 font-semibold">
            <div className="flex justify-between">
                <div className="p-1 sm:px-3 sm:py-2 ">
                    <a href="#">Roberto</a>
                </div>
                <div className="flex justify-evenly px-10 space-x-14">
                    <a className="p-1 sm:px-3 sm:py-2" href="#">Home</a>
                    <a className="p-1 sm:px-3 sm:py-2" href="#">About</a>
                    <a className="p-1 sm:px-3 sm:py-2" href="#">Projects</a>
                    <a className="p-1 sm:px-3 sm:py-2" href="#">Resume</a>
                    <a className="p-1 sm:px-3 sm:py-2" href="#">Extras</a>
                    <a className="p-1 sm:px-3 sm:py-2" href="#">Contacts</a>
                </div>
                <div>
                    {/* <SunIcon className="h-8 w-8 fill-textWhite"/> */}
                    <MoonIcon className="h-8 w-8 fill-white"/>
                </div>
            </div>
        </div>
    </nav>
);

export default Navbar;

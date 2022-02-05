import * as React from 'react'
import { SunIcon, MoonIcon } from '@heroicons/react/solid'

const Navbar = () => (
    <nav className="h-20 fixed left-0 right-0">
        <div className="mx-auto mt-6 px-6 text-2xl">
            <div className="flex justify-between">
                <div className="">
                    <a href="#">Roberto</a>
                </div>
                <div className="flex justify-evenly px-10 space-x-14 tracking-normal">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Projects</a>
                    <a href="#">Resume</a>
                    <a href="#">Extras</a>
                    <a href="#">Contacts</a>
                </div>
                <div>
                    {/* <SunIcon className="h-8 w-8 fill-textWhite"/> */}
                    <MoonIcon className="h-8 w-8 fill-textWhite"/>
                </div>
            </div>
        </div>
    </nav>
);

export default Navbar;

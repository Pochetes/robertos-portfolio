import React from 'react'
import { Popover } from '@headlessui/react';
import NormalMenu from './NormalMenu';
import HamburgerMenu from './HamburgerMenu';


const Navbar = () => {
    return (
        <header className="py-6 px-6">
            <Popover>
                    <NormalMenu />
                    <HamburgerMenu />
            </Popover>
        </header>
    )
};

export default Navbar;

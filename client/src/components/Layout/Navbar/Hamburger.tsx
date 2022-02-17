import React from 'react'
import { Transition } from '@headlessui/react'

const Hamburger = ({ hamburgerMenu }) => (
    <Transition
    show={hamburgerMenu}
    enter="transition ease-out duration-100 transform"
    enterFrom="opacity-0 scale-95"
    enterTo="opacity-100 scale-100"
    leave="transition ease-in duration-75 transform"
    leaveFrom="opacity-100 scale-100"
    leaveTo="opacity-0 scale-95"
    >
        {(ref) => (
            <div className="lg:hidden" id="mobile-menu">
                <nav className="h-screen flex flex-col space-y-3" ref={ref}>
                    <a className="p-2" href="#">Home</a>
                    <a className="p-2" href="#">About</a>
                    <a className="p-2" href="#">Projects</a>
                    <a className="p-2" href="#">Resume</a>
                    <a className="p-2" href="#">Extras</a>
                    <a className="p-2" href="#">Contacts</a>
                </nav>
            </div>
        )}
    </Transition>
)

export default Hamburger
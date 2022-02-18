import React, { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/solid'
import Navlinks from './Navlinks'
import ThemeButton from '../../../atoms/ThemeButton'

const HamburgerMenu = () => (
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
                <ThemeButton />
            </div>
            <div className="min-h-screen bg-black">
                <nav className="flex flex-col pt-2 items-center">
                    {Navlinks.map((link) => (
                        <a className="p-8 text-xl sm:text-2xl" key={link.name} href="https://www.twitter.com/iamrobmart"/*href={link.href}*/>
                            {link.name}
                        </a>
                    ))}
                </nav>
            </div>
        </Popover.Panel>
    </Transition>
)

export default HamburgerMenu
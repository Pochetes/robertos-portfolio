import React, { useContext } from "react"
import Navlinks from "./Navbar/Navlinks"
import NavContext from "../../contexts/NavContext"

const Footer = () => {
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
        <footer className="bg-gray-200 dark:bg-neutral-900 mt-48 h-fit flex flex-col md:mt-64">
            <div className="flex flex-col space-y-8 mt-10 ml-8 text-lg text-slate-600 dark:text-gray-300 md:text-2xl md:space-y-12 md:mt-14 md:ml-14">
                {Navlinks.map((item) => (
                    <div 
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="p-2 cursor-pointer xs:w-28 lg:gradient-link"
                    >
                    {item.name}
                    </div>
                ))}
            </div>
            <p className="text-center text-slate-600 xs:text-sm xs:my-6 sm:text-lg sm:my-8">
                Copyright © 2022 ❤️ Roberto. All rights reserved.
            </p>
        </footer>
    )
}
export default Footer
import * as React from "react"

const Footer = () => (
    <footer className="bg-gray-200 dark:bg-neutral-900 mt-48 h-fit flex flex-col md:mt-64">
        <div className="flex flex-col space-y-8 mt-10 ml-8 text-lg text-slate-600 dark:text-gray-300 md:text-2xl md:space-y-12 md:mt-14 md:ml-14">
            <h2>Home</h2>
            <h2>About</h2>
            <h2>Projects</h2>
            <h2>Experiences</h2>
            <h2>Extras</h2>
        </div>
        <p className="text-center text-slate-600 xs:text-sm xs:my-6 sm:text-lg sm:my-8">
            Copyright © 2022 ❤️ Roberto. All rights reserved.
        </p>
    </footer>
)

export default Footer
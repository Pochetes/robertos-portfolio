import React, { useContext } from "react"
import ThemeContext from "../../contexts/themeContext"

import {
    lightchip,
    darkchip,
    lightplane,
    darkplane,
    lightsol,
    darksol,
    lightspades,
    darkspades,
    app
} from '../../../static/index'

const About = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <section>
            <div className="max-w-screen min-h-screen lg:grid lg:grid-cols-2">
                <div className="lg:flex lg:items-center space-y-10 p-9">
                    <div className="lg:hidden">
                        <h1 className="text-4xl md:text-5xl text-shadow-main">
                            about me!
                        </h1>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <div>
                            <h2 className="text-xl sm:text-3xl md:text-4xl"
                            >
                                I talk about defi, lean startups and ownership as a first-class citizen of the internet.
                            </h2>
                        </div>
                        <div>
                            <h3 className="text-md sm:text-xl md:text-2xl opacity-50">
                                    Currently building a crypto payments service on Solana. Outside of work, I love exercising, practicing jiu-jitsu and traveling. 
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="lg:pt-24 lg:relative lg:overflow-hidden">
                    <div className="lg:absolute lg:inset-x-0  lg:bg-pink-600 lg:rounded-tl-3xl">
                        <div className="lg:bg-black lg:ml-1 lg:mt-1 lg:rounded-tl-3xl h-screen flex justify-center lg:items-center">
                            <div className="grid grid-cols-2 w-3/4 place-items-center h-3/5 gap-4">
                                <div className="p-3 rounded text-center">
                                    <img className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48" src={theme === "dark" ? app : lightchip} alt="chip" />
                                </div>
                                <div className="p-3 rounded text-center">
                                    <img className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48" src={theme === "dark" ? darkplane : lightplane} alt="plane" />
                                </div>
                                <div className="p-3 rounded text-center">
                                    <img className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48" src={theme === "dark" ? darksol : lightsol} alt="sol" />
                                </div>
                                <div className="p-3 rounded text-center">
                                    <img className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48" src={theme === "dark" ? darkspades : lightspades} alt="spades" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="flex justify-center lg:pt-24 lg:bg-purple-400">
                    <div className="grid grid-cols-2 grid-rows-2 gap-x-20 gap-y-4">
                        <img className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48" src={theme === "dark" ? app : lightchip} alt="chip" />
                        <img className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48" src={theme === "dark" ? darkplane : lightplane} alt="plane" />
                        <img className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48" src={theme === "dark" ? darksol : lightsol} alt="sol" />
                        <img className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48" src={theme === "dark" ? darkspades : lightspades} alt="spades" />
                    </div>
                </div> */}
            </div>
        </section>
    )
}
export default About

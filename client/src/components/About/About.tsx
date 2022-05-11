import * as React from "react"
import Interests from "./Interests"

const About = () => {

    return (
        <section id="about-header">
            <div className="max-w-screen lg:grid lg:grid-cols-2">
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
                            <h3 className="text-md sm:text-xl md:text-2xl text-gray-600">
                                    Currently building a crypto payments service on Solana. Outside of work, I love exercising, practicing jiu-jitsu and traveling. 
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="lg:relative">
                    <div className="lg:absolute lg:rounded-l-3xl lg:my-10 lg:-inset-1 lg:bg-gradient-to-br lg:from-green-300 lg:via-blue-500 lg:to-purple-600 lg:blur lg:gradient-xy lg:opacity-50"></div>
                    <div className="lg:relative lg:rounded-l-3xl lg:my-10 min-h-screen overflow-hidden bg-gray-100 dark:bg-black flex justify-center lg:items-center">
                        <Interests />
                    </div>
                </div>
            </div>
        </section>
    )
}

const forwardedAbout = React.forwardRef(About)
export default forwardedAbout

import * as React from "react"
// @ts-ignore
import Contacts from "./Contacts"
import { pfp } from "../../../static/"

const Hero = () => (
    <section>
        <div className="min-h-screen mx-auto">
            <div className="min-h-screen flex flex-row">
                <div className="min-w-1/2 flex flex-col justify-center items-center">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-7xl font-extrabold sm:text-6xl"
                        >
                        Hi! 👋 I'm <span className="text-transparent sm:text-6xl bg-clip-text bg-gradient-to-r from-indigo-700 via-fuchsia-300 to-cyan-400">Roberto</span>.
                        </h1>
                        <h1 className="text-left text-gray-600 font-semibold opacity-80">engineer - thinker - explorer </h1>
                        <Contacts />
                    </div>
                    
                </div>
                <div className="min-w-1/2 flex flex-col justify-center items-center">
                    <div className="transform hover:scale-[1.01] transition-all rounded-full bg-gradient-to-r p-3 from-indigo-700 via-fuchsia-300 to-cyan-400">
                        <div className="transform hover:scale-[1.01] transition-all rounded-full p-3 bg-black">
                            <img className="rounded-full bg-gradient-to-r w-128 h-128 object-cover" src={pfp} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default Hero
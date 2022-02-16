import * as React from "react"
// @ts-ignore
import Contacts from "./Contacts"
import ColoredBorderImg from "../../atoms/coloredBorderImg"
import { pfp } from "../../../static"

const Hero = () => (
    <section>
        <div className="min-h-screen mt-8 md:mt-3 lg:flex lg:justify-evenly lg:pb-24">
            <div className="flex flex-col justify-center lg:items-start text-center p-3 md:p-5">
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-6xl font-extrabold">
                    Hi! 👋 I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400"> Roberto</span>.
                </h1>
                <h1 className="md:text-lg lg:text-left text-gray-600 font-semibold opacity-80 text-shadow-alt">engineer • thinker • explorer</h1>
                <Contacts />
            </div>
            <div className="lg:flex items-center">
                <ColoredBorderImg
                    width="w-64 sm:w-72 md:w-96"
                    height="h-64 sm:h-72 md:h-96"
                    fromColor="from-rose-400"
                    viaColor="via-fuchsia-500"
                    toColor="to-indigo-500"
                    mode="bg-black"
                    image={pfp}
                    imageSize=""
                />
            </div>
        </div>
    </section>
)

export default Hero

import * as React from "react"
// @ts-ignore
import Contacts from "./Contacts"
import ColoredBorderImg from "../../atoms/coloredBorderImg"
import { pfp, eth, sol } from "../../../static"

const Hero = () => (
    <section>
        <div className="min-h-screen mx-auto">
            <div className="min-h-screen flex flex-row">
                <div className="min-w-1/2 flex flex-col justify-center items-center">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-7xl font-extrabold sm:text-6xl"
                        >
                        <span>Hi! 👋 I'm </span>
                        <span className="text-transparent sm:text-6xl bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Roberto</span>.
                        </h1>
                        <h1 className="text-left text-gray-600 font-semibold opacity-80 text-shadow-alt">engineer • thinker • explorer </h1>
                        <Contacts />
                    </div>
                </div>
                <ColoredBorderImg
                    width="w-128"
                    height="h-128"
                    position="min-w-1/2"
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

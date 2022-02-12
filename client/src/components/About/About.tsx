import * as React from "react"
import Layout from "../Layout/Layout"
import ColoredBorderImg from "../../atoms/coloredBorderImg"
import { sol, cpu, suitSpade, airplane } from "../../../static/"

const About = () => (
    <section>
        <div className="min-h-screen mx-auto">
            <div className="min-h-screen flex flex-row">
                <div className="min-w-1/2 grid grid-cols-2 place-content-center bg-cover bg-fixed">
                    <ColoredBorderImg 
                    width="w-64"
                    height="w-64"
                    position="ml-20"
                    fromColor="from-blue-400" 
                    viaColor=""
                    toColor="to-emerald-400"
                    mode="bg-black"
                    image={sol}
                    imageSize="scale-125"
                    />
                    <ColoredBorderImg 
                    width="w-32"
                    height="w-32"
                    position="mt-20 mr-32"
                    fromColor="from-rose-400"
                    viaColor="via-fuchsia-500"
                    toColor="to-indigo-500"
                    mode="bg-black"
                    image={cpu}
                    imageSize="scale-75"
                    />
                    <ColoredBorderImg 
                    width="w-44"
                    height="w-44"
                    position="ml-28"
                    fromColor="from-rose-400"
                    viaColor="via-fuchsia-500"
                    toColor="to-indigo-500"
                    mode="bg-black"
                    image={suitSpade}
                    imageSize="scale-75"
                    />
                    <ColoredBorderImg 
                    width="w-52"
                    height="w-52"
                    position="mr-16"
                    fromColor="from-blue-400" 
                    viaColor=""
                    toColor="to-emerald-400"
                    mode="bg-black"
                    image={airplane}
                    imageSize="scale-100"
                    />
                </div>
                <div className="min-w-1/2 flex flex-col justify-center items-center">
                    <div className="p-10">
                        <div>
                            <h1 className="font-extrabold leading-tight font-3xl text-4xl text-shadow-main"
                            >
                                I talk about defi, lean startups and ownership as a first-class citizen of the internet.
                            </h1>
                            <br />
                            <h2 className="font-extrabold leading-tight text-2xl text-gray-500 text-shadow-alt">
                                   Currently building a crypto payments service on Solana. Outside of work, I love exercising, practicing jiu-jitsu and traveling. 
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default About

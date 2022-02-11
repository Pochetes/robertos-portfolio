import * as React from "react"
import Layout from "../Layout/Layout"
import ColoredBorderImg from "../../atoms/coloredBorderImg"

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
                    image="https://www.svgrepo.com/show/354884/code.svg"
                    />
                    <ColoredBorderImg 
                    width="w-32"
                    height="w-32"
                    position="mt-20 mr-32"
                    fromColor="from-rose-400"
                    viaColor="via-fuchsia-500"
                    toColor="to-indigo-500"
                    mode="bg-black"
                    image="https://www.svgrepo.com/show/354884/code.svg"
                    />
                    <ColoredBorderImg 
                    width="w-44"
                    height="w-44"
                    position="ml-28"
                    fromColor="from-rose-400"
                    viaColor="via-fuchsia-500"
                    toColor="to-indigo-500"
                    mode="bg-black"
                    image="https://www.svgrepo.com/show/354884/code.svg"
                    />
                    <ColoredBorderImg 
                    width="w-52"
                    height="w-52"
                    position="mr-16"
                    fromColor="from-blue-400" 
                    viaColor=""
                    toColor="to-emerald-400"
                    mode="bg-black"
                    image="https://www.svgrepo.com/show/354884/code.svg"
                    />
                </div>
                <div className="min-w-1/2 flex flex-col justify-center items-center">
                    <div className="p-10">
                        <div>
                            <h1 className="font-extrabold leading-tight font-3xl text-4xl"
                            >
                                I am an undergraduate sophomore studying computer science at Florida International University.
                                Currently building a crypto tipping platform and tinkering on Solana. I practice jiu-jitsu
                                and exercise on my free time.
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default About

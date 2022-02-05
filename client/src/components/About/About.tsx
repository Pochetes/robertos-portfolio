import * as React from "react"
import Layout from "../Layout/Layout"

const About = () => (
    <section>
        <div className="min-h-screen mx-auto">
            <div className="min-h-screen flex flex-row">
                <div className="min-w-1/2">
                    <div className="w-16 h-16 bg-white rounded-full"></div>
                    <div className="w-16 h-16 bg-white rounded-full"></div>
                    <div className="w-16 h-16 bg-white rounded-full"></div>
                    <div className="w-16 h-16 bg-white rounded-full"></div>
                </div>
                <div className="min-w-1/2 flex flex-col justify-center items-center">
                    <div className="p-10">
                        <div>
                            <h1 className="font-extrabold leading-tight font-3xl text-8xl">I love to build.</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default About
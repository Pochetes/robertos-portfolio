import * as React from "react"
// @ts-ignore
import Contacts from "./Contacts"

const Hero = () => (
    <section>
        <div className="min-h-screen mx-auto">
            <div className="min-h-screen flex flex-row">
                <div className="min-w-1/2 flex flex-col justify-center items-center">
                    <div className="p-10">
                        <div>
                            <h1 className="font-extrabold leading-tight font-3xl text-8xl">Hi! 👋</h1>
                            <h1 className="mt-4 font-extrabold leading-tight font-3xl text-7xl">
                                I'm
                                <span className="text-transparent bg-gradient-to-r bg-clip-text from-blue-500 to-green-500"> Roberto</span>
                                .
                            </h1>
                        </div>
                        <Contacts />
                    </div>
                </div>
                <div className="min-w-1/2 flex flex-col justify-center items-center">
                    <img className="w-128 h-128 object-cover rounded-full drop-shadow-xl fill-textWhite" src="https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo="/>
                </div>
            </div>
        </div>
    </section>
)

export default Hero
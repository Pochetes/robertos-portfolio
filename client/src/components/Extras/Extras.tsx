import * as React from "react"
import Contributions from "./Contributions"
import Podcasts from "./Podcasts"
import Albums from "./Albums"

const Extras = () => {

    return (
        <section id="extras-header" className="space-y-32">
            <h1 className="mt-32 text-5xl text-center md:text-7xl lg:mb-10 text-shadow-main" >here is ... cool stuff</h1>
            <Contributions />
            <Podcasts />
            <Albums />
        </section>
    )
}
export default Extras
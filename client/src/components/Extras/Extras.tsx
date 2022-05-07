import React, { useContext } from "react"
import Contributions from "./Contributions"
import Podcasts from "./Podcasts"
import Albums from "./Albums"
import NavContext from "../../contexts/NavContext"

const Extras = () => {
    const { navRefs } = useContext(NavContext)
    const extrasRef = navRefs[5]

    return (
        <section className="space-y-32">
            <h1 ref={extrasRef} className="mt-32 text-5xl text-center md:text-7xl lg:mb-10 text-shadow-main" >here is ... cool stuff</h1>
            <Contributions />
            <Podcasts />
            <Albums />
        </section>
    )
}
export default Extras
import React, { useContext } from "react"
import Carousel from "./Carousel"
import NavContext from "../../contexts/NavContext"

const Projects = () => {
    const { navRefs } = useContext(NavContext)
    const projectsRef = navRefs[2]

    return (
        <section>
            <h1 ref={projectsRef} className="md:mt-10 text-5xl text-center md:text-7xl text-shadow-main">Projects</h1>
            <Carousel />
        </section>
    )
}

export default Projects
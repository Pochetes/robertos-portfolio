import * as React from "react"
import Carousel from "./Carousel"
import TouchSlider from "./TouchSlider"
import { useMediaQuery } from 'react-responsive'

const Projects = () => {
    const isMobile = useMediaQuery({ query: `(max-width: 640px)` });

    return (
        <section id="projects-header" className="xs:mb-20">
            <h1 className="md:mt-10 text-5xl text-center md:text-7xl text-shadow-main">Projects</h1>
            {isMobile ? <TouchSlider /> : <Carousel />}
        </section>
    )
}

export default Projects
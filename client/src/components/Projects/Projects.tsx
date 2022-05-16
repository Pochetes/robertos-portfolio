import React, { useState } from "react"
import Carousel from "./Carousel"
import TouchSlider from "./TouchSlider"
import { useMediaQuery } from 'react-responsive'
import { useEffect } from "react"

const Projects = () => {
    const [mobile, setMobile] = useState(false)
    const mediaQuery = useMediaQuery({ query: `(max-width: 640px)` });

    useEffect(() => {
        if(mediaQuery !== mobile) {
            setMobile(mediaQuery)
        }
    }, [mediaQuery])

    return (
        <section id="projects-header" className="xs:mb-20">
            <h1 className="md:mt-10 text-5xl text-center md:text-7xl text-shadow-main">Projects</h1>
            {!mobile ? <Carousel /> : <TouchSlider />}
        </section>
    )
}

export default Projects
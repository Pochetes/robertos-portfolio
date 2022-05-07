import React, { useContext, useRef } from "react"
import Hero from "../components/Hero/Hero"
import About from "../components/About/About"
import Projects from "../components/Projects/Projects"
import Experiences from "../components/Experiences/Experiences"
import Extras from "../components/Extras/Extras"
import ContactPage from "../components/ContactPage/ContactPage"
import Layout from "../components/Layout/Layout"
import Skills from "../components/Skills/Skills"
import NavContext from "../contexts/NavContext"
import Navlinks from "../components/Layout/Navbar/Navlinks"

const App = () => {
    const list = [...Array(Navlinks.length).keys()]
    const navRefs = list.map(link => useRef(null))

    return (
        <NavContext.Provider value={{ navRefs }}>
            <Layout>
                <Hero />
                <About />
                <Projects />
                <Experiences />
                <Skills />
                <Extras />
                <ContactPage />
            </Layout>
        </NavContext.Provider>
    )
}

export default App
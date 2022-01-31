import * as React from "react"
import Layout from "../components/Layout/Layout"
import Hero from "../components/Hero"
import About from "../components/About"
import Projects from "../components/Projects"
import Experiences from "../components/Experiences"
import Skills from "../components/Skills"
import Extras from "../components/Extras"
import ContactPage from "../components/ContactPage"

const App = () => (
    <>
        <Hero />
        <About />
        <Projects />
        <Experiences />
        <Skills />
        <Extras />
        <ContactPage />
    </>
)

export default App
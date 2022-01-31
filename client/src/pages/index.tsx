import * as React from "react"
import Hero from "../components/Hero/Hero"
import About from "../components/About/About"
import Projects from "../components/Projects/Projects"
import Experiences from "../components/Experiences/Experiences"
import Extras from "../components/Extras"
import ContactPage from "../components/ContactPage/ContactPage"

const App = () => (
    <>
        <Hero />
        <About />
        <Projects />
        <Experiences />
        <Extras />
        <ContactPage />
    </>
)

export default App
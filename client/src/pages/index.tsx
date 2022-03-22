import * as React from "react"
import Hero from "../components/Hero/Hero"
import About from "../components/About/About"
import Projects from "../components/Projects/Projects"
import Experiences from "../components/Experiences/Experiences"
import Extras from "../components/Extras"
import ContactPage from "../components/ContactPage/ContactPage"
import Layout from "../components/Layout/Layout"
import Skills from "../components/Skills/Skills"
import "../styles/global.css"

const App = () => (
    <Layout>
        <Hero />
        <About />
        <Projects />
        <Experiences />
        <Skills />
        <Extras />
        <ContactPage />
    </Layout>
)

export default App
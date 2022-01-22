import * as React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import About from "../components/About"
import Projects from "../components/Projects"
import Experiences from "../components/Experiences"
import Skills from "../components/Skills"
import Extras from "../components/Extras"
import ContactPage from "../components/ContactPage"

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
import * as React from "react"
import Layout from "../Layout/Layout"
import Contact from "./Contact"

const ContactPage = () => (
    <Layout>
        <section>
            <div className="flex flex-row flex-auto">
                <Contact 
                    image="../../../static"
                    social="LinkedIn"
                />
                <Contact 
                    image="../../../static"
                    social="Github"
                />
                <Contact 
                    image="../../../static"
                    social="Twitter"
                />
            </div>
            <footer>I'm a footer</footer>
        </section>
    </Layout>
)

export default ContactPage
import * as React from "react"
import Contact from "./Contact"

const ContactPage = () => (
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
)

export default ContactPage
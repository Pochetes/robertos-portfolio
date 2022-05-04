import * as React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Contact from "./Contact"

const ContactPage = () => {
    // queries svg and functionality for lazy-loading
    const imageQuery = useStaticQuery(graphql`
        query {
            githubImg: file(relativePath: {eq: "social/github.svg"}) {
                publicURL
            }
            linkedinImg: file(relativePath: {eq: "social/linkedin.svg"}) {
                publicURL
            }
            twitterImg: file(relativePath: {eq: "social/twitter.svg"}) {
                publicURL
            }
            emailImg: file(relativePath: {eq: "social/email.svg"}) {
                publicURL
            }
        }
    `)

    const githubImg = imageQuery.githubImg
    const linkedinImg = imageQuery.linkedinImg
    const twitterImg = imageQuery.twitterImg
    const emailImg = imageQuery.emailImg

    return (
        <section className="xs:space-y-8">
            <h1 className="mt-10 text-5xl text-center md:text-7xl lg:mb-10 text-shadow-main" >Let's Talk!</h1>
            <div className="flex flex-col xs:space-y-8 xs:mx-5">
                <Contact 
                    image={githubImg.publicURL}
                    social="Github"
                    link="https://www.github.com/Pochetes"
                />
                <Contact 
                    image={linkedinImg.publicURL}
                    social="LinkedIn"
                    link="https://www.linkedin.com/in/RobertoMartinez21"
                />
                <Contact 
                    image={twitterImg.publicURL}
                    social="Twitter"
                    link="https://www.twitter.com/iamrobmart"
                />
                <Contact 
                    image={emailImg.publicURL}
                    social="Email"
                    link="rmart482@fiu.edu"
                />
            </div>
        </section>
    )
}

export default ContactPage
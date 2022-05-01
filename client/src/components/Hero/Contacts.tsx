import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Contact = () => {
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
        }
    `)

    const githubImg = imageQuery.githubImg
    const linkedinImg = imageQuery.linkedinImg
    const twitterImg = imageQuery.twitterImg

    return (
        <div className="flex space-x-10 justify-center lg:justify-left mt-2">

            <a href="https://www.github.com/Pochetes" target="_blank">
                <img className="scale-110 sm:scale-125 md:scale-150" src={githubImg.publicURL} alt="github image" />
            </a>
            <a href="https://www.linkedin.com/in/RobertoMartinez21" target="_blank">
                <img className="scale-110 sm:scale-125 md:scale-150" src={linkedinImg.publicURL} alt="linkedin image" />
            </a>
            <a href="https://www.twitter.com/iamrobmart" target="_blank">
                <img className="scale-110 sm:scale-125 md:scale-150" src={twitterImg.publicURL} alt="twitter image" />
                </a>
        </div>
    )
}

export default Contact
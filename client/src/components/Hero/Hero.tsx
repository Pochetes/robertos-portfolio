import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
// @ts-ignore
import Contacts from "./Contacts"
import ColoredBorderImg from "../../atoms/coloredBorderImg"

const Hero = () => {
    // queries optimal image data and functionality for lazy-loading
    const imageQuery = useStaticQuery(graphql`
        query {
            profileImg: file(relativePath: {eq: "pfp.jpeg"}) {
                childImageSharp {
                    gatsbyImageData(
                        jpgOptions: {progressive: true}
                        layout: CONSTRAINED
                        width: 500
                        height: 500
                        placeholder: BLURRED
                    )
                }
            }
        }
    `)
    const image = getImage(imageQuery.profileImg.childImageSharp.gatsbyImageData)
    
    return (
        <section>
            <div className="xs:mt-5 lg:mt-3 lg:flex lg:justify-evenly lg:pb-24 xs:min-h-screen lg:min-h-0">
                <div className="flex flex-col justify-center lg:items-start text-center p-3 md:p-5">
                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-6xl font-extrabold">
                        Hi! 👋 I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400"> Roberto</span>.
                    </h1>
                    <h1 className="text-gray-600 font-semibold opacity-80 text-shadow-alt xs:text-md s2:text-lg sm:text-xl lg:text-left">engineer • thinker • explorer</h1>
                    <Contacts />
                </div>
                <div className="lg:flex items-center">
                    <ColoredBorderImg
                        image={image}
                        fromColor="from-rose-400"
                        viaColor="via-fuchsia-500"
                        toColor="to-indigo-500"
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero

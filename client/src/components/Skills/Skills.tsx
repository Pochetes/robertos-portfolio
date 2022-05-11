import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import Skill from './Skill'

const Skills = () => {
    // queries optimal image data and functionality for lazy-loading
    const imageQuery = useStaticQuery(graphql`
        query {
            metaImg: file(relativePath: {eq: "skills/meta.png"}) {
                childImageSharp {
                    gatsbyImageData(
                        jpgOptions: {progressive: true}
                        layout: CONSTRAINED
                        width: 600
                        height: 300
                        placeholder: BLURRED
                    )
                }
            }
        }
    `)

    const metaImg = getImage(imageQuery.metaImg.childImageSharp.gatsbyImageData)

    return (
        <section id="skills-header">
            <div className="">
                <h1 className="sm:mt-14 md:mt-32 text-5xl text-center md:text-7xl lg:mb-10 text-shadow-main">My Skills</h1>
                <div className="md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-5 xs:mt-14 xs:mx-10 s2:mx-16 sm:mx-32 md:mx-14 lg:mx-32">
                    <Skill image={metaImg} />
                    <Skill image={metaImg} />
                    <Skill image={metaImg} />
                    <Skill image={metaImg} />
                </div>
            </div>
        </section>
    )
}

export default Skills
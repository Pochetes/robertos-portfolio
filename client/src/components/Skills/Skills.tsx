import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import Skill from './Skill'

const Skills = () => {
    // queries optimal image data and functionality for lazy-loading
    const imageQuery = useStaticQuery(graphql`
        query {
            jsImg: file(relativePath: {eq: "skills/js.png"}) {
                childImageSharp {
                    gatsbyImageData(
                        jpgOptions: {progressive: true}
                        layout: CONSTRAINED
                        width: 600
                        height: 675
                        placeholder: BLURRED
                    )
                }
            },
            pythonImg: file(relativePath: {eq: "skills/python.png"}) {
                childImageSharp {
                    gatsbyImageData(
                        jpgOptions: {progressive: true}
                        layout: CONSTRAINED
                        width: 600
                        height: 675
                        placeholder: BLURRED
                    )
                }
            },
            cImg: file(relativePath: {eq: "skills/c.png"}) {
                childImageSharp {
                    gatsbyImageData(
                        jpgOptions: {progressive: true}
                        layout: CONSTRAINED
                        width: 600
                        height: 675
                        placeholder: BLURRED
                    )
                }
            },
            cppImg: file(relativePath: {eq: "skills/cpp.png"}) {
                childImageSharp {
                    gatsbyImageData(
                        jpgOptions: {progressive: true}
                        layout: CONSTRAINED
                        width: 600
                        height: 675
                        placeholder: BLURRED
                    )
                }
            },
            rustImg: file(relativePath: {eq: "skills/rust.png"}) {
                childImageSharp {
                    gatsbyImageData(
                        jpgOptions: {progressive: true}
                        layout: CONSTRAINED
                        width: 600
                        height: 675
                        placeholder: BLURRED
                    )
                }
            },
            linuxImg: file(relativePath: {eq: "skills/linux.png"}) {
                childImageSharp {
                    gatsbyImageData(
                        jpgOptions: {progressive: true}
                        layout: CONSTRAINED
                        width: 600
                        height: 675
                        placeholder: BLURRED
                    )
                }
            },
            reactImg: file(relativePath: {eq: "skills/react.png"}) {
                childImageSharp {
                    gatsbyImageData(
                        jpgOptions: {progressive: true}
                        layout: CONSTRAINED
                        width: 600
                        height: 675
                        placeholder: BLURRED
                    )
                }
            },
            nodejsImg: file(relativePath: {eq: "skills/nodejs.png"}) {
                childImageSharp {
                    gatsbyImageData(
                        jpgOptions: {progressive: true}
                        layout: CONSTRAINED
                        width: 600
                        height: 675
                        placeholder: BLURRED
                    )
                }
            },
            mongodbImg: file(relativePath: {eq: "skills/mongodb.png"}) {
                childImageSharp {
                    gatsbyImageData(
                        jpgOptions: {progressive: true}
                        layout: CONSTRAINED
                        width: 600
                        height: 675
                        placeholder: BLURRED
                    )
                }
            },
            graphqlImg: file(relativePath: {eq: "skills/graphql.png"}) {
                childImageSharp {
                    gatsbyImageData(
                        jpgOptions: {progressive: true}
                        layout: CONSTRAINED
                        width: 600
                        height: 675
                        placeholder: BLURRED
                    )
                }
            },
            postgresImg: file(relativePath: {eq: "skills/postgres.png"}) {
                childImageSharp {
                    gatsbyImageData(
                        jpgOptions: {progressive: true}
                        layout: CONSTRAINED
                        width: 600
                        height: 675
                        placeholder: BLURRED
                    )
                }
            },
            dockerImg: file(relativePath: {eq: "skills/docker.png"}) {
                childImageSharp {
                    gatsbyImageData(
                        jpgOptions: {progressive: true}
                        layout: CONSTRAINED
                        width: 600
                        height: 675
                        placeholder: BLURRED
                    )
                }
            },
            solidityImg: file(relativePath: {eq: "skills/solidity.png"}) {
                childImageSharp {
                    gatsbyImageData(
                        jpgOptions: {progressive: true}
                        layout: CONSTRAINED
                        width: 600
                        height: 675
                        placeholder: BLURRED
                    )
                }
            },
            javaImg: file(relativePath: {eq: "skills/java.png"}) {
                childImageSharp {
                    gatsbyImageData(
                        jpgOptions: {progressive: true}
                        layout: CONSTRAINED
                        width: 600
                        height: 675
                        placeholder: BLURRED
                    )
                }
            },
            postmanImg: file(relativePath: {eq: "skills/postman.png"}) {
                childImageSharp {
                    gatsbyImageData(
                        jpgOptions: {progressive: true}
                        layout: CONSTRAINED
                        width: 600
                        height: 675
                        placeholder: BLURRED
                    )
                }
            },
        }
    `)

    const jsImg = getImage(imageQuery.jsImg.childImageSharp.gatsbyImageData)
    const pythonImg = getImage(imageQuery.pythonImg.childImageSharp.gatsbyImageData)
    const cImg = getImage(imageQuery.cImg.childImageSharp.gatsbyImageData)
    const cppImg = getImage(imageQuery.cppImg.childImageSharp.gatsbyImageData)
    const rustImg = getImage(imageQuery.rustImg.childImageSharp.gatsbyImageData)
    const linuxImg = getImage(imageQuery.linuxImg.childImageSharp.gatsbyImageData)
    const reactImg = getImage(imageQuery.reactImg.childImageSharp.gatsbyImageData)
    const nodejsImg = getImage(imageQuery.nodejsImg.childImageSharp.gatsbyImageData)
    const mongodbImg = getImage(imageQuery.mongodbImg.childImageSharp.gatsbyImageData)
    const graphqlImg = getImage(imageQuery.graphqlImg.childImageSharp.gatsbyImageData)
    const postgresImg = getImage(imageQuery.postgresImg.childImageSharp.gatsbyImageData)
    const dockerImg = getImage(imageQuery.dockerImg.childImageSharp.gatsbyImageData)
    const solidityImg = getImage(imageQuery.solidityImg.childImageSharp.gatsbyImageData)
    const javaImg = getImage(imageQuery.javaImg.childImageSharp.gatsbyImageData)
    const postmanImg = getImage(imageQuery.postmanImg.childImageSharp.gatsbyImageData)

    return (
        <section id="skills-header">
            <div className="">
                <h1 className="sm:mt-14 md:mt-32 text-5xl text-center md:text-7xl lg:mb-10 text-shadow-main">My Skills</h1>
                <div className="md:grid md:grid-cols-3 lg:grid-cols-4 xs:space-y-10 sm:space-y-0 md:gap-x-10 md:gap-y-7 xs:mt-14 xs:mx-10 s2:mx-16 sm:mx-32 md:mx-14 lg:mx-52">
                    <Skill image={pythonImg} />
                    <Skill image={jsImg} />
                    <Skill image={cImg} />
                    <Skill image={cppImg} />
                    <Skill image={rustImg} />
                    <Skill image={linuxImg} />
                    <Skill image={reactImg} />
                    <Skill image={nodejsImg} />
                    <Skill image={mongodbImg} />
                    <Skill image={graphqlImg} />
                    <Skill image={postgresImg} />
                    <Skill image={dockerImg} />
                    <Skill image={solidityImg} />
                    <Skill image={javaImg} />
                    <Skill image={postmanImg} />
                </div>
            </div>
        </section>
    )
}

export default Skills
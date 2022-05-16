import React from 'react'
import Slides from './Slides'
import Project from "./Project/Project"
import { useStaticQuery, graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'

const TouchSlider = () => {
    // queries optimal image data and functionality for lazy-loading
    const imageQuery = useStaticQuery(graphql`
        query {
            naviWebCompanionImg: file(relativePath: {eq: "projects/naviWebCompanion.png"}) {
                childImageSharp {
                    gatsbyImageData(
                        jpgOptions: {progressive: true}
                        layout: CONSTRAINED
                        width: 500
                        height: 500
                        placeholder: BLURRED
                    )
                }
            },
            realTalkAppImg: file(relativePath: {eq: "projects/realTalkApp.png"}) {
                childImageSharp {
                    gatsbyImageData(
                        jpgOptions: {progressive: true}
                        layout: CONSTRAINED
                        width: 500
                        height: 500
                        placeholder: BLURRED
                    )
                }
            },
            portfolioApiImg: file(relativePath: {eq: "projects/portfolioApi.png"}) {
                childImageSharp {
                    gatsbyImageData(
                        jpgOptions: {progressive: true}
                        layout: CONSTRAINED
                        width: 500
                        height: 500
                        placeholder: BLURRED
                    )
                }
            },
            smartClaimsImg: file(relativePath: {eq: "projects/smartClaims.png"}) {
                childImageSharp {
                    gatsbyImageData(
                        jpgOptions: {progressive: true}
                        layout: CONSTRAINED
                        width: 500
                        height: 500
                        placeholder: BLURRED
                    )
                }
            },
        }
    `)

    const naviImg = getImage(imageQuery.naviWebCompanionImg.childImageSharp.gatsbyImageData)
    const realTalkAppImg = getImage(imageQuery.realTalkAppImg.childImageSharp.gatsbyImageData)
    const portfolioApiImg = getImage(imageQuery.portfolioApiImg.childImageSharp.gatsbyImageData)
    const smartClaimsImg = getImage(imageQuery.smartClaimsImg.childImageSharp.gatsbyImageData)

    const projectImgs = [naviImg, smartClaimsImg, portfolioApiImg, realTalkAppImg]

    return (
        <div className="flex overflow-x-auto mt-10 p-4 xs:ml-3 s1:ml-6 s2:ml-7 xs:space-x-6 s1:space-x-7 s2:space-x-8">
            {Slides.map((slide, index) => {
                return (
                    <div key={index}>
                        <Project
                            title={slide.title}
                            description={slide.description}
                            image={projectImgs[index]}
                            techUsed={slide.techUsed}
                            link={slide.link}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default TouchSlider
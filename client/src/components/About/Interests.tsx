import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'


const Interests = () => {
    // queries optimal image data and functionality for lazy-loading
    const imageQuery = useStaticQuery(graphql`
        query {
            chipImg: file(relativePath: {eq: "interests/chip.png"}) {
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
            planeImg: file(relativePath: {eq: "interests/plane.png"}) {
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
            solImg: file(relativePath: {eq: "interests/sol.png"}) {
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
            spadesImg: file(relativePath: {eq: "interests/spades.png"}) {
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

    const chipImg = getImage(imageQuery.chipImg.childImageSharp.gatsbyImageData)
    const planeImg = getImage(imageQuery.planeImg.childImageSharp.gatsbyImageData)
    const solImg = getImage(imageQuery.solImg.childImageSharp.gatsbyImageData)
    const spadesImg = getImage(imageQuery.spadesImg.childImageSharp.gatsbyImageData)    

    return (
        <div className="grid grid-cols-2 w-3/4 place-items-center h-3/5 gap-4">
            <div className="p-3 rounded text-center">
                <GatsbyImage className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48" image={chipImg} alt="chip" />
            </div>
            <div className="p-3 rounded text-center">
                <GatsbyImage className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48" image={planeImg} alt="plane" />
            </div>
            <div className="p-3 rounded text-center">
                <GatsbyImage className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48" image={solImg} alt="sol" />
            </div>
            <div className="p-3 rounded text-center">
                <GatsbyImage className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48" image={spadesImg} alt="spades" />
            </div>
        </div>
    )
}

export default Interests
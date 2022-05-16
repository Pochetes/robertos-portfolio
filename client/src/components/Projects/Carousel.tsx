import * as React from 'react'
import Slides from './Slides'
import Project from "./Project/Project"
import { Swiper, SwiperSlide } from 'swiper/react'
import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { useMediaQuery } from 'react-responsive'

import "swiper/css"
import "../../styles/swiper.css"
import "swiper/css/navigation"
import { Navigation } from 'swiper'

const Carousel = () => {
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

    const isMobile = useMediaQuery({ query: `(max-width: 900px)` });

    return (
        <div className="mt-20 mx-40">
            <Swiper
                spaceBetween={50}
                slidesPerView={isMobile ? 1 : 2}
                centeredSlides={true}
                modules={[Navigation]}
                navigation
            >
                {Slides.map((slide, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <Project
                                title={slide.title}
                                description={slide.description}
                                image={projectImgs[index]}
                                techUsed={slide.techUsed}
                                link={slide.link}
                            />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default Carousel
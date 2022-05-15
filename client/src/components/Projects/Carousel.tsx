import React, { useState } from 'react'
import Slides from './Slides'
import Project from "./Project/Project"
import { useMediaQuery } from 'react-responsive'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/solid'
import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const length = Slides.length;

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

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1)

    }

    const nextSlide = () => {
        setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1)
    }

    const isMobile = useMediaQuery({ query: `(max-width: 640px)` });

    return (
    <div className="flex overflow-x-auto mt-10 p-4 xs:ml-3 s1:ml-6 s2:ml-7 xs:space-x-6 s1:space-x-7 s2:space-x-8">
        {/* <ChevronLeftIcon
            className="xs:hidden sm:block sm:w-16 sm:h-16 sm:z-10 text-slate-800 dark:text-gray-100 sm:mr-10 md:mr-14 cursor-pointer transform transition-all sm:hover:dark:text-gray-400 sm:hover:text-slate-500 duration-200"
            onClick={prevSlide}
        /> */}
        {Slides.map((slide, index) => {
            return (
                <div key={index}>
                    {isMobile 
                    ?   <Project
                            title={slide.title}
                            description={slide.description}
                            image={projectImgs[index]}
                            techUsed={slide.techUsed}
                            link={slide.link}
                        />
                    : index === currentSlide && (
                        <Project
                            title={slide.title}
                            description={slide.description}
                            image={projectImgs[index]}
                            techUsed={slide.techUsed}
                            link={slide.link}
                        />
                    )}
                </div>
            )
        })}
        {/* <ChevronRightIcon 
            className="xs:hidden sm:block w-16 h-16 text-slate-800 dark:text-gray-100 -ml-7 xs:-ml-2 sm:ml-10 md:ml-14 shrink-0 cursor-pointer transform transition-all sm:hover:dark:text-gray-400 sm:hover:text-slate-500 duration-200"
            onClick={nextSlide}
        /> */}
    </div>
  )
}

export default Carousel
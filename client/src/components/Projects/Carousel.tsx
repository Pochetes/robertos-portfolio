import React, { useState } from 'react'
import Slides from './Slides'
import Project from "./Project/Project"
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

    return (
    <div className="min-h-screen flex justify-center items-center">
        <ChevronLeftIcon className="w-16 h-16 z-10 text-slate-800 dark:text-gray-100 -mr-7 xs:-mr-2 sm:mr-10 md:mr-14 shrink-0 cursor-pointer transform transition-all sm:hover:dark:text-gray-400 sm:hover:text-slate-500 duration-200" onClick={prevSlide}/>
        {Slides.map((slide, index) => {
            return (
                <div key={index}
                className={index === currentSlide ? "animate-fadein" : "animate-fadeout"}
                >
                    {index === currentSlide && (
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
        <ChevronRightIcon className="w-16 h-16 text-slate-800 dark:text-gray-100 -ml-7 xs:-ml-2 sm:ml-10 md:ml-14 shrink-0 cursor-pointer transform transition-all sm:hover:dark:text-gray-400 sm:hover:text-slate-500 duration-200" onClick={nextSlide}/>
    </div>
  )
}

export default Carousel
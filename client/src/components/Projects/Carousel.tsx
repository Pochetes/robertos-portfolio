import React, { useState } from 'react'
import Slides from './Slides'
import Project from "./Project/Project"
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/solid'

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const length = Slides.length;

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1)
    }

    const nextSlide = () => {
        setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1)
    }

    console.log(currentSlide)

    return (
    <div className="min-h-screen flex justify-center items-center">
        <ChevronLeftIcon className="z-10 text-slate-800 dark:text-gray-100 -mr-7 xs:-mr-2 sm:mr-10 md:mr-14 shrink-0 w-16 h-16" onClick={prevSlide}/>
        {Slides.map((slide, index) => {
            return (
                <div key={index}>
                    {index === currentSlide && (
                        <Project
                        title={slide.title}
                        description={slide.description}
                        image={slide.image}
                        link={slide.link}
                        />
                    )}
                </div>
            )
        })}
        <ChevronRightIcon className="text-slate-800 dark:text-gray-100 -ml-7 xs:-ml-2 sm:ml-10 md:ml-14 shrink-0 w-16 h-16" onClick={nextSlide}/>
    </div>
  )
}

export default Carousel
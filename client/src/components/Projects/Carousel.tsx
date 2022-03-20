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
    <div className="min-h-screen flex flex-col items-center space-y-10">
        <ChevronLeftIcon className="w-16 h-16" onClick={prevSlide}/>
        <ChevronRightIcon className="w-16 h-16" onClick={nextSlide}/>
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
    </div>
  )
}

export default Carousel
import React from 'react';
import Tag from './Tag'
import Link from './Link'
import { GatsbyImage } from 'gatsby-plugin-image';
import { useMediaQuery } from 'react-responsive';

const Project = ({ title, description, image, techUsed, link }) => {
    const isMobile = useMediaQuery({ query: `(max-width: 640px)` });

    return (
        <div className={isMobile ? "xs:w-64 s1:w-72 s2:w-80 sm:w-80 bg-neutral-900 rounded-xl" : ""}>
            <GatsbyImage className="object-cover w-full h-80 rounded-t-lg" image={image} alt="" />
            <div className="p-4">
                {/* project title */}
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
                {title}
                </h1>

                {/* description */}
                <p className="mt-2 text-sm md:text-md lg:text-lg text-gray-600">
                {description}
                </p>

                {/* tags */}
                <div className="mt-5 flex flex-wrap">
                    {techUsed.map((tech, index) => {
                        return <Tag key={index} text={tech}/>
                    })}
                </div>
                
                {/* Link to project */}
                <a href={link}>
                    <Link />
                </a>
            </div>
        </div>
    )
}

export default Project
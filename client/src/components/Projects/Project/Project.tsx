import React from 'react';
import Tag from './Tag'
import Link from './Link'
import { GatsbyImage } from 'gatsby-plugin-image';

const Project = ({ title, description, image, techUsed, link }) => (
    <div className="h-full w-72 sm:w-80 md:w-128 shadow-xl dark:shadow-xl dark:shadow-neutral-800/50 rounded-2xl">
        <div className="block p-3 bg-gray-50 dark:bg-neutral-900 rounded-xl">
            <GatsbyImage
                className="object-cover w-full h-64 shadow-md rounded-lg"
                image={image}
                alt="project image"
            />

            <div className="p-6">
                {/* project title */}
                <h5 className="text-xl sm:text-2xl md:text-3xl font-bold">
                {title}
                </h5>

                {/* description */}
                <p className="mt-2 text-sm md:text-md text-gray-600">
                {description}
                </p>

                {/* tags */}
                <div className="mt-5 flex space-x-2">
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
    </div>
)


export default Project
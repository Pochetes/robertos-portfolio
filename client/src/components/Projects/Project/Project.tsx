import React from 'react';
import Tag from './Tag'
import Link from './Link'

const Project = ({ title, description, image, link }) => (
    <div className="h-full w-72 sm:w-80 md:w-128 shadow-xl dark:shadow-xl dark:shadow-neutral-800/50 rounded-2xl">
        <div className="block p-3 bg-gray-50 dark:bg-neutral-900 rounded-xl">
            <img
                className="object-cover w-full h-64 shadow-md rounded-lg"
                src={image}
                alt="project image"
            />

            <div className="p-6">
                {/* project title */}
                <h5 className="text-xl sm:text-2xl md:text-3xl font-bold">
                {title}
                </h5>

                {/* description */}
                <p className="mt-2 text-sm md:text-md text-gray-500">
                {description}
                </p>

                {/* tags */}
                <ul className="mt-5 flex space-x-2">
                    <Tag text="Python"/>
                    <Tag text="Javascript"/>
                </ul>
                
                {/* Link to project */}
                <a href={link}>
                    <Link />
                </a>
            </div>
        </div>
    </div>
)

export default Project
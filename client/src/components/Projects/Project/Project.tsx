import React from 'react';
import Tag from './Tag'
import Link from './Link'

const Project = ({ title, description, image, link }) => (
    <div className="h-full w-96 p-1 shadow-2xl bg-gradient-to-r from-blue-400 to-emerald-400 rounded-2xl">
        <div className="block overflow-hidden bg-black rounded-xl shadow-sm">
            <img
                className="object-cover w-full h-80"
                src={image}
                alt="project image"
            />

            <div className="p-6">
                {/* project title */}
                <h5 className="text-3xl font-bold">
                {title}
                </h5>

                {/* description */}
                <p className="mt-2 text-md text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
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
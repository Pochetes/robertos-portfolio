import React from 'react';

const Project = ({ title, description, image, link }) => (
    <div className="h-full w-96">
        <a
        className="block overflow-hidden border border-gray-100 rounded-lg shadow-sm"
        href=""
        >
        <img
            className="object-cover w-full h-80"
            src="https://www.hyperui.dev/photos/team-1.jpeg"
            alt=""
        />

        <div className="p-6">
            {/* project title */}
            <h5 className="text-3xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h5>

            {/* description */}
            <p className="mt-2 text-md text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
            </p>

            {/* tags */}
            <div className="py-5 flex space-x-3">
                <button className="p-2 border border-white rounded-full">Python</button>
                <button className="p-2 border border-white rounded-full">JavaScript</button>
                <button className="p-2 border border-white rounded-full">C</button>
                <button className="p-2 border border-white rounded-full">OpenCV</button>
            </div>
            
            {/* Link to project */}
            <div
            className="inline-block pb-1 mt-4 font-medium text-blue-600 border-b border-blue-500 "
            >
            Find out more
            <span aria-hidden="true">&rarr;</span>
            </div>
        </div>
        </a>
    </div>
)

export default Project
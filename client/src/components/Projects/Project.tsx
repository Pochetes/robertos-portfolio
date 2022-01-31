import React from 'react';

const Project = ({ title, description, image, link }) => (
    // will be a ui component soon, only marking the boundaries for understanding
    <div className="basis-1/4 content-center mt-6">
        <img src={image} alt="picture of project" />
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <button className="bg-red-300" type="button"><a href={link}>Check out this repo</a></button>
        </div>
    </div>
)

export default Project
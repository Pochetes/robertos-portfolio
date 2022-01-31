import React from 'react'

const Contact = ({ image, social }) => (
    <div className="flex flex-row flex-auto basis-1/4">
        <div className="basis-1/4">
            <img src={image} alt="picture of social media" />
        </div>
        <h2 className="basis-1/4">{social}</h2>
    </div>
)

export default Contact

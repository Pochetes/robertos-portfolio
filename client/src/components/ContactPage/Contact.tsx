import React from 'react'

const Contact = ({ image, social, link }) => (
    <div className="bg-gray-50 dark:bg-neutral-900 rounded-3xl xs:px-2 xs:py-3">
        <a 
        href={link === "Email" ? `mailto: ${link}` : link}
        className="xs:flex xs:items-center">

            <img className="w-16 h-16 rounded-full" src={image} alt="social media image" />
            <h5 className="xs:ml-5 xs:text-4xl">{social}</h5>
        </a>
    </div>
)

export default Contact

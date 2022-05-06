import React from 'react'

const Contact = ({ image, social, link }) => (
    <div className="bg-gray-50 dark:bg-neutral-900 rounded-3xl xs:px-2 xs:py-3 sm:px-3 sm:py-4">
        <a 
        href={link === "Email" ? `mailto: ${link}` : link}
        className="xs:flex xs:items-center">

            <img className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full" src={image} alt="social media image" />
            <h5 className="xs:ml-5 xs:text-3xl sm:text-4xl lg:text-5xl">{social}</h5>
        </a>
    </div>
)

export default Contact

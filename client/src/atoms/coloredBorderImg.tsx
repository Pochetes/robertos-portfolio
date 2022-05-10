import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image"

const ColoredBorderImg = ({ image, ...props }) => (
    <div className={`flex flex-col items-center xs:p-7 sm:px-32 lg:p-0`}>
        <div className={`gradient-x xs:p-1.5 s2:p-2 sm:p-2.5 rounded-full bg-gradient-to-r ${props.fromColor} ${props.viaColor} ${props.toColor}`}>
            <div className={`bg-gray-100 dark:bg-black xs:p-1.5 s2:p-2 sm:p-2.5 rounded-full`}>
                {/* dynamic imaging reduces bandwidth and speeds initial load time */}
                <GatsbyImage imgClassName={`rounded-full object-cover`} image={image} alt="profile picture"/>
            </div>
        </div>
    </div>
)

export default ColoredBorderImg;

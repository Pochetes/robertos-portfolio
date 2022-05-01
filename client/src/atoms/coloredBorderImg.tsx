import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image"

const ColoredBorderImg = ({ width, height, position, fromColor, viaColor, toColor, image, imageSize }) => (
    <div className={`flex flex-col items-center space-y-1`}>
        <div className={`${position} p-3 transform hover:scale-[1.01] transition-all rounded-full bg-gradient-to-r ${fromColor} ${viaColor} ${toColor}`}>
            <div className={`bg-gray-100 dark:bg-black transform hover:scale-[1.01] transition-colors duration-300 rounded-full p-2`}>
                {/* dynamic imaging reduces bandwidth and speeds initial load time */}
                <GatsbyImage className={`${imageSize} ${width} ${height} rounded-full object-cover`} image={image} alt="profile picture"/>
            </div>
        </div>
    </div>
)

export default ColoredBorderImg;

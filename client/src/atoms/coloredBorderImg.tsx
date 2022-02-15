import React from 'react';

const ColoredBorderImg = ({ width, height, fromColor, viaColor, toColor, mode, image, imageSize }) => (
    <div className={`flex flex-col items-center space-y-1`}>
        <div className={`p-2 transform hover:scale-[1.01] transition-all rounded-full bg-gradient-to-r ${fromColor} ${viaColor} ${toColor}`}>
            <div className={`${mode} transform hover:scale-[1.01] transition-all rounded-full p-3`}>
                <img className={`${imageSize} ${width} ${height} rounded-full object-cover`} src={image} />
            </div>
        </div>
    </div>
)

export default ColoredBorderImg;

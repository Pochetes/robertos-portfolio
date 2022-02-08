import React from 'react';

const ColoredBorderImg = ({ width, height, position, fromColor, viaColor, toColor, mode, image }) => (
    <div className={`${position} flex flex-col justify-center items-center`}>
        <div className={`${fromColor} ${viaColor} ${toColor} transform hover:scale-[1.01] transition-all rounded-full bg-gradient-to-r p-3`}>
            <div className={`${mode} transform hover:scale-[1.01] transition-all rounded-full p-3`}>
                <img className={`${width} ${height} rounded-full object-cover`} src={image} />
            </div>
        </div>
    </div>
)

export default ColoredBorderImg;

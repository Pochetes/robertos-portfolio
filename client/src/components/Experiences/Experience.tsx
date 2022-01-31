import React from 'react';

const Experience = ({ year, position, company }) => (
    <div className="mt-6 basis-2">
        <div>{year}</div>
        <div>{position}</div>
        <div>{company}</div>
    </div>
)

export default Experience

import React from 'react'

const Tag = ({ text }) => (
    <li
    className="inline-block px-3 py-1 text-xs font-semibold bg-gray-800 rounded-full"
    >
        {text}
    </li>
)

export default Tag
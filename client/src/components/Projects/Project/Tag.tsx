import React from 'react'

const Tag = ({ text }) => (
    <div
    className="inline-block px-3 py-1 md:px-4 md:py-1.5 text-xs font-semibold bg-neutral-800 shadow-sm dark:shadow-xl shadow-neutral-900/50 text-gray-100 rounded-full"
    >
        {text}
    </div>
)

export default Tag
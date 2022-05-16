import React from 'react'

const Tag = ({ text }) => (
    <div className="p-0.5">
        <div className="inline-block px-3 py-1 rounded-full text-xs lg:text-md font-semibold text-gray-50 bg-slate-800 dark:bg-neutral-800">
            {text}
        </div>
    </div>
)

export default Tag
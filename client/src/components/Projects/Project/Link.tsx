import React from 'react'

const Link = () => (
    <div className="flex items-center mt-6">
        <p className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Find out more</p>
        <span className="text-slate-800 dark:text-gray-100 ml-3 mt-0.5 text-xl transition ease-in-out delay-150 hover:translate-x-3" aria-hidden="true">&rarr;</span>
    </div>
)

export default Link
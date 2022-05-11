import React from 'react'

const Contributions = () => {
  return (
    <div className="xs:flex xs:flex-col xs:space-y-10 lg:flex-row">
        <div className="xs:mx-5 xs:space-y-1 sm:ml-10 sm:space-y-2 lg:self-end xl:mx-auto xl:ml-20">
            <h2 className="xs:text-3xl sm:text-4xl xl:text-5xl">Contributions 👾</h2>
            <p className="text-gray-500 xs:text-md sm:text-lg xl:text-xl">This is my motivation to build robust and reproducible code.</p>
        </div>
        <img className="xs:scale-y-125 xs:mx-1 sm:scale-y-110 sm:mx-4 lg:self-start lg:mx-0 lg:mr-7" src="https://ghchart.rshah.org/Pochetes" alt="My Github Chart" />
    </div>
  )
}

export default Contributions
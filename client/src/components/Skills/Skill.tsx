import React from 'react'

const Skill = ({ technology, img }) => {
  return (
    <div className="p-1 shadow-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-2xl">
      <a className="block p-6 bg-white dark:bg-slate-800 sm:p-8 rounded-xl" href="#">
        <div className="mt-16 sm:pr-8">
          <img src={img} alt="" />
          <h5 className="text-xl font-bold text-gray-900 dark:text-gray-100">{technology}</h5>
        </div>
      </a>
    </div>
  )
}

export default Skill
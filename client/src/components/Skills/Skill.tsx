import React from 'react'

const Skill = ({ img }) => {
  return (
    <div className="shadow-xl rounded-2xl xs:mb-5 md:mb-0">
      <a className="block bg-gray-50 dark:bg-neutral-900 rounded-xl" href="#">
        <div className="mt-4 xs:p-4 sm:p-7 flex flex-col justify-center content-center">
          <img className="lg:grayscale lg:hover:grayscale-0 lg:transition lg:ease-in-out lg:delay-150" src={img} alt="" />
        </div>
      </a>
    </div>
  )
}

export default Skill
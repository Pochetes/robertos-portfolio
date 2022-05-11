import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

const Skill = ({ image }) => {
  return (
    <div className="shadow-xl rounded-2xl xs:mb-5 md:mb-0">
      <a className="block bg-gray-50 dark:bg-neutral-900 rounded-xl">
        <div className="mt-4 xs:p-4 sm:p-7 flex flex-col justify-center content-center">
          <GatsbyImage className="lg:grayscale lg:hover:grayscale-0 lg:transition lg:ease-in-out lg:delay-75" image={image} alt="skill" />
        </div>
      </a>
    </div>
  )
}

export default Skill
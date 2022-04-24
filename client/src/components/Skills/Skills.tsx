import React from 'react'
import Skill from './Skill'
import { meta } from '../../../static'

const Skills = () => {
  return (
    <section>
      <div className="xs:mx-10 md:mx-14">
        <h1 className="sm:mt-14 md:mt-32 text-5xl text-center md:text-7xl lg:mb-10 text-shadow-main">My Skills</h1>
        <div className="md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-5 xs:mt-14">
          <Skill
          img={meta}
          />
          <Skill
          img={meta}
          />
          <Skill
          img={meta}
          />
          <Skill
          img={meta}
          />
        </div>
      </div>
    </section>
  )
}

export default Skills
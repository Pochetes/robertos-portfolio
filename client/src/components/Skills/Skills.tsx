import React from 'react'
import Skill from './Skill'
import { meta } from '../../../static/index'

const Skills = () => {
  return (
    <section>
        <h1 className="md:mt-10 text-5xl text-center md:text-7xl lg:mb-10 text-shadow-main">My Skills</h1>
        <div className="grid grid-cols-4 gap-4">
          <Skill 
          technology="Python"
          img={meta}
          />
          <Skill 
          technology="Python"
          img={meta}
          />
          <Skill 
          technology="Python"
          img={meta}
          />
          <Skill 
          technology="Python"
          img={meta}
          />
        </div>
    </section>
  )
}

export default Skills
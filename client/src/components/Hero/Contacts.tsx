import * as React from 'react'

import {
    github,
    linkedin,
    twitter
} from '../../../static'

const Contact = () => (
    <div className="p-3 mt-2 flex flex-row space-x-10">
        <a href="https://www.github.com/Pochetes" target="_blank"><img className="scale-150" src={github} alt="github image" /></a>
        <a href="https://www.linkedin.com/in/RobertoMartinez21" target="_blank"><img className="scale-150" src={linkedin} alt="linkedin image" /></a>
        <a href="https://www.twitter.com/iamrobmart" target="_blank"><img className="scale-150" src={twitter} alt="twitter image" /></a>
    </div>
)

export default Contact
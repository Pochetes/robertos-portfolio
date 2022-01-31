import * as React from 'react'

import {
    github,
    linkedin,
    twitter
} from '../../../static'

const Contact = () => (
    <div>
        <img src={github} alt="github image" />
        <img src={linkedin} alt="linkedin image" />
        <img src={twitter} alt="twitter image" />
    </div>
)

export default Contact
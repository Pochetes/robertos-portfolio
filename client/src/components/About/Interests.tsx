import * as React from 'react'

import {
    chip,
    plane,
    sol,
    spades,
} from '../../../static'

const Interests = () => {
    return (
        <div className="grid grid-cols-2 w-3/4 place-items-center h-3/5 gap-4">
            <div className="p-3 rounded text-center">
                <img className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48" src={chip} alt="chip" />
            </div>
            <div className="p-3 rounded text-center">
                <img className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48" src={plane} alt="plane" />
            </div>
            <div className="p-3 rounded text-center">
                <img className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48" src={sol} alt="sol" />
            </div>
            <div className="p-3 rounded text-center">
                <img className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48" src={spades} alt="spades" />
            </div>
        </div>
    )
}

export default Interests
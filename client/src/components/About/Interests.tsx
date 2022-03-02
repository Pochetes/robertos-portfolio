import React, { useContext } from 'react'
import ThemeContext from "../../contexts/themeContext"

import {
    lightchip,
    darkchip,
    lightplane,
    darkplane,
    lightsol,
    darksol,
    lightspades,
    darkspades,
    app
} from '../../../static/index'

const Interests = () => {
    const { theme } = useContext(ThemeContext)
  
    return (
        <div className="grid grid-cols-2 w-3/4 place-items-center h-3/5 gap-4">
            <div className="p-3 rounded text-center">
                <img className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48" src={theme === "dark" ? app : lightchip} alt="chip" />
            </div>
            <div className="p-3 rounded text-center">
                <img className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48" src={theme === "dark" ? darkplane : lightplane} alt="plane" />
            </div>
            <div className="p-3 rounded text-center">
                <img className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48" src={theme === "dark" ? darksol : lightsol} alt="sol" />
            </div>
            <div className="p-3 rounded text-center">
                <img className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48" src={theme === "dark" ? darkspades : lightspades} alt="spades" />
            </div>
        </div>
    )
}

export default Interests
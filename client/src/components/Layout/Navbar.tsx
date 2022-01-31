import * as React from 'react'

import {
    lightModeImg,
    darkModeImg,
} from '../../../static/'

const Navbar = () => (
    <nav>
        <div className="flex flex-row flex-auto">
            <a className="basis-1/3" href="#">
                <span className="text-left">Roberto</span>
            </a>
            <div className="basis-1/3">
                <ul className="text-center flex flex-row flex-auto">
                    <li className="basis-1/12"><a href="#">Home</a></li>
                    <li className="basis-1/12"><a href="#">About</a></li>
                    <li className="basis-1/12"><a href="#">Projects</a></li>
                    <li className="basis-1/12"><a href="#">Resume</a></li>
                    <li className="basis-1/12"><a href="#">Extras</a></li>
                    <li className="basis-1/12"><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="basis-1/3">
                <img src={lightModeImg} alt="light mode icon" />
                <img src={darkModeImg} alt="dark mode icon" />
            </div>
        </div>
    </nav>
);

export default Navbar;

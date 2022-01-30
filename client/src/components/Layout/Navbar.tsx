import * as React from 'react'

import {
    lightModeImg,
    darkModeImg,
} from '../../../static/'

const Navbar = () => (
    <nav>
        <div>
            <a href="#">
                <span className="text-left">Roberto</span>
            </a>
            <div>
                <ul className="text-center">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Resume</a></li>
                    <li><a href="#">Extras</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div>
                <img src={lightModeImg} alt="light mode icon" />
                <img src={darkModeImg} alt="dark mode icon" />
            </div>
        </div>
    </nav>
);

export default Navbar;

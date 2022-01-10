import React from 'react'
import './About.css';
import Zoom from 'react-reveal/Zoom';

import flag from './Images/flag2.png';
export default function About() {
    return (
        <div className="aboutPage">
            <div className="about">
                <Zoom top >
                    <h1>About Us</h1>
                    <hr />
                    <h4>ESD Project by SE IT-A</h4>
                </Zoom>
                <div className="content">

                    <Zoom bottom cascade>
                        <ul className="mid">
                            <li>Somil Doshi  - 15</li>
                            <li>Aditya Joshi  - 34</li>
                            <li>Dhruvi Jivani  - 33</li>
                            <li>Riti Moradiya  - 51</li>
                        </ul>
                    </Zoom>

                    <Zoom left >
                        <div className="left">

                            <p><b>Presented by,</b></p>
                            <ul>
                                <li>Kailash Ahir    - 2</li>
                                <li>Krishna Desai    - 10</li>
                                <li>Preet Desai    - 11</li>
                                <li>Hemin Dhamelia  - 13</li>
                            </ul>
                        </div>
                    </Zoom>
                    <Zoom right>
                        <img src={flag} alt="flag" />
                    </Zoom>
                </div>
            </div>
            <div className="footer">
                <p>Copyright &copy; https://kgsy.netlify.app <br />All rights reserved!</p>
            </div>
        </div>
    )
}
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
                    {/* <h4>ESD Project by SE IT-A</h4> */}
                </Zoom>
                <div className="content">

                    <Zoom bottom cascade>
                        <ul className="mid">
                            
                        </ul>
                    </Zoom>

                    <Zoom left >
                        <div className="left">

                            <p><b>Presented by,</b></p>
                            <ul>
                                <li>Preet Desai    - 11</li>
                                <li>Ronak Dhakad  - 12</li>
                                <li>Somil Doshi  - 15</li>
                            </ul>
                        </div>
                    </Zoom>
                    <Zoom right>
                        <img src={flag} alt="flag" />
                    </Zoom>
                </div>
            </div>
            <div className="footer">
                <p>Copyright &copy; https://sd-kgsy.netlify.app <br />All rights reserved!</p>
            </div>
        </div>
    )
}
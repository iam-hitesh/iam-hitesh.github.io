import React from "react";

import Navbar from "../components/navbar";


const Home = (props) => {
    return (
        <div className="col-lg-12">
            <div className="row justify-content-md-center">
                <div className="col col-lg-10">
                    <div className="card about-card">
                        <div className="card-body">
                            <span className="about-intro">
                                Hi, my name is
                            </span>
                            <h4 className="about-name">
                                Hitesh Yadav.
                            </h4>
                            <h3 className="about-tagline">
                                I build things for the web.
                            </h3>
                            <div className="about-details">
                                <p>I'm a software engineer based in New Delhi, INDIA specializing in building
                                    (and occasionally designing) exceptional websites, applications, and
                                    everything in between. I am having a great interest in Information Security &amp;amp; Machine Learning, I love making things, learning and exploring new things, collaborating and solving different kind of problems.</p>
                                <p>Shortly after graduating, I joined the engineering team at Instahyre where I work on a optimizing and maintaining the current code along with adding new features.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;
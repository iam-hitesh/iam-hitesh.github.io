import React from "react";

const Home = () => {
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
                                    (and occasionally designing) exceptional websites, scalable applications, and
                                    everything in between. I am having a great interest in Information Security &amp; Systems. Apart from coding and solving complex system problems, I love travelling, reading novels and cooking. </p>
                                <p>Currently, I am part of the core engineering team at GreenLight Planet India where I work on building scalable services and maintaining existing projects along with adding new features.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;
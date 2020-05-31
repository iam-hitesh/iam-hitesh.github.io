import React from "react";

import SkillsComponent from "../components/skillsComponent";


const Contact = (props) => {
    return (
        <div className="col-lg-12">
            <div className="row justify-content-md-center">
                <div className="col col-lg-10 contact-section">
                    <h2 className="heading">
                        Get In Touch
                    </h2>
                    <p className="content">
                        Want to discuss any project or whether you have a question or just want to say hi, ping me I'll try my best to get back to you!
                    </p>
                    <a href="mailto:hhiteshyadav@gmail.com" target="_blank" rel="nofollow noopener noreferrer" className="btn contact-btn">
                        Say Hello
                    </a>
                </div>
            </div>
        </div>
    )
};

export default Contact;
import React from "react";

import SkillsComponent from "../components/skillsComponent";


const Skills = (props) => {
    return (
        <div className="col-lg-12">
            <div className="row justify-content-md-center">
                <div className="col col-lg-10">
                    <div className="card about-card">
                        <SkillsComponent />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Skills;
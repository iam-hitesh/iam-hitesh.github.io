import React from "react";

import PythonIcon from "../assets/images/skills/python.svg";
import GoIcon from "../assets/images/skills/golang.svg";
import CppIcon from "../assets/images/skills/c++.svg";
import JavascriptIcon from "../assets/images/skills/javascript.svg";
import DataStructure from "../assets/images/skills/dataStructure.svg";
import Algorithms from "../assets/images/skills/algorithm.svg";
import Maths from "../assets/images/skills/maths.svg";
import Web from "../assets/images/skills/web.svg";
import DjangoIcon from "../assets/images/skills/django.svg";
import NodeIcon from "../assets/images/skills/node.svg";
import ReactIcon from "../assets/images/skills/reactjs.svg";
import ExpressIcon from "../assets/images/skills/express.svg";
import jQuery from "../assets/images/skills/jquery.svg";
import Git from "../assets/images/skills/git.svg";
import Linux from "../assets/images/skills/linux.svg";
import SQL from "../assets/images/skills/sql.svg";


const skills = [
    {
        "id": 1,
        "title": "Python",
        "icon": PythonIcon
    },
    {
        "id": 2,
        "title": "Go",
        "icon": GoIcon
    },
    {
        "id": 3,
        "title": "C++",
        "icon": CppIcon
    },
    {
        "id": 4,
        "title": "Javascript(ES6+)",
        "icon": JavascriptIcon
    },
    {
        "id": 5,
        "title": "Data Structure",
        "icon": DataStructure
    },
    {
        "id": 6,
        "title": "Algorithms",
        "icon": Algorithms
    },
    {
        "id": 7,
        "title": "Maths",
        "icon": Maths
    },
    {
        "id": 8,
        "title": "Web Services",
        "icon": Web
    },
    {
        "id": 9,
        "title": "Django",
        "icon": DjangoIcon
    },
    {
        "id": 10,
        "title": "Node.js",
        "icon": NodeIcon
    },
    {
        "id": 11,
        "title": "React.js",
        "icon": ReactIcon
    },
    {
        "id": 12,
        "title": "Express",
        "icon": ExpressIcon
    },
    {
        "id": 13,
        "title": "jQuery",
        "icon": jQuery
    },
    {
        "id": 14,
        "title": "Git",
        "icon": Git
    },
    {
        "id": 15,
        "title": "Linux",
        "icon": Linux
    },
    {
        "id": 16,
        "title": "SQL",
        "icon": SQL
    }
];


const SkillsComponent = () => {
    return (
        <div className="card-body">
            <h3 className="heading">Skills</h3>
            <div className="row skills-board">
                {/* Programming Languages */}
                {
                    skills && skills.map((skill, id) => {
                        return (
                            <div className="skill-card" key={id}>
                                <div className="skill-body">
                                    <img src={ skill.icon } />
                                </div>
                                <div className="skill-footer">{skill.title}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default SkillsComponent;
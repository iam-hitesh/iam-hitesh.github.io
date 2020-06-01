import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="col-lg-12">
            <div className="navbar navbar-nav">
                <ol>
                    <li><Link to={`/`}>About</Link></li>
                    <li><Link to={`/experience`}>Experience</Link></li>
                    <li><Link to={`/projects`}>Projects</Link></li>
                    <li><Link to={`/skills`}>Skills</Link></li>
                    <li><a href="https://medium.com/@ihitesh" target="-_blank" rel="nofollow noopener noreferrer">Blog</a></li>
                    <li><a href="https://github.com/iam-hitesh/iam-hitesh.github.io/raw/master/resume.pdf" target="-_blank" rel="nofollow noopener noreferrer">Resume</a></li>
                    <li><Link to={`/contact`}>Contact &amp; Credits</Link></li>
                </ol>
            </div>
        </div>
    )
};


export default Navbar;
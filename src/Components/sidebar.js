import React from "react";

import ProfilePic  from '../assets/images/hitesh_3.jpg';
import GithubLogo from '../assets/images/github.png';
import LinkedinLogo from '../assets/images/linkedin-color.png';
import MediumLogo from '../assets/images/medium-color.png';
import InstagramLogo from '../assets/images/instagram-color.png';
import MailIcon from '../assets/images/mail.png';
import LocationIcon from '../assets/images/location.png';


const Sidebar = (props) => {
    return (
        <div className="col-lg-3 col-md-6 col-sm-12 profile-left">
            <div className="card profile-picture">
                <img src={ ProfilePic } alt="Profile Pic" className="profile-img" />
                    <div className="picture-tagline">
                        <img src="https://github.githubassets.com/images/icons/emoji/unicode/1f4bb.png" width="20px"/>
                        <span className="ml-1">Engineer</span>
                    </div>
            </div>
            <h2 className="name-heading">Hitesh Yadav</h2>
            <ul className="social-profiles">
                <li className="social-profile">
                    <a href="https://github.com/iam-hitesh" target="_blank" className="social-profile-link">
                        <img alt="github-logo" src={ GithubLogo } width="24px"/>
                    </a>
                </li>
                <li>
                    <a href="https://linkedin.com/in/iam-hitesh" target="_blank" className="social-profile-link">
                        <img alt="linkedin-logo" src={ LinkedinLogo } width="24px"/>
                    </a>
                </li>
                <li>
                    <a href="https://medium.com/@ihitesh" target="_blank" className="social-profile-link">
                        <img alt="medium-logo" src={ MediumLogo } width="24px"/>
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com/look_hitesh" target="_blank" className="social-profile-link">
                        <img alt="instagram-logo" src={ InstagramLogo } width="24px"/>
                    </a>
                </li>
            </ul>
            <hr/>
            <ul className="other-details">
                <li>
                    <img src={ MailIcon } width="20px" alt="email-icon"/>
                    <a href="mailto:hhiteshyadav@gmail.com" className="mail-h4 ml-2">
                         hhiteshyadav@gmail.com
                    </a>
                </li>
                <li>
                    <img src={ LocationIcon } width="20px" alt="location-icon"/>
                    <span className="ml-2">Jaipur, Rajasthan</span>
                </li>
            </ul>
            <hr/>
            <a href="https://github.com/iam-hitesh/iam-hitesh.github.io/raw/master/resume.pdf" rel="nofollow noopener noreferrer">
                <button className="btn btn-primary resume-btn">
                    Resume
                </button>
            </a>
            <hr/>
            <footer>
                Design taken from <a href="https://brittanychiang.com" target="_blank" rel="nofollow noopener noreferrer">brittanychiang.com</a>
            </footer>
        </div>
    )
};

export default Sidebar;
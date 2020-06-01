import React from "react";
import axios from 'axios';


const gerProjects = async () => {
    return await axios.get(
        `https://api.github.com/users/iam-hitesh/repos`,
    );
};


class Projects extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            projects: null
        }
    }

    componentDidMount() {
        gerProjects().then((projects) => {
            const unforkedProjects = projects.data.filter(project => !project.fork);
            this.setState({
                projects: unforkedProjects,
                isLoading: false
            });
        })
    }

    render(){
        return (
            <div className="col-lg-12">
                <div className="row justify-content-md-center">
                    <div className="col col-lg-10">
                        <div className="card about-card">
                            <div className="card-body">
                                <h3 className="heading">Some Things I've Built</h3>

                                <div className="container">
                                    <div className="card-columns">
                                        {
                                            this.state.isLoading ? (
                                                <div className="sk-chase">
                                                    <div className="sk-chase-dot"></div>
                                                    <div className="sk-chase-dot"></div>
                                                    <div className="sk-chase-dot"></div>
                                                    <div className="sk-chase-dot"></div>
                                                    <div className="sk-chase-dot"></div>
                                                    <div className="sk-chase-dot"></div>
                                                </div>
                                            ) : ("")
                                        }
                                        {
                                            this.state.projects && this.state.projects.map((project, id) => {
                                                return(
                                                    <div className="card project-card" key={id}>
                                                        <div className="card-body">
                                                            <a href={project.html_url} target="_blank" rel="nofollow noopener noreferrer">
                                                                <h5 className="project-title">
                                                                    { project.name }
                                                                </h5>
                                                            </a>
                                                            <p className="project-text">
                                                                { project.description }
                                                            </p>
                                                            {/*<div className="project-footer">*/}
                                                            {/*    <ul className="project-techs">*/}
                                                            {/*        <li>Node.js</li>*/}
                                                            {/*        <li>Node.js</li>*/}
                                                            {/*        <li>Node.js</li>*/}
                                                            {/*    </ul>*/}
                                                            {/*</div>*/}
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Projects;
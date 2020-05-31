import React from "react";
import { Route, Switch } from 'react-router-dom';

import Home from "./pages/home";
import Experience from "./pages/experience";
import Projects from "./pages/projects";
import Skills from "./pages/skills";
import Contact from "./pages/contact";
import NotFound from "./pages/home";



const Routes = () => (
    <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/experience" component={ Experience } />
        <Route exact path="/projects" component={ Projects } />
        <Route exact path="/skills" component={ Skills } />
        <Route exact path="/contact" component={ Contact } />
        <Route component={ NotFound } />
    </Switch>
);


export default Routes;
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";

import './assets/css/default.css';


const App = () => {
    return(
        <div className="row">
            {/* Left sidebar for fixed profile content */}
            <Sidebar />

            {/* Right sidebar for content change */}
            <div className="col-lg-9 col-md-6 col-sm-12 profile-right">
                <div className="row">
                    <Navbar />
                    <Routes />
                </div>
            </div>
        </div>
    )
};


ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
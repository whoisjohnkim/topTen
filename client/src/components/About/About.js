import React from "react";
import "./About.css";
import {default as Icon} from "../Icon/index";

const About = () => (
    <div className="container">
        <div className="row">
            <div className="col">
                <span className="pageHeader">
                    Top<Icon/>
                </span>
                <span className="links">
                    <a href="/lists" className="mainLink">All Lists</a>|
                    <a href="/" className="mainLink">Top Lists</a>|
                    <a href="/" className="mainLink">New List</a>
                </span>
            </div>
        </div>

    </div>
)

export default About;
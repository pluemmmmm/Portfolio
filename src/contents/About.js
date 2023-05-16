import React, { Component } from "react";
import profilepic from '../img/about.jpg'
import { render } from "@testing-library/react";

class About extends Component {
    render() {
        return (
            <div className="condiv about">
                <h1 className="subtopic">About me</h1>
                <img src={profilepic} alt=""/>
                <h3>Hi I'm Aekasit</h3>
                <p>I'm currently a 3rd year student at Rajamangala University of Technology Thanyaburi and want to learn a lot of work skills In order to work properly and efficiently.</p>
            </div>
        );
    }
}

export default About;
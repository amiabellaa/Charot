
import { Link } from 'react-router-dom';
import React from 'react'
import "./About.css";

const About = () => {
    return (
        <div>
            <h2>Contact list application using ReactJs</h2>
            <Link to="/">
        <button className="btn btn-edit">Go Back</button>
    </Link>
        </div>
    )
}

export default About

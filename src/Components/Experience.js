import React from 'react';
import jsLogo from '../Images/icons8-javascript-logo-50.png';
import cssLogo from '../Images/icons8-css3-50.png';
import htmlLogo from '../Images/icons8-html-5-50.png';
import reactLogo from '../Images/icons8-react-native-50.png';
import reduxLogo from '../Images/icons8-redux-50.png';
import nodeLogo from '../Images/icons8-node-js-32.png';
import databaseLogo from '../Images/icons8-database-50.png';
import tailwind from '../Images/tailwind.png';
import bootstrap from '../Images/bootstrap.png';
import { Link } from 'react-router-dom';

export default function Experience () {
    let logos = [jsLogo, htmlLogo, cssLogo, reactLogo, reduxLogo, nodeLogo, databaseLogo, tailwind, bootstrap]
    return (
        <div className='experience-container description border border-0 rounded-2'>
            <h2>Experience:</h2>
            <h4>
                My journey started in January of 2022 when I met SoyHenry. After a few weeks learning about JavaScript I realeazed this was my dream job. I was so excited
                that I started developing projects by myself as the autodidact person I am; currently I have 3 projects: one with only Front-end and two Full-Stack, you can visit them <Link to='pprojects' className='text-decoration-none text-pink'>here</Link>; I graduated with the last project, the tech 'Unknown coder' e-commerce.<br/>
                <br/>
                Also I finished SoyHenry's Teacher Assistant programm, wich consists in coordinating a students group to achieve integration between them and other groups, guiding them in the first steps of this course, assisting the pair programming and promoting group colaboration and finally proposing ideas to improve SoyHenry's bootcamp processes.
                My most relevant experiences are being a Full Stack and Interactive developer in Skill-on Ecuador, in wich my role included creating animated infographic and interfaces for corporative courses; and in other hand, my current job, wich envolves developing web pages and giving them tech support.
            </h4>
            <br/>
            <h4>Languages, frameworks and technologies I've learned until now:
                <br/>
                <b> Front-End:</b> JavaScript, HTML, CSS, React.js, Redux, Bootstrap and Tailwind.
                <br/>
                <b> Back-End:</b> Node.js, Express.js, SQL, and PHP.
                <br/>
                <b>Others:</b> ActionScript 3.0 and Adobe Suite.
            </h4>
            <div className="icons-cont d-flex flex-row justify-content-center align-self-center mt-3 w-100 flex-wrap">
                {logos.map(logo => {return (
                        <img src ={logo} alt='logo' key={logo} className="w-10"/>
                )})}
            </div>
        </div>
    )
}
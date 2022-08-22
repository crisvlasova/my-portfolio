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
        <div className='experience-container description border border-white border-2'>
            <h2>Experience:</h2>
            <h4>
                My journey started in January of 2022 when I met SoyHenry. After a few weeks
                learning about JavaScript I realeazed this was my dream job. I was so excited
                that I started developing projects by myself as the autodidact person I am; currently I have 3 projects:
                one with only Front-end and two Full-Stack, you can visit them <Link to='projects'
                className='text-decoration-none text-pink'>here</Link>; I
                graduated with the last project, the tech 'Unknown coder' e-commerce.<br/>
                <br/>
                Also I finished SoyHenry's Teacher Assistant programm, wich consists in coordinating a students group to achieve
                integration between them and other groups, guiding them in the first steps of this course, assisting the
                pair programming and promoting group colaboration and finally proposing ideas to improve SoyHenry's
                bootcamp processes.
            </h4>
            <br/>
            <h4>Languages, frameworks and technologies I've learned until now:
                <br/>
                JavaScript, HTML, CSS, React.js, Redux, Node.js, Express.js, SQL, Sequelize, Chakra, Bootstrap and
                Tailwind.
            </h4>
                {logos.map(logo => {return (
                    <img src ={logo} alt='logo' key={logo}/>
                )})}
        </div>
    )
}
import React from 'react';
import jsLogo from '../Images/icons8-javascript-logo-50.png';
import cssLogo from '../Images/icons8-css3-50.png';
import htmlLogo from '../Images/icons8-html-5-50.png';
import reactLogo from '../Images/icons8-react-native-50.png';
import reduxLogo from '../Images/icons8-redux-50.png';
import nodeLogo from '../Images/icons8-node-js-32.png';
import databaseLogo from '../Images/icons8-database-50.png';

export default function Experience () {
    return (
        <div className='experience-container description'>
            <h2>Experience:</h2>
            <br/>
            <h5>My journey in programming started in January of 2022 when I met SoyHenry. After a few weeks
            learning about JavaScript and HTML I realeazed this was my dream job. I was so excited
            that I started developing projects by myself as the autodidact person I am; currently I have 2 projects:
            one with only front end and the other one with front-end and back-end.
            Now I'm going through SoyHenry's last step: The final project, wich is about developing a SPA e-commerce,
            with this one (hopefully) I'm finishing this Full-Stack Developing course. <br/>
            <br/>
            Also I was selected as a Teacher Assistant, wich consists in coordinating a students group to achieve
            integration between them and other groups, guiding them in the first steps of this course, assisting the
            pair programming and promoting group colaboration and finally proposing ideas to improve SoyHenry's
            bootcamp processes.
            </h5>
            <br/>
            <h5>Languages, frameworks and libraries I've learned:
                JavaScript,
                HTML,
                CSS,
                React.js,
                Redux,
                Node.js,
                Express.js,
                SQL and
                Sequelize.
            </h5>
                <img src ={jsLogo} alt='jslogo' />
                <img src ={htmlLogo} alt='htmllogo' />
                <img src ={cssLogo} alt='csslogo' />
                <img src ={reactLogo} alt='reactlogo' />
                <img src ={reduxLogo} alt='reduxlogo' />
                <img src ={nodeLogo} alt='nodelogo' />
                <img src ={databaseLogo} alt='databaselogo' />
        </div>
    )
}
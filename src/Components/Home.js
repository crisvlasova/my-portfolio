import React from 'react';
import photo from '../Images/fotoPerfilIa.png'
import '../StyleSheets/Home.css'
import jsLogo from '../Images/icons8-javascript-logo-50.png'
import cssLogo from '../Images/icons8-css3-50.png'
import htmlLogo from '../Images/icons8-html-5-50.png'
import reactLogo from '../Images/icons8-react-native-50.png'
import reduxLogo from '../Images/icons8-redux-50.png'
import nodeLogo from '../Images/icons8-node-js-32.png'
import databaseLogo from '../Images/icons8-database-50.png'
import tailwind from '../Images/tailwind.png'
import bootstrap from '../Images/bootstrap.png'
import downloadCv from '../Images/Cristina Vlassov EN.pdf'
<<<<<<< HEAD
import downloadLetter from '../Images/Cristina Vlassov EN.pdf'
=======
import coverLetter from '../Images/Cover letter EN.pdf'
>>>>>>> second-commit
import linkedinLogo from '../Images/icons8-linkedin-circled-30.png';
import githubLogo from '../Images/icons8-github-24.png'
import gmailLogo from '../Images/icons8-gmail-32.png'


export default function Home () {

    let links = [
        {   href: 'https://www.linkedin.com/in/cristina-mikaela-vlassov-rodiguina-42a0a1236/',
            name:'Linkedin',
            src: linkedinLogo
        },   
        {   href: 'https://github.com/crisvlasova',
            name:'Github',
            src: githubLogo
        },
        {   href: 'mailto:vlasovacristina@gmail.com',
            name:'Gmail',
            src: gmailLogo
        }
    ]
    let logos = [jsLogo, htmlLogo, cssLogo, reactLogo, reduxLogo, nodeLogo, databaseLogo, tailwind, bootstrap]

    return (
        <div className='home-container'>
            <img className='profile-photo' src={photo} alt='profile-photo'/>
            <div className='presentation-container'>
                <h1>Hi, I'm Cristina Vlassov</h1>
                <h4>I'm a Junior Full-Stack Developer</h4>
                <a href={coverLetter} target="_blank" rel="noopener noreferrer"><button class='border border-0 rounded py-1 px-3'>Open my Cover Letter</button></a>
                <a href={downloadCv} target="_blank" rel="noopener noreferrer"><button class='border border-0 rounded py-1 px-3'>Open my CV</button> </a>
                <div className='contact'>
                    {links.map(link => {return (
                        <a href={link.href} key={link.name} class="anchor" target='_blank' rel='noopener noreferrer'>
                            <img src={link.src} alt={link.name}/>
                            {link.name}
                        </a>
                    )})}
                </div>

            </div>
            <div className='studied-techs'>
                {logos.map(logo => {return (
                    <img src ={logo} alt='logo' key={logo}/>
                )})}
            </div>
        </div>
    )
}
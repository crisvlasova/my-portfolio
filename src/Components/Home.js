import React from 'react';
import photo from '../Images/profile-photo2.png'
import '../StyleSheets/Home.css'
import jsLogo from '../Images/icons8-javascript-logo-50.png'
import cssLogo from '../Images/icons8-css3-50.png'
import htmlLogo from '../Images/icons8-html-5-50.png'
import reactLogo from '../Images/icons8-react-native-50.png'
import reduxLogo from '../Images/icons8-redux-50.png'
import nodeLogo from '../Images/icons8-node-js-32.png'
import databaseLogo from '../Images/icons8-database-50.png'
import downloadLogo from '../Images/icons8-download2-24.png'
import downloadCv from '../Images/Cristina Vlassov En CV.pdf'
import linkedinLogo from '../Images/icons8-linkedin-circled-30.png';
import githubLogo from '../Images/icons8-github-24.png'
import gmailLogo from '../Images/icons8-gmail-32.png'


export default function Home () {
    return (
        <div className='home-container'>
            <img className='profile-photo' src={photo} alt='profile-photo'/>
            <div className='presentation-container'>
                <h1>Hi, I'm Cristina Vlassov</h1>
                <h4>I'm a Junior Full-Stack Developer</h4>

                <a href={downloadCv} download><button>Download my cv <img src={downloadLogo} alt='downloadlogo'/></button></a>
                <br/>
                <br/>

                <div className='contact'>
                    <a href='https://www.linkedin.com/in/cristina-mikaela-vlassov-rodiguina-42a0a1236/'>
                        <img src={linkedinLogo} alt='linkedin'/>
                        Linkedin
                    </a>
                <br/>
                    <a href='https://github.com/crisvlasova'>
                        <img src={githubLogo} alt='github'/>
                        Github
                    </a>
                <br/>
                    <a href='mailto:vlasovacristina@gmail.com'>
                        <img src={gmailLogo} alt='gmail'/>
                        Gmail
                    </a>
                </div>

            </div>
            <div className='studied-techs'>
                <img src ={jsLogo} alt='jslogo' />
                <img src ={htmlLogo} alt='htmllogo' />
                <img src ={cssLogo} alt='csslogo' />
                <img src ={reactLogo} alt='reactlogo' />
                <img src ={reduxLogo} alt='reduxlogo' />
                <img src ={nodeLogo} alt='nodelogo' />
                <img src ={databaseLogo} alt='databaselogo' />
            </div>
        </div>
    )
}
import React from 'react';
import '../StyleSheets/AboutMe.css'
import photo from '../Images/barman2.png';

export default function AboutMe () {
    return (
        <div className='about-me-presentation description'>
            <div>
                <h2>About me:</h2>
                <h4>I'm Cristina, I'm 20 years old and currently working as a Makeup Artist, Bartender and studying
                to be a Full-Stack Developer.
                <br/>
                I am a hard working and versatile person, being capable of adapting to any environment.
                I am a fastlearner, always willing to learn new skills.
                I am friendly, helpful and polite, have a good sense of humour. I am able to work in busy
                environments and solving problems in a fast and creative way.
                </h4>
            </div>
            <div className='about-me-image-container'>
                <img src={photo} alt='barman' className='about-me-photo'/>
            </div>
        </div>
    )
}
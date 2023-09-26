import React from 'react';
import '../StyleSheets/AboutMe.css'
import photo from '../Images/barman2.png';

export default function AboutMe () {
    return (
        <div className='about-me-presentation description border border-0 rounded-2'>
            <div>
                <h2>About me:</h2>
                <h4>I'm Cristina, I'm 21 years old, living in Buenos Aires, Argentina, and currently working as Full-stack developer in Web Line Service.
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
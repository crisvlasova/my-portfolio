import React from 'react';
import breakingbad from '../Images/breaking-bad-app.png';
import dogapp from '../Images/live-search.png';

import '../StyleSheets/Projects.css'

export default function Projects () {
    return (
        <div>
            <div className='description projects-container'>
                <h2>Front-end app:</h2>
                <br/>
                <img src={breakingbad} alt='breaking-bad' className='breaking-bad-image'/>
                <br/>
                <h5><a href='https://breaking-bad-app-indol.vercel.app/' className='link-to'>Click to visit page</a></h5>
                <br/>
                <h5><a href='https://github.com/crisvlasova/Breaking-Bad-App' className='link-to'>Click to visit repository</a></h5>
            </div>
        <div>
        </div>
            <div className='description projects-container'>
                <h2>Front-end and Back-end app:</h2>
                <br/>
                <img src={dogapp} alt='dog-app' className='breaking-bad-image'/>
                <br/>
                <h5><a href='https://github.com/crisvlasova/Dog-App' className='link-to'>Click to visit repository</a></h5>
            </div>
        </div>
    )
}
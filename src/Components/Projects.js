import React from 'react';
import dogImage from '../Images/dogImage.png';
import breakingbad from '../Images/breakingbad.png';

import '../StyleSheets/Projects.css'

export default function Projects () {
    return (
        <div className='all-projects-container'>
            <div className='description projects-container border border-white border-2'>
                <h2>Front-end app:</h2>
                <p>
                    This app was made with <a href='https://breakingbadapi.com/'>Breaking Bad Api</a> where
                    we can see all the characters and their details. For more information visit
                    the page or the repository.
                </p>
                <img src={breakingbad} alt='breaking-bad' className='breaking-bad-image'/>
                <br/>
                <h5><a href='https://breaking-bad-app-indol.vercel.app/' className='link-to' target='_blank' rel='noopener'>Visit page</a></h5>
                <br/>
                <h5><a href='https://github.com/crisvlasova/Breaking-Bad-App' className='link-to' target='_blank' rel='noopener'>Visit repository</a></h5>
            </div>
        <div>
        </div>
            <div className='description projects-container border border-white border-2'>
                <h2>Full-Stack app:</h2>
                <p>
                    This app is was made with <a href='https://thedogapi.com/'>The dog api</a>, here we
                    can se all types of dogs and their breeds, including the create dog option. Other interesting
                    things of this page is the live search in navbar and temperament searching bar when creating a dog.
                    There are filters by race, weight and more! Visit the repository for more information.
                </p>
                <img src={dogImage} alt='dog-app' className='breaking-bad-image'/>
                <br/>
                <h5><a href='https://github.com/crisvlasova/Dog-App' className='link-to' target='_blank' rel='noopener'>Visit repository</a></h5>
            </div>
        </div>
    )
}
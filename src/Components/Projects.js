import React from 'react';
import dogImage from '../Images/dogImage.png';
import breakingbad from '../Images/breakingbad.png';
import pf from '../Images/pf.png'
import partyRoom from '../Images/salon-detalle.png'
import '../StyleSheets/Projects.css'

export default function Projects() {

    return (
        <div className='all-projects-container'>
            <div className='description projects-container border border-0 rounded-2'>
                <h2>Front-end app:</h2>
                <p>
                    This app was made with <a href='https://breakingbadapi.com/'>Breaking Bad Api</a> where
                    we can see all the characters and their details. For more information visit
                    the page or the repository.
                </p>
                <img src={breakingbad} alt='breaking-bad' className='breaking-bad-image rounded-2' />
                <br />
                <h5><a href='https://breaking-bad-app-indol.vercel.app/' className='link-to text-black text-decoration-none' target='_blank' rel='noopener'>Visit page</a></h5>
                <br />
                <h5><a href='https://github.com/crisvlasova/Breaking-Bad-App' className='link-to text-black text-decoration-none' target='_blank' rel='noopener'>Visit repository</a></h5>
            </div>
            <div className='description projects-container border border-0 rounded-2'>
                <h2>Full-Stack app:</h2>
                <p>
                    This app is was made with <a href='https://thedogapi.com/'>The dog api</a>, here we
                    can se all types of dogs and their breeds, including the create dog option. Other interesting
                    things of this page is the live search in navbar and temperament searching bar when creating a dog.
                    There are filters by race, weight and more! Visit the repository for more information.
                </p>
                <img src={dogImage} alt='dog-app' className='breaking-bad-image rounded-2' />
                <br />
                <h5><a href='https://github.com/crisvlasova/Dog-App' className='link-to text-black text-decoration-none' target='_blank' rel='noopener'>Visit repository</a></h5>
            </div>
            <div className='description projects-container border border-0 rounded-2'>
                <h2>Full-Stack app:</h2>
                <p>
                    This is my final project from Henry's ootcamp, is a tech e-commerce. I led the Front-end part developing
                    the design of the page, responsive and authentication with Auth0.
                    The used technologies were JavaScript, React, Redux, Bootstrap, CSS, HTML, Node.js, Express.js, Sequelize
                    and SQL
                </p>
                <img src={pf} alt='pf' className='breaking-bad-image rounded-2' />
                <br />
                <h5><a href='https://github.com/FranciscoMastropierro/PG-SoyHenry' className='link-to text-black text-decoration-none' target='_blank' rel='noopener'>Visit repository</a></h5>
                <br />
                <h5><a href='https://unknowncoder.vercel.app/' className='link-to text-black text-decoration-none' target='_blank' rel='noopener'>Visit page</a></h5>
            </div>
            <div className='description projects-container border border-0 rounded-2'>
                <h2>Front-End app:</h2>
                <p>
                    This project is about a party-room located in Buenos Aires, where is a breve description about the environment, their services and how to contact them to book a date.
                </p>
                <img src={partyRoom} alt='party room image' className='breaking-bad-image rounded-2' />
                <br />
                <h5><a href='https://github.com/crisvlasova/matiss' className='link-to text-black text-decoration-none' target='_blank' rel='noopener'>Visit repository</a></h5>
                <br />
                <h5><a href='https://matiss.vercel.app/' className='link-to text-black text-decoration-none' target='_blank' rel='noopener'>Visit page</a></h5>
            </div>
        </div>
    )
}
import React from 'react';
import assisiImage from '../Images/assisi.png';
import pf from '../Images/pf.png'
import partyRoom from '../Images/salon-detalle.png'
import '../StyleSheets/Projects.css'

export default function Projects() {

    return (
        <div className='all-projects-container'>
            <div className='description projects-container border border-0 rounded-2'>
                <h2>Front-End app:</h2>
                <p>
                    This project is about a party-room located in Buenos Aires, where is a breve description about the environment, their services and how to contact them to book a date.
                </p>
                <img src={partyRoom} alt='party room image' className='breaking-bad-image rounded-2' />
                <br />
                <div className ='link-container'>
                    <h5><a href='https://github.com/crisvlasova/matiss' className='link-to text-white text-decoration-none' target='_blank' rel='noopener'>Visit repository</a></h5>
                    <br />
                    <h5><a href='https://matiss.vercel.app/' className='link-to text-white text-decoration-none' target='_blank' rel='noopener'>Visit WEB site</a></h5>
                    </div>
            </div>
            <div className='description projects-container border border-0 rounded-2'>
                <h2>ASSISI WEB site:</h2>
                <p>
                    This front-end app was developed for the company ASSISI, wich is a plain and static page.
                </p>
                <img src={assisiImage} alt='assisi' className='breaking-bad-image rounded-2' />
                <br/>
                <div className ='link-container'>
                    <h5><a href='http://www.assisi.com.ar/' className='link-to text-white text-decoration-none' target='_blank' rel='noopener'>Visit WEB site</a></h5>
                </div>
            </div>
            <div className='description projects-container border border-0 rounded-2'>
                <h2>Full Stack WEB site:</h2>
                <p>
                    This is my final project from Henry's bootcamp, is a tech e-commerce. I led the Front-end part developing
                    the design of the page, responsive and authentication with Auth0.
                    The used technologies were JavaScript, React, Redux, Bootstrap, CSS, HTML, Node.js, Express.js, Sequelize
                    and SQL.
                </p>
                <img src={pf} alt='pf' className='breaking-bad-image rounded-2' />
                <br />
                <div className ='link-container'>
                    <h5><a href='https://github.com/FranciscoMastropierro/PG-SoyHenry' className='link-to text-white text-decoration-none' target='_blank' rel='noopener'>Visit repository</a></h5>
                    <br />
                    <h5><a href='https://unknowncoder.vercel.app/' className='link-to text-white text-decoration-none' target='_blank' rel='noopener'>Visit page</a></h5>
                </div>
            </div>
        </div>
    )
}
import React from 'react';
import abeFlyer from '../Images/abe-banner.png';
import abappraBanner from '../Images/abappraBanner.png';
import abappraFlyer2 from '../Images/abappra2.png';
import abappraFlyer1 from '../Images/abappra1.png';
import '../StyleSheets/Projects.css'

export default function Projects() {

    return (
        <div className='all-projects-container'>
            <div className='description projects-container border border-0 rounded-2'>
                <h2>ABAPPRA Banner</h2>
                <p>
                    Click the image to see whole picture.
                </p>
                <div class='project-container-div'> 
                    <a href='https://abappra.org.ar/vista/img/head/imagenSlider14.jpg' alt='abappraBanner' rel='noopener noreferer' target='_blank'>
                        <img src={abappraBanner} alt='abappraBanner' className='breaking-bad-image rounded-2' />
                    </a>
                </div>
            </div>

            <div className='description projects-container border border-0 rounded-2'>
                <h2>ABE E-mail Flyer</h2>
                <p>
                    Click the image to see whole flyer.
                </p>
                <div class='project-container-div'>
                    <a href='http://abe.org.ar/newsletter/2023/gestion-y-privacidad-de-datos/index.html' alt='abeflyer' rel='noopener noreferer' target='_blank'>
                        <img src={abeFlyer} alt='abeFlyer' className='breaking-bad-image rounded-2' />
                    </a>
                </div>
            </div>

            <div className='description projects-container border border-0 rounded-2'>
                <h2>ABAPPRA E-mail Flyer 1</h2>
                <p>
                    Click the image to see whole flyer.
                </p>
                <div class='project-container-div'>
                    <a href='https://abappra.org.ar/vista/newsletter/2023/ciclo-de-charlas-abiertas-de-FinTech-2/index.html' alt='abappraflyer1' rel='noopener noreferer' target='_blank'>
                        <img src={abappraFlyer1} alt='abappraFlyer1' className='breaking-bad-image rounded-2' />
                    </a>
                </div>
            </div>

            <div className='description projects-container border border-0 rounded-2'>
                <h2>ABAPPRA E-mail Flyer 2</h2>
                <p>
                    Click the image to see whole flyer.
                </p>
                <div class='project-container-div'>
                    <a href='https://abappra.org.ar/vista/newsletter/2023/cbdc-monedas-digitales-de-bancos/index.html' alt='abappraflyer2' rel='noopener noreferer' target='_blank'>
                        <img src={abappraFlyer2} alt='abappraFlyer2' className='breaking-bad-image rounded-2' />
                    </a>
                </div>
            </div>
        </div>
    )
}
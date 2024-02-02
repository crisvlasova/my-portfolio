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
                <div className='project-container-div'> 
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
                <div className='project-container-div'>
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
                <div className='project-container-div'>
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
                <div className='project-container-div'>
                    <a href='https://abappra.org.ar/vista/newsletter/2023/cbdc-monedas-digitales-de-bancos/index.html' alt='abappraflyer2' rel='noopener noreferer' target='_blank'>
                        <img src={abappraFlyer2} alt='abappraFlyer2' className='breaking-bad-image rounded-2' />
                    </a>
                </div>
            </div>
            <div className='description projects-container border border-0 rounded-2'>
                <h2>MADEM S.A. WEB site:</h2>
                <p>
                Madem S.A's website, a platform for an Argentine metalworking company. This site, developed and designed by me for <a href="https://weblineservice.com.ar/" rel='noopener noreferer' target='_blank'>Webline Service</a>, is designed and developed to facilitate easy communication, product inquiries, and a detailed view of product images. Explore our offerings and learn more about the company's background efficiently.
                </p>
                <img src={madem} alt='madem' className='breaking-bad-image rounded-2' />
                <br />
                <div className ='link-container'>
                    <h5><a href='https://github.com/crisvlasova/MADEM' className='link-to text-white text-decoration-none' target='_blank' rel='noopener'>Visit repository</a></h5>
                    <br />
                    <h5><a href='https://madem.com.ar' className='link-to text-white text-decoration-none' target='_blank' rel='noopener'>Visit page</a></h5>
                </div>
            </div>
        </div>
    )
}
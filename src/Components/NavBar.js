import React, { useState } from 'react';
import C from '../Images/icons8-constellation2-64.png'
import { Link, useLocation } from 'react-router-dom';
import '../StyleSheets/NavBar.css'

export default function NavBar () {

    let loc = useLocation().pathname

    return (
        <div className='navbar-container'>
            <nav className="navbar">
                <div className="container-fluid">
                    <a className="navbar-brand">
                        <img src={C} className="d-inline-block align-text-top"/>
                    </a>
                </div>
            </nav>
            <div className='button-container'>
                <Link to='/'>
                    <button value='/' className={loc === '/'? 'in-path' : null}>Home</button>
                </Link>
                <Link to='/aboutme'>
                    <button value='/aboutme' className={loc === '/aboutme'? 'in-path' : null}>About me</button>
                </Link>
                <Link to='/experience'>
                    <button value='/experience' className={loc === '/experience'? 'in-path' : null}>Experience</button>
                </Link>
                <Link to='/projects'>
                    <button value='/projects' className={loc === '/projects'? 'in-path' : null}>Projects</button>
                </Link>

                {/* <button>EN</button>
                <button>ES</button> */}
            </div>
        </div>
    )
}
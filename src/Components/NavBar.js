import React, { useState } from 'react';
import C from '../Images/icons8-constellation2-64.png'
import { Link, useLocation } from 'react-router-dom';
import '../StyleSheets/NavBar.css'

export default function NavBar () {
    let [active, setActive] = useState('')

    return (
        <div className='navbar-container'>
            <nav className="navbar">
                <div className="container-fluid">
                    <a className="navbar-brand">
                        <img src={C} className="d-inline-block align-text-top"/>
                    </a>
                </div>
            </nav>
            <div>
                <Link to='/'>
                    <button value='/'>Home</button>
                </Link>
                <Link to='/aboutme'>
                    <button value='/aboutme'>About me</button>
                </Link>
                <Link to='/experience'>
                    <button value='/experience'>Experience</button>
                </Link>
                <Link to='/projects'>
                    <button value='/projects'>Projects</button>
                </Link>

                {/* <button>EN</button>
                <button>ES</button> */}
            </div>
        </div>
    )
}
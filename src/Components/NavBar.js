import React, { useState } from 'react';
import C from '../Images/icons8-constellation2-64.png'
import { Link, useLocation } from 'react-router-dom';
import menu from '../Images/icons8-menu-24.png';
import '../StyleSheets/NavBar.css';

export default function NavBar () {
    const [active, setActive] = useState(false)

    let loc = useLocation().pathname

    function toggleMenu () {
        if(active) {
            setActive(false)
        } else {
            setActive(true)
        }
    }

    let links = [
        {
            to: '/',
            name: 'Home'
        },
        {
            to: '/aboutme',
            name: 'About me'
        },
        {
            to: '/experience',
            name: 'Experience'
        },
        {
            to: '/projects',
            name: 'Projects'
        },
    ]

    return (
        <div className='navbar-menu-container'>
        <div className='navbar-container'>
            <img src={menu} alt='menu' className='menu-logo' onClick={toggleMenu}/>
            <nav className="navbar">
                <div className="container-fluid">
                    <a className="navbar-brand">
                        <img src={C} className="d-inline-block align-text-top"/>
                    </a>
                </div>
            </nav>

            <div className='button-container'>
                {links.map(link => {return (
                    <Link to={link.to}>
                        <button className={loc === link.to? 'in-path navbar-button border border-white border-2' :
                        'navbar-button border border-white border-2'}>
                            {link.name}
                        </button>
                    </Link>
                )})}
            </div>
        </div>
        {/* <div>
        <button className='btn btn-secondary dropdown-toggle'>Menu</button>
        </div> */}
        {/* <div className={!active === false? 'active-menu animate__animated animate__slideInDown' : 'non-active-menu'}>
        <Link to='/'>
            <li>Home</li>
        </Link>
        <Link to='/aboutme'>
            <li>About me</li>
        </Link>
        <Link to='/experience'>
            <li>Experience</li>
        </Link>
        <Link to='/projects'>
            <li>Projects</li>
        </Link>
        </div> */}
        </div>
    )
}
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
                <Link to='/'>
                    <button className={loc === '/'? 'in-path navbar-button' : 'navbar-button'}>Home</button>
                </Link>
                <Link to='/aboutme'>
                    <button className={loc === '/aboutme'? 'in-path navbar-button' : 'navbar-button'}>About me</button>
                </Link>
                <Link to='/experience'>
                    <button className={loc === '/experience'? 'in-path navbar-button' : 'navbar-button'}>Experience</button>
                </Link>
                <Link to='/projects'>
                    <button className={loc === '/projects'? 'in-path navbar-button' : 'navbar-button'}>Projects</button>
                </Link>
                {/* <button>EN</button>
                <button>ES</button> */}
            </div>
        </div>
        <div className={!active === false? 'active-menu animate__animated animate__slideInDown' : 'non-active-menu'}>
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
        </div>
        </div>
    )
}
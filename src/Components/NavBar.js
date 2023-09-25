import React, { useState } from 'react';
import C from '../Images/icons8-constellation2-64.png'
import { Link, useLocation } from 'react-router-dom';
import menu from '../Images/icons8-menu-24.png';
import '../StyleSheets/NavBar.css';

export default function NavBar() {
    let loc = useLocation().pathname
    let [active, setActive] = useState()

    function handleClick() {
        if (active) return setActive(false)
        return setActive(true)
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
        {
            to: '/contact',
            name: 'Get in touch'
        },
    ]

    let navbutton = 'navbar-button border border-0 rounded rounded py-1 px-2'

    return (
        <div className='navbar-menu-container'>
            <div className=' d-flex flex-row justify-content-center align-items-center position-relative'>

                <nav className="navbar">
                    <div className="container-fluid">
                        <a className="navbar-brand">
                            <img src={C} className="d-inline-block align-text-top" />
                        </a>
                    </div>
                </nav>

                <div className='responsive-menu'>
                    <button onClick={handleClick} class='menu-img bg-transparent border transparent border-0  text-white'>
                        <img src={menu}></img>
                    </button>
                    <div className={active ? 'responsive-menu-div flex-column position-absolute p-3' : 'd-none'}>
                        {links.map(link => {
                            return (
                                <Link to={link.to} className={loc === link.to ? 'in-path' : null}>
                                    <button onClick={handleClick} class='menu-button bg-transparent'>
                                        {link.name}
                                    </button>
                                </Link>
                            )
                        })}
                    </div>
                </div>

                <div className='button-container'>
                    {links.map(link => {
                        return (
                            <Link to={link.to}>
                                <button className={loc === link.to ? `in-path ${navbutton}` :
                                    navbutton}>
                                    {link.name}
                                </button>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
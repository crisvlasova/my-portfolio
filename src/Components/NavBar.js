import React from 'react';
import C from '../Images/icons8-constellation2-64.png'
import '../StyleSheets/NavBar.css'

export default function NavBar () {
    return (
        <div className='navbar-container'>
            <nav class="navbar">
                <div class="container-fluid">
                    <a class="navbar-brand">
                        <img src={C} class="d-inline-block align-text-top"/>
                    </a>
                </div>
            </nav>
            <div>
                <button>Home</button>
                <button>About me</button>
                <button>Experience</button>
                <button>Contact</button>
                <button>Projects</button>

                <button>EN</button>
                <button>ES</button>
            </div>
        </div>
    )
}
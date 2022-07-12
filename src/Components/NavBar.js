import React, { useRef } from 'react';
import C from '../Images/icons8-constellation2-64.png'
import { Link } from 'react-router-dom';
import '../StyleSheets/NavBar.css'

export default function NavBar () {

    let ref = useRef(null)

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
                <Link to='/'><button>Home</button></Link>
                <Link to='/aboutme'><button>About me</button></Link>
                <Link to='/experience'><button>Experience</button></Link>
                <Link to='/projects'><button>Projects</button></Link>

                {/* <button>EN</button>
                <button>ES</button> */}
            </div>
        </div>
    )
}
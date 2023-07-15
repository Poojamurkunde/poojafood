import React from 'react'
import { Link } from 'react-router-dom'



export default function Header() {
    return (
        <div>
            <header id="header" class="header fixed-top d-flex align-items-center">
                <div class="container d-flex align-items-center justify-content-between">

                    <Link to={'/'}>

                        <a href="index.html" class="logo d-flex align-items-center me-auto me-lg-0">
                            <h1>Yummy<span>.</span></h1>
                        </a></Link>

                    <nav id="" class="navbar">
                        <ul>
                            <Link to={'/'}><a>Home</a></Link>
                            <Link to={'/about'}><a>About</a></Link>
                            <Link to={'/menu'}><a>Menu</a></Link>
                            <Link to={'/chefs'}><a>Chefs</a></Link>
                            <Link to={'/contact'}><a>Contact</a></Link>
                        </ul>
                    </nav>



                </div>
            </header>
        </div>
    )
}

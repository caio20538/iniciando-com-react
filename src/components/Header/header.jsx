import React from 'react'
import logoIgm from "../../assets/images/logo.jpg";
import './style.css'

export function Header(){
    return(
        <header>
            <nav id = "navbar">
                <div className="nav-brand">
                    <img src={logoIgm} alt="" />
                    <h1>Space Flight News</h1>
                </div>

                <ul className="nav-list">
                    <li><a href="/">home</a></li>

                    <li><a href="/">Trending</a></li>

                    <li><a href="/">Categories</a></li>

                    <li><a href="/">About us</a></li>
                </ul>
            </nav>
    </header>
    );
}
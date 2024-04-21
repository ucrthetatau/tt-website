import React from 'react';
import '../styles/navbar.css'
import Logo from '../static/Logo.PNG'
import { NavLink } from 'react-router-dom';


const Navbar = () => (
    <div class="header">
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>  
        
        <NavLink to="/" id="main" className={({isActive}) => isActive ? "active" : ""} > 
            <headerTitle>
                <img src={Logo} class="crestImage"/>
                <div id="title">
                    <h1>Theta Tau</h1>
                    <h2>Sigma Delta Chapter</h2>
                </div>
            </headerTitle>
        </NavLink>

        <input type='checkbox' id="check" />
        <label for='check' class="icons">
            <i class='bx bx-menu' id="open"></i>
            <i class='bx bx-x' id="close"></i>
        </label> 

        <headerSubtitle>
            <NavLink
                to="/"
                className={({isActive}) => isActive ? "active" : ""} > 
                Home
            </NavLink>
            <NavLink
                to="/About"
                className={({isActive}) => isActive ? "active" : ""} > 
                About
            </NavLink>
            <NavLink
                to="/Rush"
                className={({isActive}) => isActive ? "active" : ""} > 
                Rush
            </NavLink>
            <NavLink
                to="/Members"
                className={({isActive}) => isActive ? "active" : ""} > 
                Members
            </NavLink>
        </headerSubtitle>
    </div>
);

  export default Navbar;
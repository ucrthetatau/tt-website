import React from 'react';
import styles from '../styles/navbar.module.css'
import NavLogo from '../static/NavLogo.png'
import { NavLink } from 'react-router-dom';

const Navbar = () => (
    <header className={styles.header}>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>  
        
        <NavLink to="/" className={styles.main}>
            <img src={NavLogo} alt="Theta Tau Crest" className={styles.navLogo}/>
        </NavLink>

        <input type='checkbox' id="check" className={styles.menuCheck}/>
        <label htmlFor='check' className={styles.icons}>
            <i className='bx bx-menu' id="open"></i>
            <i className='bx bx-x' id="close"></i>
        </label> 

        <div className={styles.nav}>
            <NavLink to="/" className={({isActive}) => isActive ? `${styles.link} ${styles.active}` : styles.link}> 
                Home
            </NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
                About
            </NavLink>
            <NavLink to="/rush" className={({isActive}) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
                Rush
            </NavLink>
            <NavLink to="/brothers" className={({isActive}) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
                Brothers
            </NavLink>
        </div>
    </header>
);

export default Navbar;
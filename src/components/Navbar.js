import React from 'react';
import styles from '../styles/navbar.module.css'
import NavLogo from '../static/NavLogo.png'
import { NavLink } from 'react-router-dom';

function Navbar() {
    
    const closeMenu = () => {
        document.getElementById('check').checked = false;
    };

    return (
        <header className={styles.header}>
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>  
            
            <NavLink to="/" className={styles.main} onClick={closeMenu}>
                <img src={NavLogo} alt="Theta Tau Crest" className={styles.navLogo}/>
            </NavLink>

            <input type='checkbox' className={styles.toggle} id="check"/>
            <label htmlFor='check' className={styles.icons}>
                <i className={`bx bx-menu ${styles.open}`}></i>
                <i className={`bx bx-x ${styles.close}`}></i>
            </label> 

            <div className={styles.nav}>
                <NavLink to="/" className={({isActive}) => isActive ? `${styles.link} ${styles.active}` : styles.link} onClick={closeMenu}> 
                    Home
                </NavLink>
                <NavLink to="/about" className={({isActive}) => isActive ? `${styles.link} ${styles.active}` : styles.link} onClick={closeMenu}>
                    About
                </NavLink>
                <NavLink to="/rush" className={({isActive}) => isActive ? `${styles.link} ${styles.active}` : styles.link} onClick={closeMenu}>
                    Rush
                </NavLink>
                <NavLink to="/brothers" className={({isActive}) => isActive ? `${styles.link} ${styles.active}` : styles.link} onClick={closeMenu}>
                    Brothers
                </NavLink>
            </div>
        </header>
    );
};

export default Navbar;
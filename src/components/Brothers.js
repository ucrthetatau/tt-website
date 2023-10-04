import React from 'react';
import "../styles/brothers.css";
import { NavLink, Outlet } from 'react-router-dom';

const Brothers = () => {
    return (
        <>
            <nav>
                <NavLink to="members" className={({isActive}) => isActive ? "active" : ""}>
                    Members
                </NavLink>
                <NavLink to="officers" className={({isActive}) => isActive ? "active" : ""}> 
                    Officers
                </NavLink>
            </nav>
            {/* <div id="container">
                <div id="disclaimer">
                    This page is currently under construction.
                </div>
            </div> */}
            
            
            <Outlet />
        </>
      );
};

export default Brothers; 
import React from 'react';
import "../styles/brothers.css";
// import { NavLink, Outlet } from 'react-router-dom';
import { brothers, officers, classes, classMap, yearMap } from './QueryDB.js'
import { useState, useEffect } from 'react';

// console.log(brothers)
// console.log(officers)
// console.log(classes)
// console.log(classMap)
// console.log(yearMap)
// console.log("hi")

const Brothers = () => {
        return (
            <>
                 
            </>
        )
        // <div id="container">
        //     {classes.map(currentClass => (
        //         <div class="group">
        //             <div class="className">{currentClass}</div>
        //             {classMap[currentClass]?.map((memberId) => (
        //                 <div class="member">
        //                     <img class="photo" src={members[memberId].Photo}></img>
        //                     <div class="name">{members[memberId].Name}</div>
        //                     <div class="major">{members[memberId].Major}</div>
        //                     <div class="year">{members[memberId].GraduatingClass}</div>
        //                 </div>
        //             ))}
        //         </div>
        //     ))}
        // </div>
};

export default Brothers;
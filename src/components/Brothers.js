import React from 'react';
import "../styles/brothers.css";
// import { NavLink, Outlet } from 'react-router-dom';
import { brothers, officers, classes, classMap, yearMap } from './QueryDB.js'
import { useState, useEffect } from 'react';
import Footer from "./Footer.js";

// console.log(brothers)
// console.log(officers)
// console.log(classes)
// console.log(classMap)
// console.log(yearMap)
// console.log("hi")
import BrotherCard from "./BrotherCard.js"

const Brothers = () => {

    // const [pageFilter, setPageFilter] = useState("Class")

    // function changeFilter(event) {
    //     const filters = document.querySelectorAll(".filter");
    //     filters.forEach((filter) => {
    //       filter.classList.remove("active");
    //     });
    //     event.target.classList.add("active");
    //     setPageFilter(event.target.innerHTML);
    // }

    return (
        <div id="container">
            {classes.map(currentClass => (
                <div class="classGroup">
                    <h1 class="className">{currentClass}</h1>
                        <div class="classMembers">
                            {classMap[currentClass]?.map((brotherId) => (
                                <BrotherCard brotherId={brotherId}></BrotherCard>
                            ))}
                        </div>
                </div>
            ))}
        </div>
        // <div class="brothers -mt-20 h-full w-full">
        //     <div className="banner h-screen w-screen flex justify-center items-center bg-cover bg-center bg-fixed">
        //         <div className="bannerText absolute text-center">
        //         <h1>OUR BROTHERS</h1>
        //         <h3>of the Epsilon Delta Chapter</h3>
        //         </div>
        //     </div>

        //     <div class="content w-full">
        //         <div class="filters flex flex-row items-center justify-center">
        //             <h1 class="active filter text-center font-extrabold cursor-pointer" onClick={changeFilter}>
        //                 Class
        //             </h1>
        //             <h1 class="filter text-center font-extrabold cursor-pointer" onClick={changeFilter}>
        //                 Officers
        //             </h1>
        //             <h1 class="filter text-center font-extrabold cursor-pointer" onClick={changeFilter}>
        //                 Name
        //             </h1>
        //             <h1 class="filter text-center font-extrabold cursor-pointer" onClick={changeFilter}>
        //                 Year
        //             </h1>
        //         </div>

        //         <div class={`w-full flex flex-col items-center justify-center ${pageFilter === "Class" ? "" : "hidden"}`} id="class">
        //             <BrotherFilter category="Class"></BrotherFilter>
        //         </div>
        //         <div class={`w-full flex flex-col items-center justify-center ${pageFilter === "Officers" ? "" : "hidden"}`} id="officers">
        //             <BrotherFilter category="Officers"></BrotherFilter>
        //         </div>
        //         <div class={`w-full flex flex-col items-center justify-center ${pageFilter === "Name" ? "" : "hidden"}`} id="name">
        //             <BrotherFilter category="Name"></BrotherFilter>
        //         </div>
        //         <div class={`w-full flex flex-col items-center justify-center ${pageFilter === "Year" ? "" : "hidden"}`} id="year">
        //             <BrotherFilter category="Year"></BrotherFilter>
        //         </div> 
        //     </div>
        // </div>
    );
};

export default Brothers;
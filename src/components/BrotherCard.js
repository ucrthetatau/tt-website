import React from 'react';
import "../styles/brothercard.css";
import { brothers, officers, classes, classMap, yearMap } from './QueryDB.js'
import { useState, useEffect } from 'react';

const BrotherCard = ({ brotherId }) => {
    const name = brothers[brotherId]["Name"]
    const greek = brothers[brotherId]["Class"]
    const major = brothers[brotherId]["Major"]
    const year = brothers[brotherId]["GraduatingClass"]
    const pic = brothers[brotherId]["Photo"]

    function flipCard(event) {
        event.target.classList.toggle("flipCard");        
    }

    return (
        <div class="brotherProfile">
            <div class="brotherCard" >
                <div class="flip" onClick={flipCard} >
                    <div class="front" >
                        <img class="headshot" src={pic}/>
                    </div>
                    <div class="back">
                        <div class="details">
                            <h2>Class</h2>
                            <h3>{greek}</h3>
                            <h2>Major</h2>
                            <h3>{major}</h3>
                            <h2>Year</h2>
                            <h3>{year}</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div class="info">
                <h1>{name}</h1>
            </div>
        </div>
    )
};

export default BrotherCard;
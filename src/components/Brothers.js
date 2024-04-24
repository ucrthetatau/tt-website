import React from 'react';
import "../styles/brothers.css";
import { brothers, officers, classes, classMap, yearMap } from '../firebase/QueryDB.js'
import BrotherCard from "./BrotherCard.js"

const Brothers = () => {
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
    );
};

export default Brothers;
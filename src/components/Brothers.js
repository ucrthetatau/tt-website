import React from 'react';
import styles from "../styles/brothers.module.css";
import { classes, classMap } from '../firebase/QueryDB.js'
import BrotherCard from "./BrotherCard.js"

const Brothers = () => {
    return (
        <div id={styles.container}>
            {classes.map(currentClass => (
                <div className={styles.classGroup}>
                    <h1 className={styles.className}>{currentClass}</h1>
                        <div className={styles.classMembers}>
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
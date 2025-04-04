import React from 'react';
import styles from "../styles/brothercard.module.css";
import { brothers } from '../firebase/QueryDB.js'

const BrotherCard = ({ brotherId }) => {

    if (!brothers[brotherId]) {
        return null;
    }

    const name = brothers[brotherId]["Name"]
    const greek = brothers[brotherId]["Class"]
    const major = brothers[brotherId]["Major"]
    const year = brothers[brotherId]["Year"]
    const pic = brothers[brotherId]["Photo"]
    const imagePath = require(`../data/headshots/${pic}`);

    function flipCard(event) {
        event.target.classList.toggle(styles.flipCard);        
    }

    return (
        <div className={styles.brotherProfile}>
            <div className={styles.brotherCard} >
                <div className={styles.flip} onClick={flipCard} >
                    <div className={styles.front} >
                        <img className={styles.headshot} src={imagePath} alt={name} loading="lazy" />
                    </div>
                    <div className={styles.back}>
                        <div className={styles.details}>
                            <h2>Class</h2>
                            <h3>{greek}</h3>
                            <h2>Major</h2>
                            <h3>{major}</h3>
                            <h2>Graduating Class</h2>
                            <h3>{year}</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.info}>
                <h1>{name}</h1>
            </div>
        </div>
    )
}

export default BrotherCard;
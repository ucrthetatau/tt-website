import React from 'react'
import s23 from '../static/S23graphic1.jpg'
import '../styles/about.css'

const About = () => {
    return (
        <>
        <div class = "about-container">
            <div class = "about-floating1">
                ABOUT ABOUT ABOUT
            </div>
            <div class = "about-floating2">
                ABOUT ABOUT ABOUT
            </div>
            <div class = "head-info">
                <img src={s23} class="about-pic"></img>
                <h1>About Theta Tau</h1>
            </div>
            <div class = "pic-info">
                Winter 2023
            </div>
            <div class = "about-text">
                <p>Theta Tau was originally founded as the "Society of Hammer and Tongs" on October 15, 1904 at the University of Minnesota by four engineers: Erich J. Schrader, Elwin L. Vinal, William M. Lewis, and Isaac B. Hanks. At the fraternity's first national convention in 1911, the name was changed to Theta Tau, and the fraternity opened up to include all departments of engineering. Since then, approximately 30,000 engineering students have been initiated.</p>
                <h2>Mission Statement</h2>
                <p>The purpose of Theta Tau is to develop and maintain a high standard of professional interest among its members and to unite them in a strong bond of fraternal fellowship.</p>
            </div>
        </div>
        </>
    );
};

export default About;


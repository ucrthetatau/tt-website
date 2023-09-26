import React from 'react'
import omicron1 from '../static/aboutOmi1.jpg'
import UpsPic from '../static/upsilonPic.jpg'
import about3 from '../static/W23Retreat.jpg'
import '../styles/about.css'
import { Chart } from "react-google-charts"

export const yearData = [
    ['Year', 'Number of People'],
    ['1st', 0],
    ['2nd', 5],
    ['3rd', 12],
    ['4th', 7],
    ['5th+', 7],
];

export const yearColors = {
    colors: ['#cd5c5c', '#7c0a02', '#a52a2a', '#f3b49f', '#cc3333'],
    backgroundColor: "transparent",
    is3D: true,
    slices: {
        0: { offset: 0.1 },
        1: { offset: 0.1 },
        2: { offset: 0.1 },
        3: { offset: 0.1 },
        4: { offset: 0.1 },
      },
    legend: {
        // position: 'bottom', 
    }
};

export const majorData = [
    ['Major', 'Number of People'],
    ['CS/CE/CSBA', 16],
    // ['CSBA', 2],
    // ['CE', 2],
    ['EE', 2],
    ['ME', 5],
    ['BIEN', 5],
    // ['MSE', 0],
    ['CHEME', 1],
    ['ENVE', 2]
];

export const majorColors = {
    colors: ['#ffcc33', '#e5b73b', '#da9100', '#996515', '#faf0be', '#f3e5ab', '#f8de7e'],
    backgroundColor: "transparent",
    position: "static",
    is3D: true,
    slices: {
        1: { offset: 0.4 },
        2: { offset: 0.2 },
        3: { offset: 0.2 },
        4: { offset: 0.4 },
        5: { offset: 0.4 },
      },
};

export const genderData = [
    ['Gender', 'Number of People'],
    ['Female', 10],
    ['Male', 21],
];

export const genderColors = {
    colors: ['#989898', '#dcdcdc'],
    backgroundColor: "transparent"
};

const About = () => {
    return (
        <>
        <br></br><br></br><br></br>
        <div class = "about-container">
            {/* <div class = "about-floating1">
                ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT
            </div>
            <div class = "about-floating2">
                ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT
            </div> */}
            <div>
                <img src={about3} class="about-pic" alt="Winter Retreat 2023"></img>
            </div>
            <div class = "head-info">
            </div>
            <div class = "pic-info">
                Winter 2023
            </div>
            
            <br></br><br></br>
            <div class = "about-info">
                <p>Theta Tau was originally founded as the "Society of Hammer and Tongs" on October 15, 1904 at the University of Minnesota by four engineers: Erich J. Schrader, Elwin L. Vinal, William M. Lewis, and Isaac B. Hanks. At the fraternity's first national convention in 1911, the name was changed to Theta Tau, and the fraternity opened up to include all departments of engineering. Since then, approximately 30,000 engineering students have been initiated.</p>
                <br></br>
                <hr></hr>
                <br></br><br></br>
                <div class = "section2">
                    <div class = "mission-statement">
                        <div class = "ms-text">
                            <h1>Mission Statement</h1>
                            <br></br>
                            <p>The purpose of Theta Tau is to develop and maintain a high standard of professional interest among its members and to unite them in a strong bond of fraternal fellowship.</p> 
                        </div>
                        <br></br>
                        <div>
                            <img src={UpsPic} class="ms-pic" alt="Upsilon Class Photo"></img>
                        </div>
                    </div>
                    <br></br>
                    <div class = "motto">
                        <div>
                            <img src={omicron1} class="motto-pic" alt="Omicron Class at Winter Retreat 2023"></img>
                        </div>
                        <br></br>
                        <div class = "motto-text">
                            <h1>Open Motto</h1>
                            <br></br>
                            <p>"Whatsoever thy hand findeth to do, do it with thy might;..."</p>
                            <br></br>
                            <p>- Ecclesiastes 9:10</p>
                        </div>
                    </div>
                </div>
                <br></br><br></br>
                <hr></hr>
                <br></br><br></br>
                <h1>Chapter Breakdown</h1>
                <br></br><br></br>
                <div class = "graphics">
                    <div class = "card">
                        <div>Year</div>
                        <div>
                            <Chart
                                chartType="PieChart"
                                data={yearData}
                                options={yearColors}
                                width={"100%"}
                                wmode="window"
                                zIndex="-1"
                            />
                        </div>
                    </div>
                    <div class="card">
                        <div>Major</div>
                        <div>
                            <Chart
                                chartType="PieChart"
                                data={majorData}
                                options={majorColors}
                            />
                        </div>
                    </div>
                    {/* <div class="card">
                        <div>Gender</div>
                        <div>
                            <Chart
                                chartType="PieChart"
                                data={genderData}
                                options={genderColors}
                            />
                        </div>
                    </div> */}
                </div>
            </div>
            <br></br><br></br><br></br><br></br>
        </div>
        </>
    );
};

export default About;


import React from 'react'
import styles from '../styles/about.module.css'
import omicron1 from '../static/aboutOmi1.jpg'
import UpsPic from '../static/upsilonPic.jpg'
import about3 from '../static/W23Retreat.jpg'
import { Chart } from "react-google-charts"

export const yearData = [
  ["Year", "Number of People"],
  ["1st", 4],
  ["2nd", 2],
  ["3rd", 24],
  ["4th", 15],
  ["5th+", 5],
]

export const yearColors = {
  colors: ["#f3b49f", "#cd5c5c", "#7c0a02", "#a52a2a", "#cc3333"],
  backgroundColor: "transparent",
  is3D: true,
  slices: {
    0: { offset: 0.1 },
    1: { offset: 0.1 },
    2: { offset: 0.1 },
    3: { offset: 0.1 },
    4: { offset: 0.1 },
  },
  legend: {},
}

export const majorData = [
  ["Major", "Number of People"],
  ["CS/CSBA/CE", 18],
  ["EE", 3],
  ["ME", 11],
  ["BIEN", 9],
  ['MSE', 1],
  ["CHEME", 2],
  ["ENVE", 3],
]

export const majorColors = {
    colors: ['#ffcc33', '#e5b73b', '#da9100', '#996515', '#faf0be', '#f3e5ab', '#f8de7e'],
    backgroundColor: "transparent",
    position: "static",
    is3D: true,
    slices: {
        1: { offset: 0.4 },
        2: { offset: 0.2 },
        3: { offset: 0.2 },
        4: { offset: 0.3 },
        5: { offset: 0.1 },
    },
}

export const internData = [
  ["Our Members With Experience", "Number of People"],
  ["Internship/Job", 10],
  ["Research", 2],
  ["Both", 5],
  ["None", 12],
]

export const internColors = {
  colors: ['#f3b49f', '#7c0a02', '#a52a2a', '#cd5c5c'],
  is3D: true,
  backgroundColor: "transparent",
  slices: {
    0: { offset: 0.05 },
    1: { offset: 0.4 },
    2: { offset: 0.3 },
    3: { offset: 0.05 },
  },
}

const About = () => {
    return (
        <>
        <br></br><br></br><br></br>
        <div className={styles.aboutContainer}>
            <div>
                <img src={about3} className={styles.aboutPic} alt="Winter Retreat 2023"></img>
            </div>
            <div className={styles.picInfo}>Winter 2023</div>
            <br></br><br></br>
            <div className={styles.aboutInfo}>
                <p>Theta Tau was originally founded as the "Society of Hammer and Tongs" on October 15, 1904 at the University of Minnesota by four engineers: Erich J. Schrader, Elwin L. Vinal, William M. Lewis, and Isaac B. Hanks. At the fraternity's first national convention in 1911, the name was changed to Theta Tau, and the fraternity opened up to include all departments of engineering. Since then, approximately 30,000 engineering students have been initiated.</p>
                <br></br>
                <hr></hr>
                <br></br><br></br>
                <div className={styles.section2}>
                    <div className={styles.missionStatement}>
                        <div className={styles.msText}>
                            <h1>Mission Statement</h1>
                            <br></br>
                            <p>The purpose of Theta Tau is to develop and maintain a high standard of professional interest among its members and to unite them in a strong bond of fraternal fellowship.</p> 
                        </div>
                        <br></br>
                        <div>
                            <img src={UpsPic} className={styles.msPic} alt="Upsilon Class"></img>
                        </div>
                    </div>
                    <br></br>
                    <div className={styles.motto}>
                        <div>
                            <img src={omicron1} className={styles.mottoPic} alt="Omicron Class at Winter Retreat 2023"></img>
                        </div>
                        <br></br>
                        <div className={styles.mottoText}>
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
                <div className={styles.graphics}>
                    <div className={styles.card}>
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
                    <div className={styles.card}>
                        <div>Major</div>
                        <div>
                            <Chart
                                chartType="PieChart"
                                data={majorData}
                                options={majorColors}
                            />
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div>Experience</div>
                        <div>
                            <Chart
                                chartType="PieChart"
                                data={internData}
                                options={internColors}
                            />
                        </div>
                    </div>
                </div>
            </div>
        <br></br><br></br><br></br><br></br>
        </div>
    </>
  )
}

export default About

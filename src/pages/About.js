import React from 'react'
import styles from '../styles/about.module.css'
import UpsPic from '../images/upsilonPic.jpg'
import about3 from '../images/W23Retreat.jpg'
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
		<div className={styles.about}>
			Hello
		</div>
	)
}

export default About

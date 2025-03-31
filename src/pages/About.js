import React from 'react'
import styles from '../styles/about.module.css'
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';


export const yearData = [
  { name: '1st', value: 4 },
  { name: '2nd', value: 6 },
  { name: '3rd', value: 23 },
  { name: '4th+', value: 18 },
];

export const majorData = [
  { name: 'CS/CSBA/CE', value: 18 },
  { name: 'ME', value: 11 },
  { name: 'BIEN', value: 9 },
  { name: 'ENVE', value: 6 },
  { name: 'EE', value: 3 },
  { name: 'CHEME', value: 2 },
  { name: 'MSE', value: 1 },
  { name: 'PHYS', value: 1 },
];

const redColors = ['#F3B49F', '#CD5C5C', '#7C0A02', '#A52A2A', '#CC3333'];
const goldColors = ['#FFCC33', '#E5B73B', '#DA9100', '#996515', '#FAF0BE', '#F3E5AB', '#F8DE7E', '#F3B49F'];

const About = () => {
    return (
      <div className={styles.about}>
        <h1 className={styles.section}>Chapter Breakdown</h1>
        <div className={styles.chartsContainer}>
          <div className={styles.chart}>
            <h3 className={styles.title}>Year Distribution</h3>
            <PieChart width={400} height={300}>
              <Pie
                data={yearData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
                dataKey="value"
              >
                {yearData.map((entry, i) => (
                  <Cell key={`cell-${i}`} fill={redColors[i % redColors.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>
          <div className={styles.chart}>
            <h3 className={styles.title}>Major Distribution</h3>
            <PieChart width={400} height={300}>
              <Pie
                data={majorData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
                dataKey="value"
              >
                {majorData.map((entry, i) => (
                  <Cell key={`cell-${i}`} fill={goldColors[i % goldColors.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>
        </div>
      </div>
	)
}

export default About

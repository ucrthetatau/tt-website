import React from 'react'
import styles from '../styles/about.module.css'
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';


export const yearData = [
  { name: '1st Year', value: 4 },
  { name: '2nd Year', value: 6 },
  { name: '3rd Year', value: 23 },
  { name: '4th+ Year', value: 18 },
];

export const majorData = [
  { name: 'MSE', value: 1 },
  { name: 'CHEME', value: 2 },
  { name: 'EE', value: 3 },
  { name: 'ENVE', value: 6 },
  { name: 'BIEN', value: 9 },
  { name: 'ME', value: 11 },
  { name: 'CS/CSBA/CE', value: 18 },
];

const redColors = ['#E39999', '#CD5C5C', '#7C0A02', '#A52A2A', '#CC3333', '#8B0000', '#B22222'];

const renderLegend = (props) => {
	const { payload } = props;
	
	return (
		<ul className={styles.legend}>
			{payload.map((entry, index) => (
				<li className={styles.legendItem} key={`item-${index}`}>
					<svg className={styles.dot}>
						<circle cx="5" cy="5" r="5" fill={entry.color} />
					</svg>
					<span className={styles.legendText}>{entry.value}</span>
				</li>
			))}
		</ul>
	);
};

const CustomTooltip = ({ active, payload }) => {
	if (active && payload && payload.length) {
		const total = payload[0].payload.total;
		const percentage = Math.round((payload[0].value / total) * 100);
		
		return (
			<div className={styles.tooltip}>
				<p>{`${payload[0].name}: ${payload[0].value} (${percentage}%)`}</p>
			</div>
		)
	}
	return null
}

const About = () => {
	const yearTotal = yearData.reduce((sum, item) => sum + item.value, 0);
	const majorTotal = majorData.reduce((sum, item) => sum + item.value, 0);

	const yearDataWithTotal = yearData.map(item => ({...item, total: yearTotal}));
	const majorDataWithTotal = majorData.map(item => ({...item, total: majorTotal}));

	// Add this function to handle responsive sizing
	const getChartDimensions = () => {
		return window.innerWidth <= 1150 ? {
			width: 300,
			height: 200,
			outerRadius: 70,
			innerRadius: 40
		} : {
			width: 400,
			height: 300,
			outerRadius: 110,
			innerRadius: 60
		}
	}

	const [dimensions, setDimensions] = React.useState(getChartDimensions())

	React.useEffect(() => {
		const handleResize = () => {
			setDimensions(getChartDimensions())
		}

		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return (
		<div className={styles.about}>
			<h1 className={styles.section}>Our Mission</h1>
			<div className={styles.textContainer}>
				<p className={styles.text}>
					The purpose of Theta Tau is to develop and maintain a high standard of professional interest among its members and to unite them in a strong bond of fraternal fellowship.
				</p>
			</div>
			<h1 className={styles.section}>Our History</h1>
			<div className={styles.textContainer}>
				<p className={styles.text}>
					Theta Tau was originally founded as the "Society of Hammer and Tongs" on October 15, 1904 at the University of Minnesota by four engineers: Erich J. Schrader, Elwin L. Vinal, William M. Lewis, and Isaac B. Hanks. At the fraternity's first national convention in 1911, the name was changed to Theta Tau, and the fraternity opened up to include all departments of engineering. Since then, approximately 30,000 engineering students have been initiated.
				</p>
			</div>
			<h1 className={styles.section}>Chapter Breakdown</h1>
			<div className={styles.breakdownContainer}>
				<div className={styles.chartContainer}>
					<h3 className={styles.chartTitle}>Year Distribution</h3>
					<PieChart className={styles.chart} width={dimensions.width} height={dimensions.height}>
						<Pie data={yearDataWithTotal} dataKey="value" outerRadius={dimensions.outerRadius} innerRadius={dimensions.innerRadius} strokeWidth={2}>
							{yearDataWithTotal.map((entry, i) => (
								<Cell key={`cell-${i}`} fill={redColors[i % redColors.length]} />
							))}
						</Pie>
						<Tooltip content={<CustomTooltip />} />
						<Legend content={renderLegend} layout="vertical" align="right" verticalAlign="middle" wrapperStyle={{ fontSize: "14px", lineHeight: "1.5" }}/>
					</PieChart>
				</div>
				<div className={styles.chartContainer}>
					<h3 className={styles.chartTitle}>Major Distribution</h3>
					<PieChart className={styles.chart} width={dimensions.width} height={dimensions.height}>
						<Pie data={majorDataWithTotal} dataKey="value" outerRadius={dimensions.outerRadius} innerRadius={dimensions.innerRadius} strokeWidth={2}>
							{majorDataWithTotal.map((entry, i) => (
								<Cell key={`cell-${i}`} fill={redColors[i % redColors.length]} />
							))}
						</Pie>
						<Tooltip content={<CustomTooltip />} />
						<Legend content={renderLegend} layout="vertical" align="right" verticalAlign="middle" wrapperStyle={{ fontSize: "14px", lineHeight: "1.5" }}/>
					</PieChart>
				</div>
			</div>
		</div>
	)
}

export default About

import React from "react"
import styles from "../styles/rush.module.css"
import InstagramEmbed from '../components/InstagramEmbed'
import graphic from '../images/RushS24Graphic.png'

const Rush = () => {
	return (
		<div className={styles.rush}>
			<div className={styles.graphicContainer}>
				<img src={graphic} alt="Rush 2024" style={{width: "100%"}} />
			</div>
			<div className={styles.instagramContainer}>
				<InstagramEmbed />
			</div>
			<div className={styles.buttonContainer}>
				<button className={styles.button}>Interest Form</button>
			</div>
		</div>
	)
}

export default Rush
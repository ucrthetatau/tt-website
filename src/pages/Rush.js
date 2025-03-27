import React from "react"
import styles from "../styles/rush.module.css"
import InstagramEmbed from '../components/InstagramEmbed'
import omicrons from '../images/omicrons.jpg'
import graphic from '../images/RushS24Graphic.png'

const Rush = () => {
	return (
		<div className={styles.rush}>
			<div className={styles.container}>
				<div className={styles.timelineSection}>
					<div className={styles.timeline}>
						<div className={styles.event}>
							<div className={styles.date}>
								<span className={styles.day}>Mon, Sep 30, 2024</span>
							</div>
							<div className={styles.details}>
								<h3>Meet the Brothers</h3>
								<p className={styles.description}>Get to know the brothers of Theta Tau</p>
								<p className={styles.time}>6-8 PM</p>
								<p className={styles.location}>Engineering IV Patio</p>
								<p className={styles.attire}>Casual Attire</p>
							</div>
						</div>

						<div className={styles.event}>
							<div className={styles.date}>
								<span className={styles.day}>Tue, Oct 01, 2024</span>
							</div>
							<div className={styles.details}>
								<h3>Engineering Night</h3>
								<p className={styles.description}>Put your innovation skills to the test in a fun engineering challenge!</p>
								<p className={styles.time}>6-8 PM</p>
								<p className={styles.location}>Engineering IV Patio</p>
								<p className={styles.attire}>Casual Attire</p>
							</div>
						</div>

						<div className={styles.event}>
							<div className={styles.date}>
								<span className={styles.day}>Wed, Oct 02, 2024</span>
							</div>
							<div className={styles.details}>
								<h3>Information Night</h3>
								<p className={styles.description}>Discover what our organization has to offer as you hear the unique stories of our brothers and alumni</p>
								<p className={styles.time}>6-8 PM</p>
								<p className={styles.location}>Engineering IV Patio</p>
								<p className={styles.attire}>Business Casual</p>
							</div>
						</div>

						<div className={styles.event}>
							<div className={styles.date}>
								<span className={styles.day}>Thu, Oct 03, 2024</span>
							</div>
							<div className={styles.details}>
								<h3>Beach Night</h3>
								<p className={styles.description}>Enjoy an evening at the beach and get to know the bros better!</p>
								<p className={styles.time}>INVITE ONLY</p>
								<p className={styles.location}>Santa Monica Beach</p>
								<p className={styles.attire}>Warm/Casual Attire</p>
							</div>
						</div>

						<div className={styles.event}>
							<div className={styles.date}>
								<span className={styles.day}>Fri, Oct 04, 2024</span>
							</div>
							<div className={styles.details}>
								<h3>Interviews</h3>
								<p className={styles.description}>TBD</p>
								<p className={styles.time}>INVITE ONLY</p>
								<p className={styles.location}>Location TBD</p>
								<p className={styles.attire}>Business Professional</p>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.graphicSection}>
					<img src={graphic} alt="Graphic" className={styles.graphic}/>
				</div>
			</div>
			<div className={styles.buttonContainer}>
				<button className={styles.button}>Interest Form</button>
			</div>
		</div>
	)
}

export default Rush
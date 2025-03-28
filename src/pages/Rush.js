import React from "react"
import styles from "../styles/rush.module.css"
import InstagramEmbed from '../components/InstagramEmbed'
import omicrons from '../images/omicrons.jpg'
import graphic from '../images/RushS24Graphic.png'

const Rush = () => {
	return (
		<div className={styles.rush}>
			<h1 className={styles.title}>Recruitment Schedule</h1>
			<div className={styles.container}>
				<div className={styles.timelineSection}>
					<div className={styles.timeline}>
						<div className={styles.event}>
							<div className={styles.date}>
								<span className={styles.day}>Mon, April 8, 2024</span>
								<div className={styles.timeLocation}>
									<span className={styles.time}>7-9 PM</span>
									<span className={styles.separator}>|</span>
									<span className={styles.location}>HUB 302 South</span>
								</div>
							</div>
							<div className={styles.details}>
								<h3>Info Night</h3>
								<p className={styles.description}>Meet the brothers of our chapter and discover what we're all about</p>
								<p className={styles.attire}>Casual Attire</p>
							</div>
						</div>

						<div className={styles.event}>
							<div className={styles.date}>
								<span className={styles.day}>Tue, April 9, 2024</span>
								<div className={styles.timeLocation}>
									<span className={styles.time}>7-9 PM</span>
									<span className={styles.separator}>|</span>
									<span className={styles.location}>HUB 302 South</span>
								</div>
							</div>
							<div className={styles.details}>
								<h3>Machine Madness</h3>
								<p className={styles.description}>Showcase your skills in a friendly competition of engineering challenges</p>
								<p className={styles.attire}>Casual Attire</p>
							</div>
						</div>

						<div className={styles.event}>
							<div className={styles.date}>
								<span className={styles.day}>Wed, April 10, 2024</span>
								<div className={styles.timeLocation}>
									<span className={styles.time}>7-9 PM</span>
									<span className={styles.separator}>|</span>
									<span className={styles.location}>Bourns Bus Stop</span>
								</div>
							</div>
							<div className={styles.details}>
								<h3>Food Night</h3>
								<p className={styles.description}>Enjoy free food while mingling with brothers and fellow rushees in a relaxed environment</p>
								<p className={styles.attire}>Casual Attire</p>
							</div>
						</div>

						<div className={styles.event}>
							<div className={styles.date}>
								<span className={styles.day}>Thu, April 11, 2024</span>
								<div className={styles.timeLocation}>
									<span className={styles.location}>Invite Only</span>
								</div>
							</div>
							<div className={styles.details}>
								<h3>Date Night</h3>
								<p className={styles.description}>Connect with brothers through 1-on-1 conversations in a more personal setting</p>
								<p className={styles.attire}>Business Casual</p>
							</div>
						</div>

						<div className={styles.event}>
							<div className={styles.date}>
								<span className={styles.day}>Fri, April 12, 2024</span>
								<div className={styles.timeLocation}>
									<span className={styles.location}>Invite Only</span>
								</div>
							</div>
							<div className={styles.details}>
								<h3>Interviews</h3>
								<p className={styles.description}>Share your story, highlight your achievements, and let your personality shine</p>
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
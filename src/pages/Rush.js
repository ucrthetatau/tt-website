import React from "react"
import styles from "../styles/rush.module.css"
import InstagramEmbed from '../components/InstagramEmbed'
import omicrons from '../images/omicrons.jpg'
import graphic from '../images/RushS24Graphic.png'

const Rush = () => {
	return (
		<div className={styles.rush}>
			<h1 className={styles.section}>Recruitment Schedule</h1>
			<div className={styles.scheduleContainer}>
				{/* <div className={styles.timelineContainer}> */}
					<div className={styles.timeline}>
						<div className={styles.event}>
							<div className={styles.left}>
								<div className={styles.date}>Mon, April 8, 2024</div>
								<div className={styles.timeLocation}> 7-9 PM | HUB 302 South</div>
							</div>	
							<div className={styles.right}>
								<h3 className={styles.name}>Info Night</h3>
								<p className={styles.description}>Meet the brothers of our chapter and discover what we're all about</p>
								<p className={styles.attire}>Casual Attire</p>
							</div>
						</div>
						<div className={styles.event}>
							<div className={styles.left}>
								<div className={styles.date}>Tue, April 9, 2024</div>
								<div className={styles.timeLocation}> 7-9 PM | HUB 302 South</div>
							</div>
							<div className={styles.right}>
								<h3 className={styles.name}>Machine Madness</h3>
								<p className={styles.description}>Showcase your skills in a friendly competition of engineering challenges</p>
								<p className={styles.attire}>Casual Attire</p>
							</div>
						</div>
						<div className={styles.event}>
							<div className={styles.left}>
								<div className={styles.date}>Wed, April 10, 2024</div>
								<div className={styles.timeLocation}> 7-9 PM | Bourns Bus Stop</div>
							</div>
							<div className={styles.right}>
								<h3 className={styles.name}>Food Night</h3>
								<p className={styles.description}>Enjoy free food while mingling with brothers and fellow rushees in a relaxed environment</p>
								<p className={styles.attire}>Casual Attire</p>
							</div>
						</div>
						<div className={styles.event}>
							<div className={styles.left}>
								<div className={styles.date}>Thu, April 11, 2024</div>
								<div className={styles.timeLocation}> Invite Only</div>
							</div>
							<div className={styles.right}>
								<h3 className={styles.name}>Date Night</h3>
								<p className={styles.description}>Connect with brothers through 1-on-1 conversations in a more personal setting</p>
								<p className={styles.attire}>Business Casual Attire</p>
							</div>
						</div>
						<div className={styles.event}>
							<div className={styles.left}>
								<div className={styles.date}>Fri, April 12, 2024</div>
								<div className={styles.timeLocation}> Invite Only</div>
							</div>
							<div className={styles.right}>
								<h3 className={styles.name}>Interviews</h3>
								<p className={styles.description}>Share your story, highlight your achievements, and let your personality shine</p>
								<p className={styles.attire}>Business Professional Attire</p>
							</div>
						</div>
					</div>
				{/* </div> */}
				<div className={styles.graphicContainer}>
					<img src={graphic} alt="Graphic" className={styles.graphic}/>
				</div>
			</div>
			<div className={styles.buttonContainer}>
				<button className={styles.button}>Interest Form</button>
			</div>
			<h1 className={styles.section}>FAQs</h1>
		</div>
	)
}

export default Rush
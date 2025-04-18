import React, { useEffect, useRef } from "react"
import styles from "../styles/rush.module.css"
import { FaPlus, FaMinus } from "react-icons/fa6";

const Rush = () => {
	const timelineRef = useRef(null)
	const graphicContainerRef = useRef(null)

	useEffect(() => {
		const handleResize = () => {
			if (timelineRef.current && graphicContainerRef.current) {
				const timelineHeight = timelineRef.current.offsetHeight
				document.documentElement.style.setProperty(
					"--graphic-height",
					`${timelineHeight}px`
				)
				console.log(timelineHeight)
			}
		}
		handleResize()
		window.addEventListener("resize", handleResize)
		return () => {
			window.removeEventListener("resize", handleResize)
		}
	}, [])

	return (
		<div className={styles.rush}>
			<h1 className={styles.section}>Recruitment Process</h1>

			<div className={styles.textContainer}>
				<p className={styles.text}>
					Thank you for your interest in our fraternity. Although
					recruitment for this quarter has ended, we invite you to
					join us for our Fall 2025 recruitment events. Keep an eye on
					our website and Instagram for more updates about
					upcoming opportunities!
				</p>
			</div>

			<h1 className={styles.section}>Recruitment Schedule</h1>
			<div className={styles.timelineContainer}>
				<div className={styles.timeline}>
					<div className={styles.event}>
						<div className={styles.left}>
							<div className={styles.date}>
								<span className={styles.day}>Mon, </span>
								<span className={styles.month}>April 7, 2025</span>
							</div>
							<div className={styles.time}> 7-9 PM</div>
							<div className={styles.seperator}> | </div>
							<div className={styles.location}>HUB 302 South</div>
						</div>	
						<div className={styles.right}>
							<h3 className={styles.name}>Info Night</h3>
							<p className={styles.description}>Meet the brothers of our chapter and discover what we're all about</p>
							<p className={styles.attire}>Casual Attire</p>
						</div>
					</div>
					<div className={styles.event}>
						<div className={styles.left}>
							<div className={styles.date}>
								<span className={styles.day}>Tue, </span>
								<span className={styles.month}>April 8, 2025</span>
							</div>
							<div className={styles.time}> 7-9 PM</div>
							<div className={styles.seperator}> | </div>
							<div className={styles.location}>HUB 302 South</div>
						</div>
						<div className={styles.right}>
							<h3 className={styles.name}>Machine Madness</h3>
							<p className={styles.description}>Showcase your skills in a friendly competition of engineering challenges</p>
							<p className={styles.attire}>Casual Attire</p>
						</div>
					</div>
					<div className={styles.event}>
						<div className={styles.left}>
							<div className={styles.date}>
								<span className={styles.day}>Wed, </span>
								<span className={styles.month}>April 9, 2025</span>
							</div>
							<div className={styles.time}> 7-9 PM</div>
							<div className={styles.seperator}> | </div>
							<div className={styles.location}>Bourns Bus Stop</div>
						</div>
						<div className={styles.right}>
							<h3 className={styles.name}>Game Night</h3>
							<p className={styles.description}>Enjoy some board games while mingling with brothers and fellow rushees in a relaxed environment</p>
							<p className={styles.attire}>Casual Attire</p>
						</div>
					</div>
					<div className={styles.event}>
						<div className={styles.left}>
							<div className={styles.date}>
								<span className={styles.day}>Thu, </span>
								<span className={styles.month}>April 10, 2025</span>
							</div>
							<div className={styles.time}> Invite Only</div>
						</div>
						<div className={styles.right}>
							<h3 className={styles.name}>Date Night</h3>
							<p className={styles.description}>Connect with brothers through 1-on-1 conversations in a more personal setting</p>
							<p className={styles.attire}>Business Casual Attire</p>
						</div>
					</div>
					<div className={styles.event}>
						<div className={styles.left}>
							<div className={styles.date}>
								<span className={styles.day}>Fri, </span>
								<span className={styles.month}>April 11, 2025</span>
							</div>
							<div className={styles.time}> Invite Only</div>
						</div>
						<div className={styles.right}>
							<h3 className={styles.name}>Interviews</h3>
							<p className={styles.description}>Share your story, highlight your achievements, and let your personality shine</p>
							<p className={styles.attire}>Business Professional Attire</p>
						</div>
					</div>
				</div>
			</div>
			{/* <div className={styles.buttonContainer}>
				<a href="" target="_blank" rel="noopener noreferrer" className={styles.button}>Interest Form</a> 
				<a href="https://discord.com/invite/dBWhZNjgEP" target="_blank" rel="noopener noreferrer" className={styles.button}>Discord Link</a>
			</div> */}

			<h1 className={styles.section}>
				<span className={styles.fullTitle}>Frequently Asked Questions</span>
				<span className={styles.shortTitle}>FAQs</span>
			</h1>
			<div className={styles.faqsContainer}>
				<div className={styles.faq}>
					<input type="checkbox" id="faq1" className={styles.faqToggle} />
					<label htmlFor="faq1" className={styles.question}>
						<div className={styles.questionText}>
							<h3>What is Theta Tau?</h3>
						</div>
						<div className={styles.icons}>
							<FaPlus className={styles.open} />
							<FaMinus className={styles.close} />
						</div>
					</label>
					<div className={styles.answer}>
						<p>Theta Tau is the oldest and largest professional engineering fraternity in the United States, founded in 1904. We're dedicated to developing engineering leaders through professional development, community service, and brotherhood.</p>
					</div>
				</div>
				<div className={styles.faq}>
					<input type="checkbox" id="faq2" className={styles.faqToggle} />
					<label htmlFor="faq2" className={styles.question}>
						<div className={styles.questionText}>
							<h3>What are the eligibility requirements?</h3>
						</div>
						<div className={styles.icons}>
							<FaPlus className={styles.open} />
							<FaMinus className={styles.close} />
						</div>
					</label>
					<div className={styles.answer}>
						<p>Anyone is welcome to rush, however to recieve a bid, you must fulfill the following requirements:
							<ul className={styles.list}>
								<li> You must be enrolled in the Bourns College of Engineering.
									<ul>
										<li> Unfortunately we cannot accept Data Science nor Robotics majors as those programs are not ABET Accredited at UCR yet.</li>
									</ul>
								</li>
								<li>A minimum cumulative GPA of 2.5 is required, along with a GPA of at least 2.0 for your most recent academic quarter, excluding summer.
									<ul>
										<li>First-year students enrolled during the Fall quarter are exempt from this requirement.</li>
									</ul>
								</li>
								<li>You must not be in your last quarter of instruction at UCR.
									<ul>
										<li>Graduate students are welcome, but are still restricted by this policy.</li>
									</ul>
								</li>
							</ul>
						</p>
					</div>
				</div>
				{/* <div className={styles.faq}>
					<input type="checkbox" id="faq3" className={styles.faqToggle} />
					<label htmlFor="faq3" className={styles.question}>
						<div className={styles.questionText}>
							<h3>Is Theta Tau co-ed?</h3>
						</div>
						<div className={styles.icons}>
							<FaPlus className={styles.open} />
							<FaMinus className={styles.close} />
						</div>
					</label>
					<div className={styles.answer}>
						<p>Yes, Theta Tau is a co-ed professional fraternity. We welcome qualified candidates regardless of gender identity. Our chapter is committed to fostering a diverse and inclusive environment where all members can thrive professionally and personally.</p>
					</div>
				</div> */}
				<div className={styles.faq}>
					<input type="checkbox" id="faq4" className={styles.faqToggle} />
					<label htmlFor="faq4" className={styles.question}>
						<div className={styles.questionText}>
							<h3>What are the benefits of joining?</h3>
						</div>
						<div className={styles.icons}>
							<FaPlus className={styles.open} />
							<FaMinus className={styles.close} />
						</div>
					</label>
					<div className={styles.answer}>
						<p>Joining Theta Tau provides numerous benefits, including professional networking opportunities, leadership development, technical skills workshops, industry connections, lifelong friendships, and access to a nationwide network of engineering professionals. Our alumni network spans across major tech companies and engineering firms, offering valuable career connections.</p>
					</div>
				</div>
				<div className={styles.faq}>
					<input type="checkbox" id="faq5" className={styles.faqToggle} />
					<label htmlFor="faq5" className={styles.question}>
						<div className={styles.questionText}>
							<h3>How selective is the recruitment process?</h3>
						</div>
						<div className={styles.icons}>
							<FaPlus className={styles.open} />
							<FaMinus className={styles.close} />
						</div>
					</label>
					<div className={styles.answer}>
						<p>Our recruitment process is selective but fair. We look for candidates who demonstrate academic excellence, professional ambition, leadership potential, and a genuine interest in brotherhood. We evaluate each candidate holistically, considering their technical skills, interpersonal abilities, and alignment with our fraternity values.</p>
					</div>
				</div>
				{/* <div className={styles.faq}>
					<input type="checkbox" id="faq6" className={styles.faqToggle} />
					<label htmlFor="faq6" className={styles.question}>
						<div className={styles.questionText}>
							<h3>How can I prepare for recruitment?</h3>
						</div>
						<div className={styles.icons}>
							<FaPlus className={styles.open} />
							<FaMinus className={styles.close} />
						</div>
					</label>
					<div className={styles.answer}>
						<p>The best way to prepare is to attend our rush events, be yourself, and engage with brothers.</p>
					</div>
				</div> */}
				<div className={styles.faq}>
					<input type="checkbox" id="faq7" className={styles.faqToggle} />
					<label htmlFor="faq7" className={styles.question}>
						<div className={styles.questionText}>
							<h3>What is the time commitment?</h3>
						</div>
						<div className={styles.icons}>
							<FaPlus className={styles.open} />
							<FaMinus className={styles.close} />
						</div>
					</label>
					<div className={styles.answer}>
						<p>The New Member Education process typically requires the effort of a part-time job. We understand that academics come first, and we work to ensure that fraternity commitments will complement rather than compete with your studies.</p>
					</div>
				</div>
				<div className={styles.faq}>
					<input type="checkbox" id="faq8" className={styles.faqToggle} />
					<label htmlFor="faq8" className={styles.question}>
						<div className={styles.questionText}>
							<h3>Is there hazing?</h3>
						</div>
						<div className={styles.icons}>
							<FaPlus className={styles.open} />
							<FaMinus className={styles.close} />
						</div>
					</label>
					<div className={styles.answer}>
						<p>Theta Tau has a strict anti-hazing policy. This is enforced by national and university policies. Our process focuses on professional development, brotherhood, and personal growth in a supportive environment.</p>
					</div>
				</div>
				<div className={styles.faq}>
					<input type="checkbox" id="faq9" className={styles.faqToggle} />
					<label htmlFor="faq9" className={styles.question}>
						<div className={styles.questionText}>
							<h3>What are the membership fees?</h3>
						</div>
						<div className={styles.icons}>
							<FaPlus className={styles.open} />
							<FaMinus className={styles.close} />
						</div>
					</label>
					<div className={styles.answer}>
						<p>Membership fees vary by quarter. These fees cover national fees, chapter operations, professional events, brotherhood activities, and other fraternity expenses. We offer payment plans and can work with members who have financial concerns.</p>
					</div>
				</div>
				<div className={styles.faq}>
					<input type="checkbox" id="faq10" className={styles.faqToggle} />
					<label htmlFor="faq10" className={styles.question}>
						<div className={styles.questionText}>
							<h3>Still have questions?</h3>
						</div>
						<div className={styles.icons}>
							<FaPlus className={styles.open} />
							<FaMinus className={styles.close} />
						</div>
					</label>
					<div className={styles.answer}>
						<p>Send us an email at <a href="mailto:thetatauucr@gmail.com">thetatauucr@gmail.com</a> or check out our social media pages for upcoming events and information.</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Rush

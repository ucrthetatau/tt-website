import React, { useState, useEffect } from 'react'
import styles from "../styles/home.module.css"
import chapter from "../images/chapter.jpg"
import tabling from "../images/tabling.jpg"
import pier from "../images/pier.jpg"
import omicrons from "../images/omicrons.jpg"
import upsilons from "../images/upsilons.jpg"
import retreat from "../images/W23Retreat.jpg"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RiServiceLine } from "react-icons/ri";
import { GrGroup } from "react-icons/gr";
import { LuGraduationCap } from "react-icons/lu";

const Home = () => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const totalSlides = 6

	const nextSlide = () => {
		setCurrentSlide(current => (current + 1) % totalSlides)
	}

	const prevSlide = () => {
		setCurrentSlide(current => (current - 1 + totalSlides) % totalSlides)
	}

	const goToSlide = (index) => {
		setCurrentSlide(index)
	}

	useEffect(() => {
		const timer = setInterval(nextSlide, 7000)
		return () => clearInterval(timer)
	}, [currentSlide])

	return (
		<div className={styles.home}>
			<div className={styles.banner}>
				<div className={styles.slider}>
					<img src={chapter} alt="Chapter" className={`${styles.chapter} ${currentSlide === 0 ? styles.active : ''}`} />
					<img src={tabling} alt="Tabling" className={`${styles.chapter} ${currentSlide === 1 ? styles.active : ''}`} />
					<img src={pier} alt="Pier" className={`${styles.chapter} ${currentSlide === 2 ? styles.active : ''}`} />
					<img src={omicrons} alt="Omicrons" className={`${styles.chapter} ${currentSlide === 3 ? styles.active : ''}`} />
					<img src={upsilons} alt="Upsilons" className={`${styles.chapter} ${currentSlide === 4 ? styles.active : ''}`} />
					<img src={retreat} alt="Winter 2023 Retreat" className={`${styles.chapter} ${currentSlide === 5 ? styles.active : ''}`} />
				</div>
				<div className={styles.overlay}>
					<div className={`${styles.arrowContainer} ${styles.left}`} onClick={prevSlide}>
						<IoIosArrowBack className={styles.arrow}/>
					</div>
					<div className={styles.title}>
						<h1>UCR Theta Tau</h1>
						<h2>Sigma Delta Chapter</h2>
						<p>The Premier Co-Ed Professional Engineering Fraternity at UCR</p>
					</div>
					<div className={`${styles.arrowContainer} ${styles.right}`} onClick={nextSlide}>
						<IoIosArrowForward className={styles.arrow}/>
					</div>
					<div className={styles.dots}>
						{[...Array(totalSlides)].map((_, index) => (
							<div key={index} className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`} onClick={() => goToSlide(index)} />
						))}
					</div>
				</div>
			</div>
			<div className={styles.body}>
				<div className={styles.pillarsContainer}>
					<div className={styles.pillar + " " + styles.group}>
						<GrGroup className={styles.icon} />
						<h2>Brotherhood</h2>
						<div className={styles.underline}></div>
						<p>We strive to develop bonds that will last a lifetime.</p>
					</div>
					<div className={styles.pillar + " " + styles.cap}>
						<LuGraduationCap className={styles.icon} />
						<h2>Professionalism</h2>
						<div className={styles.underline}></div>
						<p>We aim to prepare for life in college and beyond.</p>
					</div>
					<div className={styles.pillar + " " + styles.heart}>
						<RiServiceLine className={styles.icon} />
						<h2>Service</h2>
						<div className={styles.underline}></div>
						<p>We are involved in projects that give back to the community.</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
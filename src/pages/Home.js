import React, { useState } from 'react'
import styles from "../styles/home.module.css"
import brotherhood from "../images/brotherhood.png"
import professionalism from "../images/professionalism.png"
import service from "../images/service.png"
import chapter from "../images/chapter.jpg"
import tabling from "../images/tabling.jpg"
import pier from "../images/pier.jpg"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Home = () => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const totalSlides = 3

	const nextSlide = () => {
		setCurrentSlide(current => (current + 1) % totalSlides)
	}

	const prevSlide = () => {
		setCurrentSlide(current => (current - 1 + totalSlides) % totalSlides)
	}

	const goToSlide = (index) => {
		setCurrentSlide(index)
	}

	return (
		<div className={styles.home}>
			<div className={styles.slider}>
				<img src={chapter} alt="Chapter" className={`${styles.chapter} ${currentSlide === 0 ? styles.active : ''}`} />
				<img src={tabling} alt="Tabling" className={`${styles.chapter} ${currentSlide === 1 ? styles.active : ''}`} />
				<img src={pier} alt="Pier" className={`${styles.chapter} ${currentSlide === 2 ? styles.active : ''}`} />
				<div className={styles.leftArrow} onClick={prevSlide}>
					<IoIosArrowBack />
				</div>
				<div className={styles.rightArrow} onClick={nextSlide}>
					<IoIosArrowForward />
				</div>
				<div className={styles.dots}>
					{[...Array(totalSlides)].map((_, index) => (
						<div key={index} className={`${styles.dot} ${index === currentSlide ? styles.dotActive : ''}`} onClick={() => goToSlide(index)} />
					))}
				</div>
			</div>
		</div>
	)
}

export default Home

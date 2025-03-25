import React, { useState } from "react"
import styles from "../styles/imageSlider.module.css"
import { SlideData } from "../static/SlideData.js"
import { NavLink } from "react-router-dom"

const slideInfo = [
  {
    link: "./About",
    text: "About",
  },
  {
    link: "./Rush",
    text: "Rush",
  },
  {
    link: "./Brothers",
    text: "Brothers",
  },
]

export const ImageSlider = () => {
  const [slide, setSlide] = useState(0)

  const nextSlide = () => {
    setSlide(slide === SlideData.length - 1 ? 0 : slide + 1)
  }

  const prevSlide = () => {
    setSlide(slide === 0 ? SlideData.length - 1 : slide - 1)
  }

  return (
    <div className={styles.imageSlider}>
      <div className={`${styles.arrow} ${styles.arrowLeft}`} onClick={prevSlide}>
        <span></span>
      </div>
      {SlideData.map((item, idx) => {
        const isCurrentSlide = slide === idx
        return (
          <div key={idx}>
            <img
              src={item.image}
              alt={`Slide: ${idx + 1}`}
              className={isCurrentSlide ? styles.slide : styles.slideHidden}
              fade
            />
            <div
              className={isCurrentSlide ? styles.centerTextContainer : styles.hidden}
            >
              <div className={styles.centerText}>Explore</div>
              <div
                className={
                  isCurrentSlide ? styles.centerLinkedTextContainer : styles.hidden
                }
              >
                <NavLink to={slideInfo[idx].link} className={styles.navLink}>
                  <div className={styles.centerText}>{slideInfo[idx].text}</div>
                </NavLink>
              </div>
            </div>
          </div>
        )
      })}
      <div className={`${styles.arrow} ${styles.arrowRight}`} onClick={nextSlide}>
        <span></span>
      </div>
      <span className={styles.indicators}>
        {SlideData.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? styles.indicator : `${styles.indicator} ${styles.indicatorInactive}`
              }
              onClick={() => setSlide(idx)}
            ></button>
          )
        })}
      </span>
    </div>
  )
}

export default ImageSlider

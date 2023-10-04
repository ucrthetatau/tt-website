import React, { useState } from "react"
import "../styles/imageSlider.css"
import { SlideData } from "../static/SlideData.js"
import { NavLink } from "react-router-dom"

const slideInfo = [
  {
    link: "./About",
    text: "About",
  },
  {
    link: "./Members",
    text: "Brothers",
  },
  {
    link: "./Rush",
    text: "Rush",
  },
  {
    link: "./Contact",
    text: "Contact",
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
    <div className="imageSlider">
      <div className="arrow arrow--left" onClick={prevSlide}>
        <span></span>
      </div>
      {SlideData.map((item, idx) => {
        const isCurrentSlide = slide === idx
        return (
          <div key={idx}>
            <img
              src={item.image}
              alt={`Slide: ${idx + 1}`}
              className={isCurrentSlide ? "slide" : "slide-hidden"}
              fade
            />
            <div
              className={isCurrentSlide ? "center-text-container" : "hidden"}
            >
              <div className="center-text">Explore</div>
              <div
                className={
                  isCurrentSlide ? "center-linked-text-container" : "hidden"
                }
              >
                <NavLink to={slideInfo[idx].link} className="nav-link">
                  <div className="center-text">{slideInfo[idx].text}</div>
                </NavLink>
              </div>
            </div>
          </div>
        )
      })}
      <div className="arrow arrow--right" onClick={nextSlide}>
        <span></span>
      </div>
      <span className="indicators">
        {SlideData.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
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

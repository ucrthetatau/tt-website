import React from "react"
// import s23 from "../static/S23graphic1.jpg"
// import blackGear from "../static/blackGear.png"
import "../styles/rush.css"
import InstagramEmbed from './InstagramEmbed'
// import s24graphic from "../static/Rush BannerWebsite Graphic.png"

function Rush() {
  return (
    <>
      <div class="master">
        <br></br>
        <br></br>
        <br></br>
        <div class="rush-container">
          <div class="rush-text">
            <h1>Are You An Engineer?</h1>
            <br></br>
            <p>
              We are the only co-ed professional engineering fraternity at UCR.
              Theta Tau can help you in expanding your professional network,
              becoming a part of a brotherhood, giving back to the community,
              and developing into a better engineer.
              <br></br> <br></br>
            </p>
            <p>
              Come and find out what we're all about! We are looking for
              motivated and bright individuals to become part of our next class in Fall 2024!
              <br></br> <br></br>
            </p>
            <p>
              Feel free to follow our Instagram page embedded below to keep up to date with further announcements!
              {/* Please fill out the interest form if you'd like to join us for our
              next rush in Spring 2024. Come rush for Theta Tau! */}
            </p>

            {/* <div class="rush-buttons">
              <a
                href="https://forms.gle/WxQ7Dxa5u45CvBqRA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button class="rush-bttn">
                  <span>Interest Form</span>
                </button>
              </a>
              <a
                href="https://discord.gg/EB7jACxzhd"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button class="rush-bttn">
                  <span>Discord Link</span>
                </button>
              </a>
            </div> */}
          </div>

          {/* <div>
            <img src={s24graphic} class="rush-pic"></img>
          </div> */}
          {/* <div>
            <img src={blackGear} class="black gear"></img>
          </div> */}
        </div>
        <InstagramEmbed></InstagramEmbed>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </>
  )
}

export default Rush
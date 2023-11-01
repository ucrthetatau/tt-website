import React from "react"
// import s23 from "../static/S23graphic1.jpg"
import blackGear from "../static/blackGear.png"
import "../styles/rush.css"

function Rush() {
    return (
        <>
        <br></br><br></br><br></br>
        <div class = "rush-container">
            {/* <div class = "rush-floating1">
                RUSH RUSH RUSH
            </div> */}
        {/* <div class = "rush-floating2">
                RUSH RUSH RUSH
            </div> */}
        <div class="rush-text">
          <h1>Are You An Engineer?</h1>
          <br></br>
          <p>
            We aboutre the only Co-ed Professional Engineering Fraternity at UCR. Theta Tau can help you in expanding
            your professional network, becoming a part of a brotherhood, giving back to the community, and becoming a better engineer.
            <br></br> <br></br>
            Come and find out what we're all about! We are looking for motivated
            and bright individuals to become part of our next class!
            <br></br> <br></br>
            {/* Please fill out the interest form if you'd like to join us for our
            next rush in Spring 2024. Come rush for Theta Tau!  */}
            Please follow our instagram to keep up to date with our next rush in Spring 2024!
          </p>
          {/* <div class="rush-buttons">
            <a
              href="https://forms.gle/K8tom1dVxWma7MA77"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button class="rush-bttn">
                <span>Interest Form</span>
              </button>
            </a>
            <a
              href="https://discord.gg/fC4up6cbSS"
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
          <img src={s23} class="rush-pic"></img>
        </div> */}
        <div>
          <img src={blackGear} class="black gear"></img>
        </div>
      </div>
      <br></br><br></br><br></br>
    </>
  )
}

export default Rush

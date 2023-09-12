// import Navbar from './Navbar'
import "../styles/home.css"
import brotherhood from "../static/brotherhood.png"
import professionalism from "../static/professionalism.png"
import service from "../static/service.png"
import homePage from "../static/homePage.JPG"
import { NavLink } from "react-router-dom"

const Home = () => {
  return (
    <>
      <div className="page-container">
        <div className="pic">
          <div className="center-text-container">
            <NavLink
              to="/About"
              className="nav-link"
            >
              <div className="linked-text">About</div>
            </NavLink>
          </div>
          <img src={homePage} alt="homePage"></img>
        </div>
        <div className="title-container">
          <div className="left-line"></div>
          <div className="title">Our Pillars</div>
          <div className="right-line"></div>
        </div>
        <div className="home">
          <div className="container">
            <div className="pillar">
              <div className="icon">
                <img
                  src={brotherhood}
                  alt="BrotherhoodIcon"
                  className="icon"
                ></img>
              </div>
              <div className="subtitle">Brotherhood</div>
              <div className="border-with-diamonds"></div>
              <div className="caption">
                We develop lifelong bonds of fraternal fellowship between our
                members through unique and memorable experiences. We stay
                supportive and honest with each other to promote a brotherhood
                that goes beyond school and work.
              </div>
              <div className="border-with-diamonds"></div>
            </div>
            <div className="pillar">
              <div className="icon">
                <img
                  src={professionalism}
                  alt="ProfessionalismIcon="
                  className="icon"
                ></img>
              </div>
              <div className="subtitle">Professionalism</div>
              <div className="border-with-diamonds"></div>
              <div className="caption">
                We aim to build and refine the professional abilities of our
                members so that they succeed in their careers and endeavors. We
                emphasize professional characteristics such as communication,
                presentation, and innovation.
              </div>
              <div className="border-with-diamonds"></div>
            </div>
            <div className="pillar">
              <div className="icon">
                <img src={service} alt="ServiceIcon" className="icon"></img>
              </div>
              <div className="subtitle">Service</div>
              <div className="border-with-diamonds"></div>
              <div className="caption">
                We believe that it is important to excel in our respective
                fields as well as give back to the community. Our members strive
                to lead by example and stay true through volunteering, work, and
                contribution to the school and community.
              </div>
              <div className="border-with-diamonds"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// document.addEventListener("DOMContentLoaded", function () {
//   var linkedText = document.querySelector(".linked-text")
//   linkedText.addEventListener("click", function () {
//     window.location.href = "/About"
//   })
// })

export default Home

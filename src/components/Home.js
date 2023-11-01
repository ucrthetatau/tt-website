import "../styles/home.css"
import brotherhood from "../static/brotherhood.png"
import professionalism from "../static/professionalism.png"
import service from "../static/service.png"
import { ImageSlider } from "./ImageSlider.js"

const Home = () => {
  return (
    <>
      <div className="page-container">
        <div className="title-container">
          <div className="left-line-with-triangle"></div>
          <div className="title">Chapter</div>
          <div className="right-line-with-triangle"></div>
        </div>
        <div className="home-slider-container">
          <ImageSlider />
        </div>
        <div className="title-container">
          <div className="left-line-with-triangle"></div>
          <div className="title">Pillars</div>
          <div className="right-line-with-triangle"></div>
        </div>
        <div className="total-pillar-container">
          <div className="pillar">
            <img src={brotherhood} alt="BrotherhoodIcon" className="icon"></img>
            <div className="subtitle">Brotherhood</div>
            <div className="border-with-diamonds"></div>
            <div className="caption">
              We develop lifelong bonds of fraternal fellowship between our
              members through unique and memorable experiences. We stay
              supportive and honest with each other to promote a brotherhood
              that goes beyond school and work.
            </div>
          </div>
          <div className="pillar">
            <div className="icon-container">
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
          </div>
          <div className="pillar">
            <img src={service} alt="ServiceIcon" className="icon"></img>
            <div className="subtitle">Service</div>
            <div className="border-with-diamonds"></div>
            <div className="caption">
              We believe that it is important to excel in our respective fields
              as well as give back to the community. Our members strive to lead
              by example and stay true through volunteering, work, and
              contribution to the school and community.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home

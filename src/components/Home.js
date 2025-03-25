import styles from "../styles/home.module.css"
import brotherhood from "../static/brotherhood.png"
import professionalism from "../static/professionalism.png"
import service from "../static/service.png"
import { ImageSlider } from "./ImageSlider.js"

const Home = () => {
  return (
    <>
      <div className={styles.pageContainer}>
        <div className={styles.titleContainer}>
          <div className={styles.leftLineWithTriangle}></div>
          <div className={styles.title}>Chapter</div>
          <div className={styles.rightLineWithTriangle}></div>
        </div>
        <div className={styles.homeSliderContainer}>
          <ImageSlider />
        </div>
        <div className={styles.titleContainer}>
          <div className={styles.leftLineWithTriangle}></div>
          <div className={styles.title}>Pillars</div>
          <div className={styles.rightLineWithTriangle}></div>
        </div>
        <div className={styles.totalPillarContainer}>
          <div className={styles.pillar}>
            <img src={brotherhood} alt="Brotherhood Icon" className={styles.icon}></img>
            <div className={styles.subtitle}>Brotherhood</div>
            <div className={styles.borderWithDiamonds}></div>
            <div className={styles.caption}>
              We develop lifelong bonds of fraternal fellowship between our
              members through unique and memorable experiences. We stay
              supportive and honest with each other to promote a brotherhood
              that goes beyond school and work.
            </div>
          </div>
          <div className={styles.pillar}>
            <div className={styles.iconContainer}>
              <img
                src={professionalism}
                alt="Professionalism Icon"
                className={styles.icon}
              ></img>
            </div>
            <div className={styles.subtitle}>Professionalism</div>
            <div className={styles.borderWithDiamonds}></div>
            <div className={styles.caption}>
              We aim to build and refine the professional abilities of our
              members so that they succeed in their careers and endeavors. We
              emphasize professional characteristics such as communication,
              presentation, and innovation.
            </div>
          </div>
          <div className={styles.pillar}>
            <img src={service} alt="Service Icon" className={styles.icon}></img>
            <div className={styles.subtitle}>Service</div>
            <div className={styles.borderWithDiamonds}></div>
            <div className={styles.caption}>
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

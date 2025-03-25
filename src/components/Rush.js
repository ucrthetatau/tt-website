import React from "react"
import styles from "../styles/rush.module.css"
import InstagramEmbed from './InstagramEmbed'

function Rush() {
  return (
    <>
      <div className={styles.master}>
        <br></br>
        <br></br>
        <br></br>
        <div className={styles.rushContainer}>
          <div className={styles.rushText}>
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
              motivated and bright individuals to become part of our next class in Spring 2025!
              <br></br> <br></br>
            </p>
            <p>
              Feel free to follow our Instagram page below to keep up to date with further announcements!
            </p>
          </div>
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
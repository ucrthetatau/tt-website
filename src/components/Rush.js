import React from 'react'
import styles from '../styles/rush.module.css'
import s23 from '../static/S23graphic1.jpg'
import '../styles/rush.css'

function Rush() {
    return (
        // <div className={styles.container}>
        //     <h1 className={styles.head}>spring recruitment 2023</h1>

        //     <div className={styles.content}>
        //         {/* <img src={s23} className={styles.pic} /> */}
        //         <img src={s23} class={"pic"} />
        //         <div className={styles.body}>
        //             <h2> ​Are you an engineer? <br /> Then come rush for Theta Tau! </h2>
        //             We're the only Co-ed Professional Engineering Fraternity at UCR. Theta Tau can help you in expanding your professional network, becoming a part of a brotherhood, giving back to the community, and becoming a better engineer.
        //             <br />
        //             Come and find out what we're all about! We are looking for motivated and bright individuals to become part of our Sigma Class!
        //             <br />
        //             Please fill out the interest form if you'd like to join us for our Fall Rush 2023!
        //         </div>
        //     </div>
        //     <button className={styles.button}> Interest Form </button>
        // </div>


        // <div class="rush-container">
        //     <h1>HEADER</h1>
        //     <p>Are you an engineer? Then come rush for Theta Tau! We're the only Co-ed Professional Engineering Fraternity at UCR. Theta Tau can help you in expanding your professional network, becoming a part of a brotherhood, giving back to the community, and becoming a better engineer.
        //     <br></br> <br></br>
        //     Come and find out what we're all about! We are looking for motivated and bright individuals to become part of our Upsilon Class!
        //     <br></br> <br></br>
        //     Please fill out the interest form if you'd like to join us for our Spring Rush 2023!
        //     </p>
        //     <div class="buttonContainer">
        //         <a href="https://forms.gle/K8tom1dVxWma7MA77" target="_blank" rel="noopener noreferrer">
        //             <button>Interest Form</button>
        //         </a>
        //     </div>
        // </div>
        // <div class="pic">
        //     <img src={s23} class="pic"></img>
        // </div>
        <>
        <div class = "rush-container">
            <p>
            Are you an engineer? Then come rush for Theta Tau! We're the only Co-ed Professional Engineering Fraternity at UCR. Theta Tau can help you in expanding your professional network, becoming a part of a brotherhood, giving back to the community, and becoming a better engineer.
            <br></br> <br></br>
            Come and find out what we're all about! We are looking for motivated and bright individuals to become part of our Upsilon Class!
            <br></br> <br></br>
            Please fill out the interest form if you'd like to join us for our Spring Rush 2023!
            </p>
            <div class = "rush-bttn">
            <a href="https://forms.gle/K8tom1dVxWma7MA77" target="_blank" rel="noopener noreferrer">
                <button>Interest Form</button>
            </a>
            </div>
            <div class = "pic">
                <img src={s23} class="pic"></img>
            </div>
        </div>
        
        </>
    );
}

export default Rush;
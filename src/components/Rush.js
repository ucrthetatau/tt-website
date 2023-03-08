import s23 from '../static/S2graphic1.jpg'
import styles from '../styles/rush.module.css'

const Rush = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.head}>spring recruitment 2023</h1>

            <div className={styles.content}>
                <img src={s23} className={styles.pic} />
                <div className={styles.body}>
                    <h2> ​Are you an engineer? <br /> Then come rush for Theta Tau! </h2>
                    We're the only Co-ed Professional Engineering Fraternity at UCR. Theta Tau can help you in expanding your professional network, becoming a part of a brotherhood, giving back to the community, and becoming a better engineer.
                    <br />
                    Come and find out what we're all about! We are looking for motivated and bright individuals to become part of our Sigma Class!
                    <br />
                    Please fill out the interest form if you'd like to join us for our Fall Rush 2023!
                </div>
            </div>
            <button className={styles.button}> Interest Form </button>
        </div>
    );
}

export default Rush;
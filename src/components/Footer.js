import React from 'react';
import styles from '../styles/footer.module.css'
import WhiteLetters from '../images/WhiteLetters.png'

const Footer = () => {
    
    function showCredits() {
        alert("Contributors:\n\nShreyas Deshpande\nDavis Kim\nTerence Mui\nJared Nagata\nNanma Pillai\nNuha Rahman\nBrandon Ta\nCatherine Truong")
    }

    return (
        <div className={styles.footer}>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
            <div className={styles.contents}>
                <div className={styles.buttons}>
                    <a href="https://thetatau.org" className={styles.tooltip} data-tooltip="National Website">
                        <img className={styles.letters} src={WhiteLetters} alt="Theta Tau Letters"/>
                    </a>
                    <a className={`${styles.insta} ${styles.tooltip}`} href='https://www.instagram.com/thetatauucr/' data-tooltip="Instagram">
                        <i className="bi bi-instagram"></i>
                    </a>
                    <a className={`${styles.mail} ${styles.tooltip}`} href="mailto:thetatauucr@gmail.com" data-tooltip="Email Us">
                        <i className="bi bi-envelope"></i>
                    </a>
                </div>
                <p className={styles.credits} onClick={showCredits}>Website Credits</p>
            </div>
        </div>   
    )   
};
  
export default Footer;

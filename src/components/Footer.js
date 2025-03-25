import React from 'react';
import styles from '../styles/footer.module.css'
import WhiteLetters from '../static/WhiteLetters.png'

const Footer = () => {
    
    function showCredits() {
        alert("Contributors:\n\nShreyas Deshpande\nJared Nagata\nDavis Kim\nTerence Mui\nNuha Rahman\nCatherine Truong\nBrandon Ta\nNanma Pillai")
    }

    return (
        <div className={styles.footer}>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
            <div className={styles.footerContents}>
                <div className={styles.buttons}>
                    <a href="https://thetatau.org">
                        <img id={styles.letters} src={WhiteLetters} alt="Theta Tau Letters"/>
                    </a>
                    <a id={styles.insta} href='https://www.instagram.com/thetatauucr/'>
                        <i className="bi bi-instagram"></i>
                    </a>
                    <a href="mailto:thetatauucr@gmail.com">
                        <i id={styles.mail} className="bi bi-envelope"></i>
                    </a>
                </div>
                <p className={styles.credits} onClick={showCredits}>Website Credits</p>
            </div>
        </div>   
    )   
};
  
export default Footer;

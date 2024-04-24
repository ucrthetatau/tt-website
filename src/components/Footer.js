import React from 'react';
import '../styles/footer.css'
import Letters from '../static/WhiteLetters.png'

const Footer = () => {
    
    function showCredits() {
        alert("Contributors:\n\nShreyas Deshpande\nJared Nagata\nDavis Kim\nTerence Mui\nNuha Rahman\nCatherine Truong\nBrandon Ta\nNanma Pillai")
    }

    return (
        <div class="footer">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
            <div class="footer-contents">
                <div class="buttons">
                    <a href="https://thetatau.org">
                        <img id="letters" src={Letters}/>
                    </a>
                    <a id="insta" href='https://www.instagram.com/thetatauucr/'>
                        <i  class="bi bi-instagram"></i>
                    </a>
                    <a href="mailto:thetatauucr@gmail.com">
                        <i id="mail" class="bi bi-envelope"></i>
                    </a>
                </div>
                <p class="credits" onClick={showCredits}>Website Credits</p>
            </div>
        </div>   
    )   
};
  
export default Footer;

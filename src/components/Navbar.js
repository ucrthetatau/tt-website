import classes from '../style/navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className={classes.head}>
            <div className={classes.title}>ucR tHetA tAu <br/> 
            <div className={classes.subhead}>
            siGMA delta cHApteR
                </div> 
           </div>
            <nav> 
                <ul>
                    <li>Home</li>
                    <li>Members</li>
                    <li>About</li>
                </ul>
            </nav>
        </header> 
    
    )

} 

export default Navbar; 
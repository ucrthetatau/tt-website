import classes from '../style/navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className={classes.head}>
            <nav> 
            <div className={classes.title}>ucr theta tau | sigma delta chapter</div>
                <ul className={classes.links}>
                    <li className={classes.active}>Hom</li> | 
                    <li className={classes.active}>Members</li> | 
                    <li className={classes.active}>About</li>
                </ul>
            </nav>
        </header> 
    
    )

} 

export default Navbar; 
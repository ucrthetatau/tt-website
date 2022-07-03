import classes from '../style/navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className={classes.head}>
            <div className={classes.title}>ucr theta tau</div>
            <div className={classes.subhead}>sigma delta chapter</div>
            <nav> 
                <ul className={classes.links}>
                    <li>Home</li> | 
                    <li>Members</li> | 
                    <li>About</li>
                </ul>
            </nav>
        </header> 
    
    )

} 

export default Navbar; 
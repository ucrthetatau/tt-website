
import fall_22 from '../static/fall_22.jpeg' 
import classes from '../style/rush.module.css'

const Rush = () => {
    return (
        <div className={classes.container}>
            <h1 className={classes.head}>fall Rush 2023</h1> 

        <div className={classes.content}> 
            <img src={fall_22} className={classes.pic} />
        <div className={classes.body}>
        ​Are you an engineer? Then come rush for Theta Tau! We're the only Co-ed Professional Engineering Fraternity at UCR. Theta Tau can help you in expanding your professional network, becoming a part of a brotherhood, giving back to the community, and becoming a better engineer.
        <br/> 
        Come and find out what we're all about! We are looking for motivated and bright individuals to become part of our Sigma Class!
        <br/> 
        Please fill out the interest form if you'd like to join us for our Spring Rush 2022!
        </div>
        </div> 
        <button className={classes.button}> Interest Form </button>
        </div>
       

    ); 


}; 

export default Rush; 
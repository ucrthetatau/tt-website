import { useEffect, useState } from 'react';
import LoadMembers from '../firebase/LoadMembers'
import classes from '../style/members.module.css'


const Members = () => {
    const { docs }  = LoadMembers('');
    const [render, setRender] = useState(false); 
    console.log(docs); 
    
     useEffect(() => {
        if (!render){
            setRender(true); 
        } 
     }); 

    return (
        <div className={classes.memberlist}>
            {docs && docs.map(doc => (
                <div key={doc.id} className="member-card">
                    {doc.name}
                    <img src={doc.photo}></img>
                </div>
            ))}
        </div>
    )

}; 

export default Members; 
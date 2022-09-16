import React, { useEffect, useState } from 'react';
import LoadMembers from '../firebase/LoadMembers'
import classes from '../style/members.module.css'
import Dropdown from './Dropdown'


const Members = () => {
    const [render, setRender] = useState(false); 
    const [member, setMember] = useState('founding'); 
    const { docs }  = LoadMembers(member);
  //  console.log(docs);



     useEffect(() => {
        if (!render){
            console.log(member); 
            setRender(true); 
        } 
     }); 

    return (
          <div>

            
          <Dropdown setMember={setMember}/> 

        <div className={classes.memberlist}>
            {docs && docs.map(doc => (
                <div key={doc.id} className={classes.membercard}>
                    <img src={doc.photo} className={classes.memberphoto}></img> 
                    {doc.name}
                    
                </div>
            ))}
        </div>
        </div> 
    )

}; 

export default Members; 
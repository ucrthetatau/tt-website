import { useEffect, useState } from 'react';
import LoadMembers from '../firebase/LoadMembers'

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
        <div>
            {docs && docs.map(doc => (
                <div key={doc.id}>
                    {doc.name}
                    <img src={doc.photo}></img>
                </div>
            ))}
    
        </div>
    )

}; 

export default Members; 
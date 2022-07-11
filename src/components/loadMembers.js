import {useState, useEffect } from 'react'; 
import { firestore } from '../firebase/config'; 

const LoadMembers = () => {
    [render, setRendered] = useState(0); 
    [err, setErr] = useState(null); 
    //[filter, setFilter] = useState(null); 

    async function getMembers(){
        var members = firestore.collection('members'); 
        await members.get().then(snapshot => {
            console.log(snapshot);

        }); 


    }


    
}; 

export default LoadMembers; 
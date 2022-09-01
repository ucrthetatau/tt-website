import firestore from './config'; 
import { collection, query, onSnapshot, where } from 'firebase/firestore'; 
import { useState, useEffect } from 'react';


const LoadMembers = (filter) => {
  const [docs, setDocs] = useState([]);

 useEffect(() => {
  const q = query(collection(firestore, 'members'), where("class", "==", filter));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let docs = []; 
      querySnapshot.forEach((doc) => {
        docs.push({...doc.data(), id: doc.id}); 
      }); 
      setDocs(docs); 
      console.log(docs); 
 

    }); 
    return () => unsub(); 
    

 }, [filter]); 
 
 return { docs }; 

}

export default LoadMembers;
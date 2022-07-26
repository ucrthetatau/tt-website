import firestore from './config'; 
import { collection, getDocs } from 'firebase/firestore'; 
import { useState, useEffect } from 'react';

const LoadMembers = (filter) => {
  const [docs, setDocs] = useState([]);
 useEffect(() => {
   
   async function getData() { 
    const membersRef = collection(firestore, 'members'); 
    const members = await getDocs(membersRef); 
    let documents = []; 
    members.forEach((doc) => {
        documents.push({...doc.data(), id: doc.id}); 
    }); 

    setDocs(documents); 

   } 

   getData(); 

 }, [filter])
  
 return { docs }; 
}

export default LoadMembers;
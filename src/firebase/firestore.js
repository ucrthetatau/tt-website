import firestore from './config'; 
import { collection, getDocs } from 'firebase/firestore'; 
import { useState, useEffect } from 'react';

const useFirestore = (filter) => {
  const [docs, setDocs] = useState([]);
 useEffect(() => {
    //default is last class? might be unncessary 
    const members = await getDocs(collection(firestore, 'members')); 
    let documents = []; 
    members.forEach((doc) => {
        documents.push({...doc.data(), id: doc.id}); 
    }); 
  
    setDocs(documents); 

 }, [filter])
  
 // return () => members();
 return { docs }; 
}

export default useFirestore;
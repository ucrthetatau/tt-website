import firestore from './config'; 
import { collection, query, onSnapshot } from 'firebase/firestore'; 
import { useState, useEffect } from 'react';

const LoadMembers = (filter) => {
  const [docs, setDocs] = useState([]);


  //   async function getData() { 
  //   const membersRef = collection(firestore, 'members'); 
  //   const members = 
    
    
  //   //await getDocs(membersRef).catch(err => {
  //   //    console.log(err);
  //  // }); 
  //   let documents = []; 
  //   members.forEach((doc) => {
  //       documents.push({...doc.data(), id: doc.id}); 
  //   }); 

  //   setDocs(documents);
  //  } 


 useEffect(() => {
    const q = query(collection(firestore, 'members')); 
    const unsub = onSnapshot(q, (querySnapshot) => {
      let docs = []; 
      querySnapshot.forEach((doc) => {
        docs.push({...doc.data(), id: doc.id}); 
      }); 
      setDocs(docs); 

    }); 
    return () => unsub(); 

 }, [filter]); 
  
 return { docs }; 

}

export default LoadMembers;
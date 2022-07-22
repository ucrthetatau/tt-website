import firestore from './config'; 
import { useState, useEffect } from 'react';

const useFirestore = (filter) => {
  const [docs, setDocs] = useState([]);
 useEffect(() => {
    //default is last class? might be unncessary 
    const members = firestore.collection(filter); 
    if (filter === ''){
        members.onSnapshot(
            (snap) => {
                console.log(snap); 
                let docs = []; 
                snap.forEach( i => {
                    docs.push({...i.data(), id: i.id}); 
                }); 
             setDocs(docs); 
                
            })
    } else {
        members.orderByChild('class').equalTo(filter).onSnapshot(
            (snap) => {
                let docs = []; 
                snap.forEach(i => { 
                    docs.push({...i.data(), id: i.id}); 
                }); 
                setDocs(docs);
            }
        )

    }
 }, [filter])
  
 // return () => members();
 console.log(docs); 
 return { docs }; 
}

export default useFirestore;
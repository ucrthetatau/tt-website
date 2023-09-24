import firestore from './config';
import { collection, query, onSnapshot, where, getDocs, QuerySnapshot } from 'firebase/firestore';
import { useState, useEffect } from 'react';

const LoadOfficers = (filter) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const q = query(collection(firestore, 'officers 2012-2013'), where("Class", "==", filter));
    // const q = query(collection(firestore, filter));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setDocs(docs);
    });
    return () => unsub();


  }, [filter]);

  return { docs };

}

export default LoadOfficers;
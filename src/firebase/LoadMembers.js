import { firestore } from './config';
import { collection, query, onSnapshot, where, getDocs, QuerySnapshot } from 'firebase/firestore';
import { useState, useEffect } from 'react';

const LoadMembers = () => {
  const [docs, setDocs] = useState([]);

  const membersQ = query(collection(firestore, 'members'));
  var members = {}
  const membersUnsub = onSnapshot(membersQ, (querySnapshot) => {
    querySnapshot.forEach((document) => {
      members[document.id] = document.data()
    });
  });

  useEffect(() => {
    const q = query(collection(firestore, 'classes'));
    var allClasses = [];
    const unsub = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((document) => {
        // console.log(document.id)
        let index = Object.keys(document.data())
        let names = Object.values(document.data())

        let temp = []

        for (let i = 0; i < names.length; ++i) {
          // console.log(names[i])
          try {
            temp[index[i]] = ({ ...members[names[i]] })
          }
          catch {
            console.log("not found")
          }
        }
        // console.log(temp)

        let tempMap = {
          Members: temp,
          Class: document.id
        }

        allClasses.unshift(tempMap)
        // console.log(allClasses)
        setDocs(allClasses);
      });
    });
    return () => unsub();
  });

  return { docs };

}

export default LoadMembers;
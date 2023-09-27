import { firestore } from './config';
import { collection, query, onSnapshot, where, getDocs, QuerySnapshot, doc, getDoc, orderBy, FieldPath } from 'firebase/firestore';
import { useState, useEffect } from 'react';

const LoadOfficers = (filter) => {
  const [docs, setDocs] = useState([]);

  const membersQ = query(collection(firestore, 'members'));
  var members = {}
  const membersUnsub = onSnapshot(membersQ, (querySnapshot) => {
    querySnapshot.forEach((document) => {
      members[document.id] = document.data()
    });
  });

  useEffect(() => {
    const q = query(collection(firestore, 'officers'));
    var officers = [];
    const unsub = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((document) => {
        // console.log(document.id)
        var positions = Object.keys(document.data())
        var names = Object.values(document.data())

        let temp = []

        for (let i = 0; i < names.length; ++i) {
          temp[positions[i][0]] = ({ ...members[names[i]], Position: positions[i].substring(1)})
        }

        var tempMap = {
          Info: temp,
          Term: document.id
        }

        // for (let i = 0; i < temp.length; ++i) {
        //   officers.push(temp[i])
        // }
        officers.unshift(tempMap)
        setDocs(officers);
      });
    });
    return () => unsub();


  }, [filter]);

  return { docs };

}
export default LoadOfficers;
// const LoadOfficers = (filter) => {
//   const [docs, setDocs] = useState([]);
//   const year = 'officers 2023-2024'

//   useEffect(() => {
//     const q = query(collection(firestore, year), where("Term", "==", filter));
//     // const q = query(collection(firestore, filter));
//     const unsub = onSnapshot(q, (querySnapshot) => {
//       let docs = [];
//       querySnapshot.forEach((doc) => {
//         docs.push({ ...doc.data(), id: doc.id });
//       });
//       setDocs(docs);
//     });
//     return () => unsub();


//   }, [filter]);

//   return { docs };

// }
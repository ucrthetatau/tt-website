// import { firestore } from '../firebase/config';
// import { collection, getDocs } from 'firebase/firestore';
// import { useState } from 'react';

// const QueryDB = () => {
    
//     const [memberList, setMemberList] = useState({});

//     const getMembers = async () => {
//         try {
//             let members = {}
//             const data = await getDocs(collection(firestore, "members"));
//             data.forEach((doc) => {
//                 members[doc.id] = doc.data()
//             });
//             setMemberList(members);
//             console.log(memberList)
//             return memberList;
//         } catch(e) {
//             console.error(e);
//         }    
//     }
    
// }

// export default QueryDB;
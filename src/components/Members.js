import { type } from '@testing-library/user-event/dist/type';
import { firestore } from '../firebase/config';
import { collection, query, onSnapshot, where, getDocs, QuerySnapshot } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import "../styles/members.css";

const Members = () => {

    const [memberArray, setMemberArray] = useState([]);
    const [memberById, setMemberById] = useState({});
    const [classMap, setClassMap] = useState({})
    const classes = ["Upsilon", "Tau", "Sigma", "Rho", "Pi", "Omicron", "Xi", "Nu", "Mu", "Lambda", "Kappa", "Iota", "Theta", "Eta", "Zeta", "Epsilon", "Delta", "Gamma", "Beta", "Alpha", "Founding"]   

    const getMembers = async () => {
        try {
            // Only one query
            const data = await getDocs(collection(firestore, "members"));

            // Get members by id
            let members = {}
            data.forEach((doc) => {
                members[doc.id] = doc.data()
            });
            setMemberById(members);
            
            // Get members array
            const filteredData = data.docs.map((doc) => ({
                ...doc.data(), 
                id: doc.id
            }));
            setMemberArray(filteredData);
            console.log(memberArray)
            console.log(memberById)
        } 
        catch(e) {
            console.error(e);
        }
    }

    const populateClassMap = () => {
        let newClassMap = {}
        memberArray.forEach((doc) => {
            try {
                newClassMap[doc.Class].push(doc.id)
            }
            catch {
                newClassMap[doc.Class] = [doc.id]
            }
        })
        setClassMap(newClassMap)
        console.log(classMap)
    }

    useEffect(() => {
        getMembers()
    }, [0])
    
    useEffect(() => {
        populateClassMap()
    }, [memberArray])

    return (
        <div id="container">
            {classes.map(currentClass => (
                <div class="group">
                    <div class="className">{currentClass}</div>
                    {classMap[currentClass]?.map((memberId) => (
                        <div class="member">
                            <img class="photo" src={memberById[memberId].Photo}></img>
                            <div class="name">{memberById[memberId].Name}</div>
                            <div class="major">{memberById[memberId].Major}</div>
                            <div class="year">{memberById[memberId].GraduatingClass}</div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
};

export default Members; 

// const renderMembers = () => {
//     const container = document.getElementById('container')

    // if (classMap[classes[0]] != undefined) {
    // const group = document.createElement('div')
    //     container?.appendChild(group)
    //     group.classList.add("group")

    //     const greek = document.createElement('div')
    //     group.appendChild(greek)
    //     greek.classList.add("className")
    //     greek.innerHTML = classes[0]

    //     const photo = document.createElement('img')
    //     photo.classList.add("photo")
    //     photo.src = `${memberById[classMap[classes[0]][0]].Photo}`
    //     group.appendChild(photo)

    //     const name = document.createElement('div')                      
    //     name.classList.add("name")
    //     name.innerHTML = memberById[classMap[classes[0]][0]].Name
    //     group.appendChild(name)

//     classes.forEach((currentClass) => {
//         const group = document.createElement('div')
//         container?.appendChild(group)
//         group.classList.add("group")

//         const greek = document.createElement('div')
//         group.appendChild(greek)
//         greek.classList.add("className")
//         greek.innerHTML = currentClass

//         // console.log(currentClass)
//         // group.innerHTML = `<div class="greek">${currentClass}</div>`

//         if (classMap[currentClass] != undefined) {

            

//             for (let i = 0; i < classMap[currentClass].length; i++) {
//                 const member = document.createElement('div')
//                 member.classList.add("member")

//                 // console.log(memberById[classMap[currentClass][i]])
//                 // member.innerHTML = `
//                 // <img class="photo" src=${memberById[classMap[currentClass][i]].Photo}></img>
//                 // <div class="name">${memberById[classMap[currentClass][i]].Name}</div>
//                 // <div class="major">${memberById[classMap[currentClass][i]].Major}</div>
//                 // <div class="year">${memberById[classMap[currentClass][i]].GraduatingYear}</div>
//                 // `
//                 // console.log(memberById[classMap[currentClass][i]])

//                 const photo = document.createElement('img')
//                 photo.classList.add("photo")
//                 photo.src = `${memberById[classMap[currentClass][i]].Photo}`

//                 const name = document.createElement('div')                   
//                 name.classList.add("name")
//                 name.innerHTML = memberById[classMap[currentClass][i]].Name

//                 const major = document.createElement('div')                        
//                 major.classList.add("major")
//                 major.innerHTML = memberById[classMap[currentClass][i]].Major

//                 const year = document.createElement('div')
//                 year.classList.add("year")
//                 year.innerHTML = memberById[classMap[currentClass][i]].GraduatingClass

//                 member.appendChild(photo)
//                 member.appendChild(name)
//                 member.appendChild(major)
//                 member.appendChild(year)
//                 group.appendChild(member)

//                 // console.log("hello")
//             }
//         }
//     })
// }
import { type } from '@testing-library/user-event/dist/type';
import { firestore } from '../firebase/config';
import { collection, query, onSnapshot, where, getDocs, QuerySnapshot } from 'firebase/firestore';
import { useState, useEffect } from 'react';
// import styles from "../styles/members.css";

const Members = () => {
    
    const [memberArray, setMemberArray] = useState([]);
    const [memberById, setMemberById] = useState({});
    const classes = ["Upsilon", "Tau", "Sigma", "Rho", "Pi", "Omicron", "Xi", "Nu", "Mu", "Lambda", "Kappa", "Iota", "Theta", "Eta", "Zeta", "Epsilon", "Delta", "Gamma", "Beta", "Alpha", "Founding"]   
    const classMap = {
        // "Upsilon": [],
        // "Tau": [],
        // "Sigma": [],
        // "Rho": [],
        // "Pi": [],
        // "Omicron": [],
        // "Xi": [],
        // "Nu": [],
        // "Mu": [],
        // "Lambda": [],
        // "Kappa": [],
        // "Iota": [],
        // "Theta": [],
        // "Eta": [],
        // "Zeta": [],
        // "Epsilon": [],
        // "Delta": [],
        // "Gamma": [],
        // "Beta": [],
        // "Alpha": [],
        // "Founding": []
    }

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
        } 
        catch(e) {
            console.error(e);
        }
    }

    const populateclassMap = () => {
        memberArray.forEach((doc) => {
            // classMap[doc.Class].push(doc.id)
            try {
                classMap[doc.Class].push(doc.id)
            }
            catch {
                classMap[doc.Class] = [doc.id]
            }
        })
    }

    const renderMembers = () => {
        const container = document.getElementById('container')
        // const temp = document.createElement('div')
        // temp.innerHTML = "hello"
        // container.appendChild(temp)
        classes.forEach((currentClass) => {
            const group = document.createElement('div')
            container.appendChild(group)
            group.innerHTML += `<div class="className">${currentClass}</div>`
            // const className = document.createElement('div')
            // className.innerHTML = currentClass
            // container.appendChild(className)

            if (classMap[currentClass] != undefined) {
            // let classMembers = classMap[currentClass]
            // let classSize = classMembers.length
            // console.log(classMembers.length)
            // console.log(classMembers)

                for (let i = 0; i < classMap[currentClass].length; i++) {
                    let name = memberById[classMap[currentClass][i]].Name
                    console.log(name)
                    const member = document.createElement('div')
                    group.appendChild(member)
                    member.innerHTML += `<div class="memberName">${name}</div>`
                    // console.log(typeof(classMap[currentClass][i]))
                }
            // try {
            //     if (classMembers != undefined) {
            //     for (let i = 0; i < classSize - 1; i++) {
            //         if (classMembers[i]) {
            //             console.log(memberById[`{classMembers[i]}`].Name)

            //         }
            //         // console.log("hello")
            //     }
            // }
            // }
            // catch(e) {
            //     console.log(e)
            // }
            
            // for (let [key, currentMember] of classMap[currentClass]) {
            //     const member = document.createElement('div')
            //     group.appendChild(member)
            //     member.innerHTML += `<div class="member">${memberById[currentMember].Name}</div>`
            // }
            // classMap[currentClass].forEach((currentMember) => {
            //     const member = document.createElement('div')
            //     group.appendChild(member)
            //     member.innerHTML += `<div class="member">${memberById[currentMember].Name}</div>`

            //     // const memberName = document.createElement('div')
            //     // console.log()
            //     // memberName.innerHTML = memberById[currentMember].Name
            //     // container.appendChild(memberName)
            // })
        }
        })
    }

    useEffect(() => {
        getMembers();
        populateclassMap();
        renderMembers();
    }, [0]);

    return (
        <div id="container">
            {/* {/* {classes.map((currentClass) => (
                <div class="group">
                    <h1 class="title"> {currentClass} </h1>
                    <h1 class="title"> {classMap[currentClass][0]} </h1>
                    {/* for (let i = 0; i < {classMap[currentClass]}.length}}) (
                        
                    ) 
                </div>
            ))}
            {memberArray.forEach((currentMember) => (
                <h1 class="member"> {memberById[currentMember].Name} </h1>
            ))} */}
        </div>
    )

};

export default Members; 
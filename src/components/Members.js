// import styles from "../styles/members.module.css"
// import LoadMembers from "../firebase/LoadMembers"
// import classes from "../styles/members.module.css"
// import { useState, useEffect } from "react"
// import Dropdown from "./MembersDropdown"

// const Members = () => {
//   const [render, setRender] = useState(false)
//   const [member, setMember] = useState("Upsilon") // should be the most recent class
//   const { docs } = LoadMembers(member)
//   console.log(docs)
//   useEffect(() => {
//     if (!render) {
//       console.log(member)
//       setRender(true)
//     }
//   })

//   return (
//     <div>
//       <Dropdown setMember={setMember} />
//       <div className={classes.memberlist}>
//         {docs &&
//           docs.map((doc) => (
//             <div key={doc.id} className={classes.membercard}>
//               <img src={doc.Photo} className={classes.memberphoto}></img>
//               {doc.Name}
//               <br></br>
//               {doc.Major}
//               <br></br>
//               {doc.GraduatingClass}
//             </div>
//           ))}
//       </div>
//     </div>
//   )
// }
// export default Members

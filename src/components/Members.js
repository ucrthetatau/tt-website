import styles from "../styles/members.module.css";
import LoadMembers from '../firebase/LoadMembers'
import classes from '../styles/members.module.css'
import { useState, useEffect } from 'react';

const Members = () => {
    const [render, setRender] = useState("");
    const [member, setMember] = useState(""); // should be the most recent class
    const { docs } = LoadMembers(member);

    console.log(docs);

    return (
        <div>
            <div className={classes.termlist}>
                {docs.map(doc => (
                    <div>
                        <p1>{doc.Class}</p1>
                        <div className={classes.memberlist}>
                            {
                                doc.Members.map(member => (
                                    <div key={member.id} className={classes.membercard}>
                                        <img src={member.Photo} className={classes.memberphoto}></img>
                                        {member.Name}
                                        <br></br>
                                        {member.Position}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};
export default Members; 
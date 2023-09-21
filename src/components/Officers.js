import styles from "../styles/officers.module.css";
import LoadOfficers from '../firebase/LoadOfficers'
import classes from '../styles/officers.module.css'
import { useState, useEffect } from 'react';

const Officers = () => {
    const [render, setRender] = useState("");
    const [member, setMember] = useState('2025');
    const { docs } = LoadOfficers(member);

    console.log(docs)

    return (
        <div>
            <div className={classes.termlist}>
                {docs.map(doc => (
                    <div>
                        <p1>{doc.Term}</p1>
                        <div className={classes.memberlist}>
                            {
                                doc.Info.map(officer => (
                                    <div key={officer.id} className={classes.membercard}>
                                        <img src={officer.Photo} className={classes.memberphoto}></img>
                                        {officer.Name}
                                        <br></br>
                                        {officer.Position}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))}




                {/* // {docs && docs.map(doc => (
                //     <div key={doc.id} className={classes.membercard}>
                //         <img src={doc.Photo} className={classes.memberphoto}></img>
                //         {doc.Name}
                //         <br></br>
                //         {doc.Position}
                //         <br></br>
                //         {doc.Term}
                //     </div>
                // ))} */}
            </div>
        </div>
    )
};
export default Officers; 
import styles from "../styles/officers.module.css";
import LoadOfficers from '../firebase/LoadOfficers' //Members
import classes from '../styles/officers.module.css'
import { useState, useEffect } from 'react';
import Dropdown from './OfficersDropdown'

const Officers = () => {
    const [render, setRender] = useState(false);
    const [member, setMember] = useState('Founding');
    const { docs } = LoadOfficers(member);
    console.log(docs);
    useEffect(() => {
        if (!render) {
            console.log(member);
            setRender(true);
        }
    });

    return (
        <div>
            <Dropdown setMember={setMember} />
            <div className={classes.memberlist}>
                {docs && docs.map(doc => (
                    <div key={doc.id} className={classes.membercard}>
                        <img src={doc.Photo} className={classes.memberphoto}></img>
                        {doc.Name}
                        <br></br>
                        {doc.Position}
                    </div>
                ))}
            </div>
        </div>
    )
};
export default Officers; 
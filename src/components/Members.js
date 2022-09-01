import { useEffect, useState } from 'react';
import LoadMembers from '../firebase/LoadMembers'
import classes from '../style/members.module.css'


const Members = () => {
    const [render, setRender] = useState(false); 
    const [memberSelect, selectMember] = useState('sigma'); 
    const { docs }  = LoadMembers(memberSelect);
    console.log(docs); 

    function handleSubmit(e) {
        selectMember(e.target.value);
    }

    function handleChange(e) {
        selectMember(e.target.value);
        console.log(memberSelect); 
    }
    
     useEffect(() => {
        if (!render){
            setRender(true); 
        } 
     }); 

    return (
        <div> 
        <p>Members</p>
        <form onSubmit={handleSubmit}>
          <label>
            <select value={memberSelect} onChange={handleChange}>
              <option value="alpha">Alpha</option>
              <option value="beta">Beta</option>
              <option value="gamma">Gamma</option>
              <option value="delta">Delta</option>
              <option value="zeta">Zeta</option>
              <option value="eta">Eta</option>
              <option value="theta">Theta</option>
              <option value="iota">Iota</option>
              <option value="kappa">Kappa</option>
              <option value="lambda">Lamda</option>
              <option value="mu">Mu</option>
              <option value="nu">Nu</option>
              <option value="xi">Xi</option>
              <option value="omicron">Omicron</option>
              <option value="pi">Pi</option>
              <option value="rho">Rho</option>
              <option value="sigma">Sigma</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>

        <div className={classes.memberlist}>
            {docs && docs.map(doc => (
                <div key={doc.id} className={classes.membercard}>
                    <img src={doc.photo} className={classes.memberphoto}></img> 
                    {doc.name}
                    
                </div>
            ))}
        </div>
        </div> 
    )

}; 

export default Members; 
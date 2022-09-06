import { useEffect, useState } from 'react';
import LoadMembers from '../firebase/LoadMembers'
import classes from '../style/members.module.css'


const Members = () => {
    const [render, setRender] = useState(false); 
    const [memberSelect, selectMember] = useState('founding'); 
    const { docs }  = LoadMembers(memberSelect);
  //  console.log(docs);

  
    function handleChange(e) {
        selectMember(e.target.value);
        docs = LoadMembers(memberSelect); 
        e.preventDefault(); 
    }
    
     useEffect(() => {
        if (!render){
            setRender(true); 
        } 
     }); 

    return (
        <div> 
        <p className={classes.head}>{memberSelect} Class</p>
        <form className={classes.dropdown}>
          <label>
            <select value={memberSelect} onChange={handleChange}>
            <option value="founding">Founding</option>
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
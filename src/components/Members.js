import LoadMembers from '../firebase/LoadMembers'
import Member from './Member'
 import { useEffect, useState } from'react'; 

const Members = () => {
    const curr = LoadMembers(''); 
    console.log(curr); 
    return (
        <div>
            duck


        </div>
    )

}; 

export default Members; 
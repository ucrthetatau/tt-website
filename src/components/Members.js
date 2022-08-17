import { useEffect, useState } from 'react';
import LoadMembers from '../firebase/LoadMembers'
import Member from './Member'

const Members = () => {
    const { docs } = LoadMembers('');
    console.log(docs); 
    
    return (
        <div>
    
        </div>
    )

}; 

export default Members; 
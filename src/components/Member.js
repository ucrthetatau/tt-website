

const Member = (info) => {

    return (
        <div className="member-card" key={info.id}>
             <img src={info.photo} alt="" width="500" height="500" className="photo"/>            
            <h1>{info.name}</h1> <br/> 
            <p>{info.major}</p>
        </div>

    ); 


}; 

export default Member; 
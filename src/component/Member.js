import React from 'react';
import './Member.css'

const Member = ({value}) => {
    return ( <div className="member-container" >
    <img src={value.image} alt="profile"/>
    <div>
        <p className="name">{value.name}</p>
        <p className="email"> {value.email}</p>
    </div>
    {value.online ? <p className="online">Online</p> : <p>Offline</p>}
    </div> );
}
 
export default Member;
import React from 'react';
import "./Userinfo.css"

const Userinfo = ({user}) => {
    return (  
        <div className="userdetail">
        <img src={user.image} className="img" alt="profile" />
        <div className= "name-email"><p>{user.name}</p>
        <p>{user.email}</p>
        </div>
        </div>
    );
}
 
export default Userinfo;
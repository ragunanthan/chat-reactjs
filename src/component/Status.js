import React from 'react';
import "./Status.css"

const Status = ({data}) => {
    return (       <div className="status">
        <div  className="status-bg"><p>{data}</p></div>
    </div> );
}
 
export default Status;
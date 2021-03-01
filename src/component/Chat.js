import React from 'react';
import Status from "./Status.js";
import Msg from "./Msg.js";

const Chat = ({data, userdata}) => {
    return (  
        <>
        {Object.entries(data).map(([key, value], i) => <div key={key}>
            {value.type === "status" ? <Status data={value.msg}/>: <Msg data={value} name={userdata.name}/>}
        </div>) }
        </>
    );
}
 
export default Chat 

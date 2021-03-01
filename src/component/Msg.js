import React from "react";
import "./Msg.css";

const Msg = ({ data, name }) => {
  return (
    <>
      {name === data.name ? (
        <div className="msg-right">
          <p>.</p>

          <div className="user-msg">
          
            <p>{data.msg}</p>
          </div>
        </div>
      ) : (
        <div className="msg-left">
          <div className="msg-data">
        <p>{data.name}{data.date}</p>
            <p>{data.msg}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Msg;

import React from 'react';
import { Button } from 'react-bootstrap';
import "./Header.css";
const Header = ({signout, signup}) => {
    return (
        <div className="header-content">
        <p>Public Group</p>
        <div>
        {signup? <Button variant="danger" onClick={signout}> Signout</Button> : null}</div>
        </div>
      );
}
 
export default Header;
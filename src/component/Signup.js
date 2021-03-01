import React from 'react';
import { Button } from 'react-bootstrap';
import "./Signup.css";
const Signup = ({signup}) => {
    return ( 
        <div className="signup">
            <h5>Welcome </h5>

            <div className= "mobile-signin">
            <Button variant="primary" onClick={signup}>Sigin with Google</Button>
            </div>
        </div>
     );
}
 
export default Signup;
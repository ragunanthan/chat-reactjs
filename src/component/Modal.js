import React from "react";
import { Modal, Button } from "react-bootstrap";
import Member from './Member';

const Viewodal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Menu{" "}
          {props.newsignup ? (
            <Button variant="danger" onClick={props.signout}>
              signOut
            </Button>
          ) : (
            <Button variant="primary" onClick={props.signup}>
              Sigin with Google
            </Button>
          )}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <h5>Active User</h5>
      <div>
      {Object.entries(props.members).map(([key, value], i) => <Member value={value} key={key}/>) }
      </div>
      </Modal.Body>
    </Modal>
  );
};

export default Viewodal;

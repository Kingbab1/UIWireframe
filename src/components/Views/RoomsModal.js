import React from "react";
import { Row, Col, Modal, Button } from "react-bootstrap";

export function RoomsModal(props, state) {
    const [show, setShow] = React.useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
       
      <>
        <Button
          className="mt-5"
          as="pill"
          variant="outline-primary"
          size="lg"
          onClick={handleShow}
          block
          >
          View Devices
        </Button>
  
        <Modal size="lg" centered show={show} onHide={handleClose} animation>
          <Modal.Header closeButton>
            <Modal.Title>{props.data.Name}</Modal.Title>
          </Modal.Header>
          <Modal.Body><h5>This room contains the following devices:<br></br> {props.data.Devices[0]} <br></br> {props.data.Devices[1]} <br></br> {props.data.Devices[2]} <br></br> {props.data.Devices[3]}</h5>
          <br></br>
          <h4>Add a New Device</h4>
          <p>Device Name</p>
          <input></input>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
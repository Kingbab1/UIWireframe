import React from "react";
import { Row, Col, Modal, Button } from "react-bootstrap";


export function NewModal(props, state) {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const populateArray = () => {
    let d = props.data.Modal.Unit;
    
    let temp = d.map((device) => (
      <Row>
        
      </Row>
    ));
  };

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
        {props.data.Name}
      </Button>

      <Modal show={show} onHide={handleClose} animation>
        <Modal.Header closeButton>
          <Modal.Title>{props.data.Name}</Modal.Title>
        </Modal.Header>
        <Row className="mt-3 mb-2 justify-content-center">
          <GarageDoor subdata={props.data.Modal.Unit[0]}></GarageDoor>
        </Row>
        <Row className="mt-3 mb-2 justify-content-center">
          <GarageDoor subdata={props.data.Modal.Unit[1]}></GarageDoor>
        </Row>

        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

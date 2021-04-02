import React from "react";
import { Row, Col, Modal, Button } from "react-bootstrap";
import Thermometer from "../Devices/Thermometer";

export function ThermModal(props, state) {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //const tempData = props.subdata.Params[0].Temp

  
  

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
          <Thermometer subdata={props.data.Modal.Unit[0]} changeRootdata={props.changeRootdata} RootData={props.RootData} target={props.target}></Thermometer>
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

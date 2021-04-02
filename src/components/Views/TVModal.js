import React from "react";
import { Row, Col, Modal, Button } from "react-bootstrap";
import TV from "../Devices/TV";

export function TVModal(props, state) {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const populateArray = () => {
    let d = props.data.Modal.Unit;
    let t = [];
    //console.log(props)
    for(let i = 0; i < d.length; i++)
    {
      t.push(
        <Row className="mt-3 mb-2 justify-content-center">
          <TV subdata={props.data.Modal.Unit[i]} changeRootdata={props.changeRootdata} RootData={props.RootData} target={props.target}></TV>
        </Row>
      )
    }

    return t;
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
        {populateArray()}

        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

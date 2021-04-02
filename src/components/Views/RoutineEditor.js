import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import {Link} from 'react-router-dom';
import RoutineDeviceCard from "../../components/RoutineDeviceCard";

const titleCardArray = require("../../resources/RoutineDeviceTypes.json");

class Rooms extends React.Component {
    state = {
        cards: titleCardArray.map((tempcard) => (
          <Col xs={2} className="mb-3 mt-3">
            <RoutineDeviceCard data={tempcard}></RoutineDeviceCard>
          </Col>
        )),
      };
  
    render() {
      return (
        <Container fluid>
        <Row className="mt-5 mb-5">
          <Col md={4}>
            <h2>Create a Routine</h2>
          </Col>
          <Col md={8}>
            <div style={{float: "right"}}>
              <Link to='/Routines'>
                <Button variant="primary">Save</Button>{' '}
              </Link>
              <Link to='/Routines'>
                <Button variant="secondary">Cancel</Button>{' '}
              </Link>
            </div>
          </Col>
        </Row>
        <Row className="mt-5 mb-5">
          <Col md={6}>
            <div style={{float: "right"}}>
              <h3>Name: </h3>
              <input></input>
            </div>
          </Col>
          <Col md={6}>
            <h3>Time</h3>
            <input type="date" id="date" name="date"></input>
          </Col>
        </Row>
        <Row className="mt-5 mb-5">
          <Col md={2}></Col>
          <Col md={8}>
            <Row>{this.state.cards}</Row>
          </Col>
          <Col md={2}></Col>
        </Row>
      </Container>
      );
    }
  }

export default Rooms;
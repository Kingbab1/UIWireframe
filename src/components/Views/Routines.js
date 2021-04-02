import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import {Link} from 'react-router-dom';
import RoutinesCard from "../../components/RoutinesCard";

const titleCardArray = require("../../resources/RoutinesCards.json");

class Rooms extends React.Component {
    state = {
        cards: titleCardArray.map((tempcard) => (
          <Col xs={4} className="mb-3 mt-3">
            <RoutinesCard data={tempcard}></RoutinesCard>
          </Col>
        )),
      };
  
    render() {
      return (
        <Container fluid>
        <Row className="mt-5 mb-5">
          <Col md={10}>
            <div style={{float: "right"}}>
              <Link to='/RoutinesEditor'>
                <Button variant="primary">New</Button>{' '}
              </Link>
              <Link to='/Modes'>
                <Button variant="secondary">Back</Button>{' '}
              </Link>
            </div>
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
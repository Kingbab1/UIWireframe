import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import ModesCard from "../../components/ModesCard";

const titleCardArray = require("../../resources/ModesCards.json");
class Modes extends React.Component {

  render() {
    return (
      <Container fluid>
      <Row className="mt-5 mb-5"> 
        <Col md={2}></Col>
        <Col md={8}>
          <Row>
            <Col xs={4} className="mb-3 mt-3">
              <ModesCard data={titleCardArray[0]} changeMode={this.props.changeSlot}></ModesCard>
            </Col>
            <Col xs={4} className="mb-3 mt-3">
              <ModesCard data={titleCardArray[1]} changeMode={this.props.changeSlot}></ModesCard>
            </Col>
          </Row>
        </Col>
        <Col md={2}></Col>
      </Row>
    </Container>
    );
  }
}

export default Modes;
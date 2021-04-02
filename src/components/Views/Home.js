import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import OptionCard from "../../components/card";

const startCardArray = require("../../resources/mainPagecards.json");

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.changeDeviceState = this.changeDeviceState.bind(this);

  }
  state = {
    titleCardArray: this.props.data,
    
    cards: this.props.data.map((tempcard) => (
      <Col xs={4} className="mb-3 mt-3">
        <OptionCard data={tempcard} changeRootState={() => this.changeDeviceState} RootData={startCardArray} target={this}></OptionCard>
      </Col>
    )),
  };

  changeDeviceState(val, target){


    
    this.setState({
      titleCardArray: val,
      cards: val.map((tempcard) => (
        <Col xs={4} className="mb-3 mt-3">
          <OptionCard data={tempcard} changeRootState={() => this.changeDeviceState} RootData={val}></OptionCard>
        </Col>
      ))
    });
  }

  
  render() {
    return (
      <Container fluid>
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

export default Home;

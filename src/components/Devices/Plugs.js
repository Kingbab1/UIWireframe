import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

class Plug extends React.Component {
  constructor(props) {
    super(props);
    this.getButton = this.getButton.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.state = {
      status: this.props.subdata.Status

    };
  }


  
  getButton() {
    if (this.state.status === "On") {
      return (
        <Button variant="danger" onClick={() => this.changeStatus()}>
          Turn Off{" "}
        </Button>
      );
    } else
      return (
        <Button variant="success" onClick={() => this.changeStatus()}>
          Turn On{" "}
        </Button>
      );
  }

  changeStatus() {
    if (this.state.status === "On") {
      this.setState({ status: "Off" });
    } else this.setState({ status: "On" });
  }

  componentWillUnmount()
  {
    console.log("--------------------------")
    let temp = this.props.RootData;
    console.log(temp)
    console.log("--------------------------")
    temp[5].Modal.Unit[this.props.subdata.id].Status = this.state.status;
    //temp[1].Modal.Unit[this.props.subdata.id].Params[0].Channel = this.state.slot 
    this.props.changeRootdata(temp, this.props.target)
  }

  render() {
    return (
      <Row>
        <Col xs={5}>
          <h5>{this.props.subdata.Name}</h5>
        </Col>
        <Col xs={5}>
          {this.getButton()}
        </Col>
        <Col></Col>
      </Row>
    );
  }
}

export default Plug;

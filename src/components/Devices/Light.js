import React from "react";
import { Form, Row, Col, Button, Image } from "react-bootstrap";

class Light extends React.Component {
  constructor(props) {
    super(props);
    this.getButton = this.getButton.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.getImage = this.getImage.bind(this);
    this.state = {
      status: this.props.subdata.Status,
      img: require("../../resources/images/rsz_color.png"),
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

  componentWillUnmount() {
    console.log("--------------------------");
    let temp = this.props.RootData;
    console.log(temp);
    console.log("--------------------------");
    temp[2].Modal.Unit[this.props.subdata.id].Status = this.state.status;
    //temp[1].Modal.Unit[this.props.subdata.id].Params[0].Channel = this.state.slot
    this.props.changeRootdata(temp, this.props.target);
  }

  getImage()
  {
    if(this.state.status === "On")
    return <Image thumbnail src={this.state.img}></Image>
    else return <> </>
  }

  render() {
    return (
      <>
      <Row>
        <Row>
          <Col xs={5}>
            <h5>{this.props.subdata.Name}</h5>
          </Col>
        </Row>
        <Col xs={5}>
          <Form>
            {this.getButton()}
            <Form.Label>Brightness</Form.Label>
            <Form.Control type="range" />
          </Form>
        </Col>
        <Col></Col>
      </Row>
      <Row>
      {this.getImage()}
      </Row>
      </>
    );
  }
}

export default Light;

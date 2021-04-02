import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

import {
  BsFillSkipBackwardFill,
  BsFillPlayFill,
  BsFillSkipForwardFill,
} from "react-icons/bs";

const songs  = [
  {
    Name: "Cardigan",
    By: "Taylor Swift",
  },
  {
    Name: "Rockstar",
    By: "DaBaby Featuring Roddy Ricch",
  },
  {
    Name: "Whats Poppin",
    By: "Jack Harlow Featuring DaBaby,...",
  },
  {
    Name: "The 1",
    By: "Taylor Swift",
  },
  {
    Name: "Blinding Lights",
    By: "The Weeknd",
  },
  {
    Name: "Exile",
    By: "Taylor Swift Featuring Bon Iver",
  },
  {
    Name: "Watermelon Sugar",
    By: "Harry Styles",
  },
  {
    Name: "Roses",
    By: "SAINt JHN",
  },
  {
    Name: "Savage",
    By: "Megan Thee Stallion",
  },
  {
    Name: "Savage Love",
    By: "Jawsh 685 x Jason Derulo",
  }
];

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.getButton = this.getButton.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    //this.getInfo = this.getInfo().bind(this);

    this.state = {
      status: this.props.subdata.Status,
      isplaying: false,
      slot:0
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

  /*getInfo()
  {
    
      return (
        <>
        <Row>
          {songs[this.state.slot].Name}
        </Row>
        <Row>
          By: {songs[this.state.slot].By}
        </Row>
        </>
      )
    
  }*/
  componentWillUnmount()
  {
    console.log("--------------------------")
    let temp = this.props.RootData;
    console.log(temp)
    console.log("--------------------------")
    temp[3].Modal.Unit[this.props.subdata.id].Status = this.state.status;
    //temp[1].Modal.Unit[this.props.subdata.id].Params[0].Channel = this.state.slot 
    this.props.changeRootdata(temp, this.props.target)
  }

  render() {
    return (
      <Row>
        <Row>
        <Col xs={5}>
          <h5>{this.props.subdata.Name}</h5>
        </Col>
        </Row>
        {}
        <Col xs={5}>
          <Form>
            {this.getButton()}
            <Form.Label className="mt-2">Volume</Form.Label>
            <Form.Control type="range" />
            <Row>
              <BsFillSkipBackwardFill className="ml-4 mr-2"></BsFillSkipBackwardFill>
              <BsFillPlayFill className="ml-3 mr-2"></BsFillPlayFill>
              <BsFillSkipForwardFill className="ml-3 mr-2"></BsFillSkipForwardFill>
            </Row>
          </Form>
        </Col>

        <Col xs={2}></Col>
        <Col></Col>
      </Row>
    );
  }
}

export default MusicPlayer;

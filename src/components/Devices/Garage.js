import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { FaLockOpen, FaLock } from "react-icons/fa";

class GarageDoor extends React.Component {
  constructor(props) {
    super(props);
    this.getIcon = this.getIcon.bind(this);
    this.changeIcon = this.changeIcon.bind(this);
    this.state = {
      status: this.props.subdata.Status
    };
  }

  //returns an icon image based on status
  getIcon() {
    if (this.state.status === "open")
    { 

      return <Button variant="danger" onClick={() => this.changeIcon()}>Lock Door <FaLock></FaLock></Button>;

    }
    else return <Button variant="success" onClick={() => this.changeIcon()}>Open Door <FaLockOpen></FaLockOpen></Button>;
  }

  

  changeIcon()
  {
    if (this.state.status === "open")
    {
    this.setState({ status: "closed" })
    } 
    else
    this.setState({ status: "open" })
    
  }

  componentWillUnmount()
  {
    let temp = this.props.RootData;
    //temp;
    temp[0].Modal.Unit[this.props.subdata.id].Status = this.state.status;
    this.props.changeRootdata(temp, this.props.target)
  }

  render() {
    return (
      <Row >
        <Col xs={5}>
          <h5>{this.props.subdata.Name}</h5>
        </Col>
        <Col xs={5} >
          

          {console.log(this.props.subdata)}
        </Col>
        <Col xs={2}>
          {this.getIcon()}
        </Col>
      </Row>
    );
  }
}

export default GarageDoor;

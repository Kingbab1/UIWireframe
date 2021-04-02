import React from "react";
import { Form, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";
import { FaTemperatureHigh } from "react-icons/fa";

class Light extends React.Component {
  constructor(props) {
    super(props);
    this.changeTemp = this.changeTemp.bind(this);
    this.changeType = this.changeType.bind(this);
    this.getSymbol = this.getSymbol.bind(this);
    this.getmax = this.getmax.bind(this);
    this.getmin = this.getmin.bind(this);
    this.getSymbol = this.getSymbol.bind(this);
    this.state = {
      Temp: this.props.subdata.Params[0].Temp,
      Max: this.getmax(),
      Min: this.getmin(),
      Type: this.props.subdata.Params[0].Type,
    };
  }

  getmax()
  {
    if(this.props.subdata.Params[0].Type === "F")
    return 91
    else return Math.round(33 * (9 / 5) + 32);
  }

  getmin()
  {
    if(this.props.subdata.Params[0].Type === "F")
    return 50;
    else return Math.round(10 * (9 / 5) + 32)
  }

  getSymbol() {
    console.log(this.props);
    if (this.state.Type === "F") return "Celsius";
    else return "Fahrenheit";
  }

  changeTemp(val) {
    let t = this.state.Temp;
    if (val === true) {
      if (t < this.state.Max) this.setState({ Temp: ++t });
    } else {
      if (t > this.state.Min) {
        this.setState({ Temp: --t });
      }
    }
  }

  //Changes all the constants to Celsius if val === true or if its false changes it to Fahrenheit
  changeType(val) {
    let c = "C";
    let f = "F";
    //Fahrenheit : Celsius

    if (this.state.Type === f) {
      let tempT = Math.round((this.state.Temp - 32) * (5 / 9));
      let tempMax = Math.round((this.state.Max - 32) * (5 / 9));
      let tempMin = Math.round((this.state.Min - 32) * (5 / 9));

      this.setState({
        Temp: tempT,
        Max: tempMax,
        Min: tempMin,
        Type: c,
      });
    } else if (this.state.Type === c) {
      let tempT = Math.round(this.state.Temp * (9 / 5) + 32);
      let tempMax = Math.round(this.state.Max * (9 / 5) + 32);
      let tempMin = Math.round(this.state.Min * (9 / 5) + 32);
      this.setState({
        Temp: tempT,
        Max: tempMax,
        Min: tempMin,
        Type: f,
      });
    }
  }

  componentWillUnmount() {
    console.log("--------------------------");
    let temp = this.props.RootData;
    console.log(temp);
    console.log("--------------------------");
    temp[4].Modal.Unit[0].Params[0].Type = this.state.Type;
    temp[4].Modal.Unit[0].Params[0].Temp = this.state.Temp;
    this.props.changeRootdata(temp, this.props.target);
  }

  render() {
    return (
      <>
        <Row>
          <Col xs={5}>
            <FaTemperatureHigh
              size={64}
              className="mr-5 mt-3"
            ></FaTemperatureHigh>
          </Col>
          <Col xs={5}>
            <Row>
              <Button onClick={() => this.changeTemp(true)}>
                <BsCaretUpFill></BsCaretUpFill>
              </Button>
            </Row>
            <Row>
              <h4>
                {this.state.Temp} {this.state.Type}
              </h4>
            </Row>
            <Row>
              <Button onClick={() => this.changeTemp(false)}>
                <BsCaretDownFill></BsCaretDownFill>
              </Button>
            </Row>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Button pill onClick={() => this.changeType()}>
            Change to {this.getSymbol()}
          </Button>
        </Row>
      </>
    );
  }
}

export default Light;

import React from "react";
import {Card, Button} from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

let num = 0;

class ModesCard extends React.Component {
  constructor(props) {
    super(props);
    this.change = this.change.bind(this);
  }
  
  change(id) {
    console.log(num);
    if(id == 1) {
      return this.props.changeMode(id);
    } 
    if(num > 1 && id == 0) {
      return this.props.history.push("/");
    }
    num++;
  }

  render() {
    return (
      <Card border="primary" className="h-60 shadow-sm bg-white rounded justify-content-md-center">
        <Card.Body className="d-flex flex-column justify-content-md-center">
         {this.props.data.Name} 
         <Link to="/" onClick={this.change(this.props.data.ID)}>Enable</Link>
        </Card.Body>
      </Card>
    );
  }
}

export default withRouter(ModesCard);

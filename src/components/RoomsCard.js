import React from "react";
import {Card} from "react-bootstrap";
import {
  BsFillHouseFill,
  BsFillDisplayFill,
  BsMusicNoteBeamed,
  BsPlug,
  BsFillPlusCircleFill
} from "react-icons/bs";
import { GiLightBulb } from "react-icons/gi";
import { WiThermometer } from "react-icons/wi";
import {RoomsModal} from './Views/RoomsModal';

class RoomsCard extends React.Component {
  constructor(props) {
    super(props);
    this.pickImage = this.pickImage.bind(this);
    
  }
  
  state2 = {
    images:
    {
     "BsFillHouseFill": BsFillHouseFill,
      "BsFillDisplayFill":BsFillDisplayFill,
      "GiLightBulb":GiLightBulb ,
      "BsMusicNoteBeamed":BsMusicNoteBeamed,
      "BsPlug":BsPlug,
      "BsFillPlusCircleFill":BsFillPlusCircleFill,
      "WiThermometer": WiThermometer
    }
  };

  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  pickImage()
  {
    var Img = this.state2.images[this.props.data.Image]
    return  ( 
    <div className="p-2 d-flex justify-content-md-center"  style={{color: 'SteelBlue'}}>
        <Img size={64} />
    </div>)
  }

  render() {
    return (
      <Card border="primary" className="h-60 shadow-sm bg-white rounded justify-content-md-center">
        <Card.Header className='bg-white'>{this.props.data.Name}</Card.Header>
        <Card.Body className="d-flex flex-column justify-content-md-center">
         {this.props.data.NumDevices} Devices
         <RoomsModal data={this.props.data} show={this.state.show} handleClose={this.hideModal}>
        </RoomsModal>
        </Card.Body>
      </Card>
    );
  }
}

export default RoomsCard;

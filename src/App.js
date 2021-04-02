import React, { Component } from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CustomNav from './components/navbar'
import Home from './components/Views/Home';
import Modes from './components/Views/Modes';
import Rooms from './components/Views/Rooms';
import Routines from './components/Views/Routines';
import RecentlyViewed from './components/Views/RecentlyViewed';
import RoutinesEditor from './components/Views/RoutineEditor';

class App extends Component {
  constructor(props) {
    super(props);
    this.changeSlot = this.changeSlot.bind(this);
  }

  state = { slot: 0, document: [require("./resources/mainPagecards.json"), require("./resources/mainPagecardNightMode.json")] }

  changeSlot(id) {
    this.setState({slot: 1});
  }

  render() { 
    return ( 
      <Router>
      <CustomNav />
      <Switch>
       <Route path="/" exact component={ () => <Home data={this.state.document[this.state.slot]}></Home> } />
       <Route path="/Modes" component={ () => <Modes changeSlot={ () => this.changeSlot}></Modes> } />
       <Route path="/Rooms" component={ Rooms } />
       <Route path="/Routines" component={ Routines } />
       <Route path="/RecentlyViewed" component={ RecentlyViewed } />
       <Route path="/RoutinesEditor" component={RoutinesEditor} />
      </Switch>
    </Router>
     );
  }
}

export default App;

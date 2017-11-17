import React, { Component } from 'react';
import logo from './../img/logo.svg';
import './../css/Acceuil.css';

class Acceuil extends Component {
  constructor() {
    super()
    this.state = {
      backgroundColor : "#f62"
    }
  }

  getBackgroundColor(){
    return this.state.backgroundColor
  }
  getBackgroundPicture(){
    return this.state.backgroundPicture
  }

  render() {
    return (
      <div className="App">
      </div>

    );
  }
}

export default Acceuil;

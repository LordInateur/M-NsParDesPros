import React, { Component } from 'react';
import logo from './../img/logo.svg';
import './../css/Acceuil.css';

class Acceuil extends Component {
  backColor = "#f62"
  render() {
    return (
      <div className="App">
        <header className="Acc-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="Acc-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>

    );
  }
}

export default Acceuil;

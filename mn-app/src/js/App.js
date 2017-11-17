import React, { Component } from 'react';
import logo from './../img/logo.svg';
import './../css/App.css';
//import data from './../../dataBase.json';

class App extends Component {
  backColor = "#79F"

  getCols() {
    return (<div className="col-md-4">
      You Noob
    </div>)
  }

  render() {
    return (
      <div className="App container">
        <header className="App-header">
        </header>
        <h1 className="App-title">Alors dites moi ... </h1>
        <p className="App-intro">
          Comment comptez vous utiliser votre machine ?
        </p>
        <p className="App-content container">
          I nead a dollar, dollars is what I need, hey hey !
          {this.getCols()}
        </p>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './../img/logo.svg';
import './../css/App.css';
import dataBase from './../data/dataBase.json';

class App extends Component {
  constructor() {
    //this.setState({backColor : "#333"})
    super()
    this.state = {
      backgroundColor : "#79F"
    }
  }

  getBackgroundColor(){
    return this.state.backgroundColor
  }

  getCols() {
    var cols = [];
    for(var categorie in dataBase.categories) {
      cols.push(this.getCol(categorie) );
    }
    return (<div className="row"> {cols} </div>)
  }

  getCol(categorie) {
    return (<div className="col-md-4">
      {categorie}
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

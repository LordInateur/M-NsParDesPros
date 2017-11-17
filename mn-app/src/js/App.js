import React, { Component } from 'react';
import logo from './../img/logo.svg';
import './../css/App.css';
import dataBase from './../data/dataBase.json';

class App extends Component {
  constructor() {
    //this.setState({backColor : "#333"})
    super()
    this.state = {
      backgroundColor : "#79F",
      cols : [],
      appData : dataBase
    }
  }

  componentWillMount(){
  }

  getBackgroundColor(){
    return this.state.backgroundColor
  }

  getCols() {
    var newCols = []
    for(var categorie in this.state.appData.categories) {
      newCols.push(this.getCol(categorie))
    }
    // newCols.sort(
    //   (a,b) => (a < b) ? 1 : -1
    // );
    this.setState({cols : newCols});
    return (<div className="row"> {newCols} </div>)
  }

  getCol(categorie) {
    var objCategorie = dataBase.categories[categorie];
    return (
    <div className="col-md-4 App-categorie">
      <h3  title={objCategorie.title}>{objCategorie.name}</h3>
      <img src={objCategorie.icone}/>
      <button> Choisir </button>
      <p>{objCategorie.description}</p>
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

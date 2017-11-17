import React, { Component } from 'react';
import logo from './../img/logo.svg';
import './../css/App.css';
import dataBase from './../data/appData.json';

class App extends Component {
  constructor() {
    super()
    this.state = {
      backgroundColor : "#79F",
      backgroundPicture : "http://www.bordeaux-depannage-informatique.fr/wp-content/uploads/2014/06/Reparateur-Pc-Ordinateur-bordeaux-depannage-informatique-0629509347.jpg",
      cols : [],
      appData : dataBase
    }
  }

  getBackgroundColor(){
    return this.state.backgroundColor
  }
  getBackgroundPicture(){
    return this.state.backgroundPicture
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
      <img src={objCategorie.icone}  onClick={() => this.myOnClick(categorie)}/>
      <button onClick={() => this.myOnClick(categorie)}> Choisir </button>
      <br/><br/>
      <p>{objCategorie.description}</p>
    </div>)
  }

  myOnClick(categorie){
    alert(categorie);
  }

  render() {
    return (
      <div className="App container"  id="App">
        <header className="App-header">
        </header>
        <h1 className="App-title">Alors dites nous tout, </h1>
        <p className="App-intro">
          Comment comptez vous utiliser votre machine ?
        </p>
        <p className="App-content container">
          {this.getCols()}
        </p>
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './header.css';

class Acceuil extends Component {
  render() {
    return (
      <div className="FloatingMenu">
        <header className="Floatingheader">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">M&Ns Informatique</h1>
          <form className="loginForm">
              <input name="login" type="text"/>
              <input name="mdp" type="password"/>
          </form>
        </header>
      </div>

    );
  }
}

export default Acceuil;

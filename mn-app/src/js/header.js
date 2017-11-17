import React, { Component } from 'react';
import logo from './../img/logo.svg';

class Acceuil extends Component {
  render() {
    return (
      <nav class="navbar navbar-default Floatingheader">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">M&Ns Informatique</h1>
            </a>
          </div>
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <form class="navbar-form navbar-right">
              <div class="inline-form">
                  <input name="login" type="text"/>
                  <input name="mdp" type="password"/>
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </nav>


    );
  }
}

export default Acceuil;

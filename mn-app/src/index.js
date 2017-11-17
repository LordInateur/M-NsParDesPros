import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './css/index.css';
import './css/bootstrap.css';

import Header from './js/header'
import Acceuil from './js/Acceuil';
import App from './js/App';

import registerServiceWorker from './js/registerServiceWorker';

class Index extends Component {

  genPageElem(element) {
  	return (
  		<div className="Page" style={{backgroundColor:element.getBackgroundColor()}}>
  		 {element.render()}
  		</div>
  		)
  }

  render() {
    return (
      <div>
        <Header />
        {this.genPageElem(new Acceuil)}
        {this.genPageElem(new App)}
      </div>
    );
  }
}



ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();

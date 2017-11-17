import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './bootstrap.css';

import Header from './header'
import Acceuil from './Acceuil';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

class Index extends Component {

  genPageElem(element) {
  	return (
  		<div className="Page" style={{backgroundColor:element.backColor}}>
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

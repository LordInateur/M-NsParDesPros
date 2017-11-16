import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Acceuil from './Acceuil';
import registerServiceWorker from './registerServiceWorker';
import Header from './header.js'


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

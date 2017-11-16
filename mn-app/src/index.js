import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Acceuil from './Acceuil';
import registerServiceWorker from './registerServiceWorker';


class Index extends Component {

  genPageElem(element) {
  	return element
  }

  render() {
    return (
      <div>
        {this.genPageElem(<Acceuil />)}
        {this.genPageElem(<App />)}
      </div>
    );
  }
}



ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();

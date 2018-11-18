import React, { Component } from 'react';
import Calculator from './containers/Calculator/Calculator';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}

export default App;

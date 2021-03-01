import React, { Component } from 'react';
import './App.css';
import Ball from './Ball';
import Lottery from './Lottery';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <Lottery />
        <Lottery title="Sport TOTO 6/49" maxNum={49} numBalls={6} />
      </div>
    );
  }
}

export default App;

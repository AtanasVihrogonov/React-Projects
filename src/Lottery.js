import React, { Component } from 'react';
import Ball from './Ball';
import './Lottery.css';

class Lottery extends Component {
  static defaultProps = {
    title: 'Sport TOTO 5/35',
    numBalls: 5,
    maxNum: 35,
  };

  constructor(props) {
    super(props);
    this.state = { nums: Array.from({ length: this.props.numBalls }) };
    this.handleClick = this.handleClick.bind(this);
  }

  generate() {
    // Pick a bunch of random number between 1/35
    // Take the current state end set nums to be current state.nums.map
    // thats going to create a new array of the same lingth and for each spot generate the random number between 5/35
    this.setState((curState) => ({
      nums: curState.nums.map(
        (n) => Math.floor(Math.random() * this.props.maxNum) + 1
      ),
    }));
  }

  handleClick() {
    this.generate();
  }

  render() {
    return (
      <section className='Lottery'>
        <h1>{this.props.title}</h1>
        <div>
          {/* create a new ball for each number of the array */}
          {this.state.nums.map((n) => (
            <Ball num={n} />
          ))}
        </div>
        <button onClick={this.handleClick}>Generate</button>
      </section>
    );
  }
}

export default Lottery;

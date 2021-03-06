import React, { Component } from 'react';

class Counter extends Component {
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this)
  //   // This bind method will return a new instance of a handle increment function and in that function this is always referencing the current object.
  // }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.props.counter.value === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? 'Zero' : value;
  }

  // Depending how a function is called this can reference different object. if a function is called as a part of a method in an object this in that function will always return a reference to that oblect.
  // However if that function is called as a stand-alone function without an object reference this by default return a reference to the window object, but if the strict mode is enabled this will return undefined.
  // And thats the reason in this event handler we don't have access to this

  render() {
    const product = { id: 1 };
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className='btn btn-secondary btn-sm'
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className='btn btn-danger btn-sm m-2'
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;

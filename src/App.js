import React from "react";
import "./styles.css";

export default class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  incrementCount() {
    this.setState({ count: this.state.count + 1 });
  }

  decrementCount() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div className="Counter">
        <h1>Counter</h1>
        <label className="number">{this.state.count}</label>
        <br></br>
        <button className="button btn-min" id="up" onClick={() => this.incrementCount()}>
          Increment
        </button>
        <button id="down" onClick={() => this.decrementCount()}>
          Increment
        </button>
      </div>
    );
  }
}

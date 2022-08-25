import React from "react";
import "./styles.css";

// Create a new component class called Counter
export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    // Add a state that is a dictionary containing the key count
    this.state = {
      count: 0,       // initialize count to 0
      color: "blue",
    };
  }

  incrementCount() {
    this.setState({ count: this.state.count + 1 });
  }

  decrementCount() {
    this.setState({ count: this.state.count - 1 });
  }

  updateColor(){
    const colors = ['red', 'orange', 'blue', 'green', 'teal']
    const color = colors[Math.floor(Math.random() * colors.length)];

    this.setState({ color: color});
  }
  
  render() {
    return (
      <div className="Counter">
        <h1 style={{color: this.state.color}}  >Counter</h1>
        <label className="number">{this.state.count}</label>
        <br></br>
        <button className="button btn-min" id="up" onClick={() => this.incrementCount()}>
          Increment
        </button>
        <button id="down" onClick={() => this.decrementCount()}>
          Decrement
        </button > 
        <button onClick={()=>this.updateColor()}>
        Change color
        </button>
      </div>
    );
  }
}

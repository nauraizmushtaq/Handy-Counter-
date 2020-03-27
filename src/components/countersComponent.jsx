import React, { Component } from "react";
import Counter from "./counterCompoenet";
class Counters extends Component {
  render() {
    console.log("Counters Rendered");
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-4"
        >
          Reset
        </button>
        {this.props.countrs.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onDecrement={this.props.onDecrement}
            onIncrement={this.props.onIncrement}
            ctr={counter}
          >
            {/* <h4>Title</h4> */}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;

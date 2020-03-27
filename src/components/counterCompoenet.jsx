import React, { Component } from "react";
class Counter extends Component {
  // state = {
  //   count: this.props.ctr.value
  //   // tags: ["tag1", "tag2", "tag3"]
  // };
  //   style = {
  //     fontSize: "5px",
  //     fontWeight: "bold"
  //   };
  // renderTag() {
  //   if (this.state.tags.length === 0) return <p>There are No Tags</p>;
  //   return (
  //     <ul>
  //       {this.state.tags.map(tag => (
  //         <li key={tag}>tag</li>
  //       ))}
  //     </ul>
  //   );
  // }

  render() {
    console.log("Counter Rendered");

    // console.log(this.props.children);
    return (
      <div>
        {/* <div> */}
        {/* <div className="col-1"> */}
        <span className={this.getBadgeClasses()}>{this.props.ctr.value}</span>
        {/* </div>
        // <div className="col-2"> */}
        <button
          onClick={() => this.props.onIncrement(this.props.ctr)}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
        {/* </div>
        <div className="col-3"> */}
        <button
          onClick={() => this.props.onDecrement(this.props.ctr)}
          className="btn btn-secondary btn-sm m-2"
          disabled={this.props.ctr.value === 0 ? "disabled" : ""}
        >
          -
        </button>
        {/* </div>
        <div className="col-4"> */}
        <button
          onClick={() => this.props.onDelete(this.props.ctr.id)}
          className="btn btn-danger btn-sm"
        >
          x
        </button>
        {/* {this.state.tags.length === 0 && "Please add Tags"}
          {this.renderTag()}; */}
        {/* </div> */}
      </div>
      // </div>
    );
    // return (  );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.ctr.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;

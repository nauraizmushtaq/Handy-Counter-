import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbarComponent";
import Counters from "./components/countersComponent";
class App extends Component {
  constructor() {
    super();
    console.log("Constructor");
  }
  componentDidMount() {
    console.log("Mounted");
  }
  componentDidUpdate(preProps, prevState) {
    //check whether update or not
  }
  componentWillUnmount() {
    //delete components
  }
  state = {
    countrs: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 }
    ]
  };
  onDecrement = c => {
    const ctrss = [...this.state.countrs];
    const idx = ctrss.indexOf(c);
    ctrss[idx].value -= 1;
    this.setState({ countrs: ctrss });
  };

  onIncrement = c => {
    const ctrss = [...this.state.countrs];
    const idx = ctrss.indexOf(c);
    ctrss[idx].value += 1;
    this.setState({ countrs: ctrss });
  };

  onDelete = id => {
    const newCounters = this.state.countrs.filter(m => m.id !== id);
    this.setState({ countrs: newCounters });
    console.log(newCounters);
  };
  resetState = () => {
    const ctrsr = this.state.countrs.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ countrs: ctrsr });
  };
  render() {
    console.log("Rendered");
    return (
      <React.Fragment>
        <Navbar total={this.state.countrs.filter(c => c.value > 0).length} />
        <Counters
          countrs={this.state.countrs}
          onDecrement={this.onDecrement}
          onDelete={this.onDelete}
          onIncrement={this.onIncrement}
          onReset={this.resetState}
        />
      </React.Fragment>
    );
  }
}

export default App;

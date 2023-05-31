import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Havindu",
    };
  }

  onButtonClick = (event) => {
    this.setState({ name: "Havindu Dissanayake" });
  };

  render() {
    const { name } = this.state;

    return (
      <div className="App">
        <h1>Hello World {name}</h1>
        <button onClick={this.onButtonClick}>View Full Name</button>
      </div>
    );
  }
}

export default App;

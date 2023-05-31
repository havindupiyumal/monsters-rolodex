import React, { Component } from "react";
import "./App.css";

import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({
          monsters: users,
        });
      });
  }

  render() {
    const { monsters } = this.state;

    return (
      <div className="App">
        <SearchBox />

        {monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;

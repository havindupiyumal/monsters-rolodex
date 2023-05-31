import React, { Component } from "react";
import "./App.css";

import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    this.loadMonsters();
  }

  loadMonsters = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({
          monsters: users,
        });
      });
  };

  onSearchFieldChange = (event) => {
    const searchText = event.target.value.toLocaleLowerCase();
    this.setState({ searchField: searchText });
  };

  filterMonsters = (monsters, searchField) => {
    return monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(searchField)
    );
  };

  render() {
    const { monsters, searchField } = this.state;

    const filteredMonsters = this.filterMonsters(monsters, searchField);

    return (
      <div className="App">
        <SearchBox onSearchFieldChange={this.onSearchFieldChange} />

        {filteredMonsters.map((monster) => {
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

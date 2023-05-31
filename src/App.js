import React, { Component } from "react";
import "./App.css";

import SearchBox from "./components/search-box/search-box.component";
import { CardList } from "./components/card-list/card-list.component";

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

  onSearchFieldChangeHandler = (event) =>
    this.setState({ searchField: event.target.value.toLocaleLowerCase() });

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
        <SearchBox
          className="search-box"
          placeholder="search monsters"
          type="search"
          onSearchFieldChangeHandler={this.onSearchFieldChangeHandler}
        />

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;

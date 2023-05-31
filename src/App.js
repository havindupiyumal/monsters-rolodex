import React, { useState, useEffect } from "react";
import "./App.css";

import SearchBox from "./components/search-box/search-box.component";
import { CardList } from "./components/card-list/card-list.component";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");

  const loadMonsters = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setMonsters(users);
      });
  };

  const onSearchFieldChangeHandler = (event) =>
    setSearchField(event.target.value.toLocaleLowerCase());

  const filterMonsters = (monsters, searchField) => {
    return monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(searchField)
    );
  };

  useEffect(() => {
    loadMonsters();
  });

  const filteredMonsters = filterMonsters(monsters, searchField);

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>

      <SearchBox
        className="monsters-search-box"
        placeholder="search monsters"
        type="search"
        onSearchFieldChangeHandler={onSearchFieldChangeHandler}
      />

      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;

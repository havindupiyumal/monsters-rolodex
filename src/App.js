import React, { useState, useEffect } from "react";
import "./App.css";

import SearchBox from "./components/search-box/search-box.component";
import { CardList } from "./components/card-list/card-list.component";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [searchField, setSearchField] = useState("");

  const loadMonsters = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setMonsters(users);
      });
  };

  useEffect(() => {
    loadMonsters();
  });

  const onSearchFieldChangeHandler = (event) =>
    setSearchField(event.target.value.toLocaleLowerCase());

  useEffect(() => {
    setFilteredMonsters(
      monsters.filter((monster) =>
        monster.name.toLocaleLowerCase().includes(searchField)
      )
    );
  }, [searchField, monsters]);

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

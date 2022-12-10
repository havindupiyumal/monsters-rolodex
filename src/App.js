import './App.css';
import React,{Component} from 'react';

import {SearchBox} from './components/search-box/search-box.component';
import {CardList} from './components/card-list/card-list.component'

class App extends Component {
  constructor(){
    super();

    //  Application State is Stored Here.
    this.state = {
      monsters : [],
      searchFeild: ''
    }

  }

  // When this component is mounted, all the monsters are loaded and set to the state. 
  componentDidMount(){
    this.loadMonsters();
  }

  loadMonsters = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
    .catch(error => console.log(error));
  }
  
  clearMonsters = () => {
    this.setState({monsters: []});
  }

  filterMonsters = (monsters, searchFeild) => {
    return monsters.filter((monster)=>  monster.name.toLocaleLowerCase().includes(searchFeild.toLocaleLowerCase()));
  }

  onSearchFeildChange = (event) => {
    const searchFeild = event.target.value.toLocaleLowerCase();
    this.setState({searchFeild})
  }

  render(){

    const {monsters, searchFeild} = this.state;
    const {onSearchFeildChange, filterMonsters, clearMonsters, loadMonsters} = this;


    let monsterLoadButton;
    if(this.state.monsters.length === 0){
      monsterLoadButton = <button className='load-button' onClick={()=>loadMonsters()}>Load Monsters</button>
    }

    let filteredMonsters = filterMonsters(monsters, searchFeild);

    return(
      <div className='App'>
        <h1 className='app-title' >Monsters Rolodex</h1>
        <SearchBox onChangeHandler={onSearchFeildChange} className="search-box" placeholder="Search Monsters"  />{monsterLoadButton} 
        <button className='clear-button' onClick={()=>clearMonsters()}>Clear Monsters</button><br/><br/>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;

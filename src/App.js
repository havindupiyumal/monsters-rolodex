import './App.css';
import React, {Component} from 'react';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters : [],
      searchFeild: ''
    }

  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
    .catch(error => console.log(error));
  }

  render(){
    return(
      <div className='App'>
        <h1>Monsters</h1>
        {
          this.state.monsters.map((monster)=>{
            return (<p key={monster.id} >{monster.name + monster.phone}</p>)
          })
        }
      </div>
    );
  }

}

export default App;

import './App.css';
import React,{Component} from 'react';
import button from 'react-dom';

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


  render(){

    let monsterLoadButton;

    if(this.state.monsters.length === 0){
      monsterLoadButton = <button onClick={()=>this.loadMonsters()}>Load Monsters</button>
    }

    return(
      <div className='App'>
        <h1>Monsters</h1>
        {
          this.state.monsters.map((monster)=>{
            return (<p key={monster.id} >{monster.name + monster.phone}</p>)
          })
        }
        <button onClick={()=>this.clearMonsters()}>Clear Monsters</button><br/><br/>
        {monsterLoadButton}
      </div>
    );
  }
}

export default App;

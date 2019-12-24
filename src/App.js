import React, { Component } from 'react';
import './App.css';
import CardList from './components/CardList/CardList';

class App extends Component{
  constructor() {
    super();
    this.state = {
      monsters: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}))
  }

  render() {
    return (
      <div className="App">
        <CardList name="Aaron" monsters={this.state.monsters}>
          <h1>Aaron</h1>
          {
            this.state.monsters.map(monster => {
                return <h1 key={monster.id}>{monster.name} </h1>;
            })
          }
        </CardList>
      </div>
    );
  }
}

export default App;

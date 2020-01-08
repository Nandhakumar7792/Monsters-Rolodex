import React, { Component } from 'react';
import './App.css';
import CardList from './components/CardList/CardList';
import SearchBox from './components/SearchBox/SearchBox';

class App extends Component{
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}))
  }

  onInputChange = (event) => {
    this.setState({searchField: event.target.value})
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        <SearchBox change={this.onInputChange}/> 
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;

import React from "react";

import { SearchBox } from "./components/searchBox/SearchBox.component";
import { CardList } from "../src/components/card-list/CardList.component";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }
  render() {
    const { monsters, searchField } = this.state;
    // const monster = this.state.monsters;
    // const searchField = this.state.searchField;
    const fileteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search Monsters"
          handleChange={e => {
            this.setState({ searchField: e.target.value });
          }}
        />
        <CardList monsters={fileteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
//<input/> --> type --> what it does for "password"/"search"---> placeholder
//onChange prop/functionality --> gives us an object when someyhing changes in <input/>
//2important things from e{object}--> get/target--(html of element where onChange() lives) and set/target
//once we know the element we can then get input value --->e.target.value
//putting value in state ---> setState({searchField:e.target.value})
//remember setup if you want to run a function after setting state (2nd parameter(fn))
//filter ---> pulling values from state into new variables and feeding to child componenets
//In this case its a new array --> filtered ---> to see if it includes--->name property that has letters in search <input>

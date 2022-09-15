import React, { Component } from "react";
import axios from "axios";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import "./Monster.scss";

class Monster extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      searchMonsters: [],
    };

    // this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.data)
      .then((users) =>
        this.setState(() => {
          return { monsters: users, searchMonsters: users };
        })
      );
  }

  handleSearch(event) {
    console.log("ashu");
    const searchValue = event.target.value;
    const filteredArray = this.state.searchMonsters.filter((names) => {
      console.log(names);
      if (names.name.includes(searchValue)) return names;
    });
    console.log(filteredArray);
    this.setState({ monsters: filteredArray });
    console.log(searchValue);
  }

  render() {
    return (
      <div className="Rolodex-app">
        {/* {this.state.monsters.map((monster) => (
          <div key={monster.id}>{monster.name}</div>
        ))} */}

        <SearchBox onChangeHandler={(e) => this.handleSearch(e)} />
        <CardList monsters={this.state.monsters} />

      </div>
    );
  }
}

export default Monster;

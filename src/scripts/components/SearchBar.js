import React, { Component } from 'react';
import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;
const urlProduct = `http://lcboapi.com/products?access_key=${apiKey}`

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      term: '',
      beverageList: []
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    event.preventDefault();
    const url = `${urlProduct}&q=${this.state.term}`
    axios.get(url)
      .then(res => {
        console.log(res);
      })
    console.log(event.target.value);
    this.setState({ term: event.target.value });
  }

  render() {
    return (
      <div className="searchBar-wrapper">
        <form >
          <input
            value={this.state.term}
            onChange={this.onInputChange}
            placeholder="What are you thirsty for?"
          ></input>
        </form>
      </div>

    );
  } 
}

export default SearchBar;
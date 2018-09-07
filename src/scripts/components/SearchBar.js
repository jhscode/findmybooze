import React, { Component } from 'react';
import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;
const ROOT_URL = `http://lcboapi.com/products?access_key=${apiKey}`

class SearchBar extends Component {

  searchName = (e) => {
    e.preventDefault();
    const search = e.target.elements.search.value;
    const url = `${ROOT_URL}&q=${search}`
    axios.get(url)
    .then((res) => {
      console.log(res);
    })
  }

  render() {
    return (
      <div className="searchBar-wrapper">
        <form onSubmit={this.props.searchName}>
          <input
            type="text"
            name="search"
            placeholder="What are you thirsty for?"
          ></input>
          <button>Submit</button>
        </form>
        <select>
          How much do you want to pay?
          <option value="priceOne">$</option>
          <option value="priceTwo">$$</option>
          <option value="priceThree">$$$</option>
        </select>
      </div>
    );
  } 
}

export default SearchBar;
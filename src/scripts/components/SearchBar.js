import React, { Component } from 'react';
import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;
const ROOT_URL = `http://lcboapi.com/products?access_key=${apiKey}`

class SearchBar extends Component {
  state = {
    type:'',
    data: []
  }

  searchName = (e) => {
    e.preventDefault();
    const price = e.target.elements.price.value;
    const type = e.target.elements.type.value;
    const url = `${ROOT_URL}&q=${type}&order=price_in_cents.desc`;
    axios.get(url)
    .then((res) => {
      console.log(res);
      console.log(res.data.result);
      this.setState = ({
        data: res.data.result
      })
    })
  }

  render() {
    return (
      <div className="searchBar-wrapper">
        <form onSubmit={this.searchName}>
          <input
            type="text"
            name="type"
            placeholder="What are you thirsty for?"
          ></input>
        <select name="price">          
          <option value="selectPrice">Select Price</option>
          <option value="priceOne">$</option>
          <option value="priceTwo">$$</option>
          <option value="priceThree">$$$</option>
        </select>
          <button>Submit</button>
        </form>
      </div>
    );
  } 
}

export default SearchBar;
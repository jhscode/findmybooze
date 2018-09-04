import React, { Component } from 'react';
import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;
const url = `http://lcboapi.com/products?access_key=${apiKey}`

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      term: '',
      beverageList: []
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  componentDidMount() {
    axios.get(url).then(res => {
      console.log(res);
    })
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  render() {
    return (
      <div className="searchBar-wrapper">
        <form>
          <select className="select-beverage">
            <option>Choose bervage</option>
            <option>Beer</option>
            <option>Wine</option>
            <option>Cooler</option>
          </select>
          <input
          className="select-input"
          placeholder="Where are you located?"
          value={this.state.term}
          onChange={this.onInputChange}
          >
          </input>
          <select className="select-price">
            <option>Choose price range</option>
            <option>$</option>
            <option>$$</option>
            <option>$$$</option>
          </select>
          <span>
            <button type="submit">Submit</button>
          </span>
        </form>
      </div>

    );
  } 
}

export default SearchBar;
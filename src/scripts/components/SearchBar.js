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

  componentDidMount() {
    axios.get(urlProduct)
      .then(res => {
        const data=res.data.result[0];
        console.log(data);
      })
  }

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({ term: event.target.value });
  }

  render() {
    return (
      <div className="searchBar-wrapper">
        <form>
          <input
            className="select-input"
            placeholder="Where are you located?"
            value={this.state.term}
            onChange={this.onInputChange}
          >
          </input>
          <span>
            <button type="submit">Submit</button>
          </span>
        </form>
      </div>

    );
  } 
}

export default SearchBar;
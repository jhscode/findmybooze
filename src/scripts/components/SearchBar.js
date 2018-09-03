import React, { Component } from 'react';
import axios from 'axios';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { term: ''};

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  render() {
    return (
      <div>
        <form>
          <select>
            <option>Beer</option>
            <option>Wine</option>
            <option>Cooler</option>
          </select>
          <input
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
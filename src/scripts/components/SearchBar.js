import React, { Component } from 'react';
import axios from 'axios';

class SearchBar extends Component {

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
      </div>

    );
  } 
}

export default SearchBar;
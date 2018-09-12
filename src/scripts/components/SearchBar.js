import React, { Component } from 'react';

class SearchBar extends Component {
  
  render() {
    return (
      <div className="searchBar-wrapper">
        <form onSubmit={this.props.searchName}>
          <input
            type="text"
            name="type"
            placeholder="What are you thirsty for?"
          ></input>
        <label>Price</label>
        <select name="price">
          <option value="cheap">Cheap</option>
          <option value="expensive">Expensive</option>
        </select>
          <button>Submit</button>
        </form>
      </div>
    );
  } 
}

export default SearchBar;
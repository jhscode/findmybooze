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
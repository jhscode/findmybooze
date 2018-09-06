import React, { Component } from 'react';
import axios from 'axios';
import firebase from './firebase';
import '../styles/styles.css';
import SearchBar from './components/SearchBar';

const dbRef = firebase.database();

const apiKey = process.env.REACT_APP_API_KEY;
const ROOT_URL = `http://lcboapi.com/products?access_key=${apiKey}`

class App extends Component {
  
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
      <div>
        <SearchBar searchName={this.searchName}/>
      </div>
    );
  }
}

export default App;

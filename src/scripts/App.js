import React, { Component } from 'react';
import axios from 'axios';
import firebase from './firebase';
import '../styles/styles.css';
import SearchBar from './components/SearchBar';

const dbRef = firebase.database();

console.log(process.env.REACT_APP_API_KEY);

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

export default App;

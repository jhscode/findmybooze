import React, { Component } from 'react';
import axios from 'axios';
import firebase from './firebase';
import '../styles/styles.css';
import SearchBar from './components/SearchBar';

const dbRef = firebase.database();

class App extends Component {
  state = {
    term: ''
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

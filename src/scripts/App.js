import React, { Component } from 'react';
import axios from 'axios';
import firebase from './firebase';
import '../styles/styles.css';
import SearchBar from './components/SearchBar';

const dbRef = firebase.database();
const apiKey = process.env.REACT_APP_API_KEY;
const ROOT_URL = `http://lcboapi.com/products?access_key=${apiKey}`

class App extends Component {
  state = {
    data: []
  }

  searchName = (e) => {
    e.preventDefault();
    const productType = e.target.elements.type.value;
    const url = `${ROOT_URL}&q=${productType}&order=price_in_cents.desc`;
    axios.get(url)
    .then((res) => {
      console.log(res);
      console.log(res.data.result);
      this.setState = ({
        data: res.data.result
      })
    })
    e.target.reset();
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

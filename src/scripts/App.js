import React, { Component } from 'react';
import axios from 'axios';
import firebase from './firebase';
import '../styles/styles.css';
import SearchBar from './components/SearchBar';
import BeverageList from './components/BeverageList';

const dbRef = firebase.database();
const apiKey = process.env.REACT_APP_API_KEY;
const ROOT_URL = `http://lcboapi.com/products?access_key=${apiKey}`

class App extends Component {
  state = {
    data: [],
    price:''
  }

  searchName = async (e) => {
    e.preventDefault();
    const price = e.target.elements.price.value;
    const productType = e.target.elements.type.value;
    const url = await fetch(`${ROOT_URL}&q=${productType}`);
    const data = await url.json();
    console.log(data);
    this.setState({
      data: data.result,
      price: price
    });
  }

  render() {
    return (
      <div>
        <SearchBar 
        searchName={ this.searchName }
        />
        <BeverageList
        data={ this.state.data }
        price= { this.state.price }
        />
      </div>
    );
  }
}

export default App;

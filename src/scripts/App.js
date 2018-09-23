import React, { Component } from 'react';
import axios from 'axios';
import firebase from './firebase';
import '../styles/styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import BeverageList from './components/BeverageList';
import GoogleMaps from './components/GoogleMaps';

const dbRef = firebase.database();
const apiKey = process.env.REACT_APP_API_KEY;
const ROOT_URL = `http://lcboapi.com/products?access_key=${apiKey}`

class App extends Component {
  state = {
    data: [],
    price:'cheap',
    lng: null,
    lat: null
  }

  searchName = async (e) => {
    e.preventDefault();
    const price = e.target.elements.price.value;
    const productType = e.target.elements.type.value;
    const url = await fetch(`${ROOT_URL}&q=${productType}`);
    const data = await url.json();
    this.setState({
      data: data.result,
      price: price
    });
  }

  render() {
    return (
      <div>
        <Header />
        <SearchBar 
        searchName={ this.searchName }
        />
        <BeverageList
        data={ this.state.data }
        price= { this.state.price }
        />
        {/* <GoogleMaps 
        lat={this.state.lat}
        lng={this.state.lng}
        /> */}
        <Footer />
      </div>
    );
  }
}

export default App;

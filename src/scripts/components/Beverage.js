import React, { Component } from 'react';

export default class Beverage extends Component {
  
  onImageClick = () => {
    //do something when clicked
  }

  render() {
    const { image_thumb_url, name, price_in_cents } = this.props.data;
    return (
      <div className="beverage-container">
        <img  
          className="beverageImage"
          onClick={ this.onImageClick }
          src={ image_thumb_url }
          alt={ name } ></img>
          <li>{ name }</li>
          <li>{ price_in_cents }</li>
      </div>
    );
  }
}
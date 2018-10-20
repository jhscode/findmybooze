import React, { Component } from 'react';

export default class Beverage extends Component {
  
  onImageClick = () => {
        
  }

  render() {
    const { image_thumb_url, name, price_in_cents } = this.props.data;
    return (
      <div className="beverage-container">
        <div className="beverage-card">
        <img  
          className="beverageImage"
          onClick={ this.onImageClick }
          src={ image_thumb_url }
          alt={ name } ></img>
        <h3>{ name }</h3>
        <p>{ price_in_cents }</p>
        </div>
      </div>
    );
  }
}
import React, { Component } from 'react';

export default class Beverage extends Component {

  onImageClick = () => {
    //do something when clicked
  }
  render() {
    return (
      <div>
        {this.props.data.map((data) => {
          console.log(data);
          return (
            <ul key={ data.id }>
              { data.name }
            <img  
              className="beverageImage"
              onClick={ this.onImageClick }
              src={ data.image_thumb_url } 
              alt={ data.name } ></img>
            <div className="beveragePrice">
              { data.price_in_cents }
            </div>
            </ul>
          );
        })}
      </div>
    );
  }
}
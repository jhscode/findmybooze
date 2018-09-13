import React, { Component } from 'react';
import Beverage from './Beverage';

class BeverageList extends Component {
  render() {
    return (
      <div>
        <Beverage 
          data={this.props.data}
        />
      </div>
    )
  }
}

export default BeverageList;
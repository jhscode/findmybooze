import React, { Component } from 'react';
import Beverage from './Beverage';

class BeverageList extends Component {
  render() {
    return (
      <div className="beverlist-container">
        <ul className="beveragelist">
          {this.props.data.map((data) => 
            <Beverage 
              data={ data }
              key={ this.props.data.id }
            />
          )}
        </ul>

      </div>
    )
  }
}

export default BeverageList;  
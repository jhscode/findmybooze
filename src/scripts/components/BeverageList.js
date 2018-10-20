import React, { Component, Fragment } from 'react';
import Beverage from './Beverage';

class BeverageList extends Component {
  render() {
    return (
      <Fragment>
        <div className="beveragelist-container">
          <ul className="beveragelist">
            {this.props.data.map((data) => 
              <Beverage 
                data={ data }
                key={ this.props.data.id }
              />
            )}
          </ul>
        </div>
        <button>Click For More</button>
      </Fragment>
    )
  }
}

export default BeverageList;
import React, { Component } from 'react';

class BeverageList extends Component {
  render() {
    return (
      <div>
        {this.props.data.map((data) => {
          return <div key={data.id}>{data.name}</div>
        })}
      </div>
    )
  }
}

export default BeverageList;
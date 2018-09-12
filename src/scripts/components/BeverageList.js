import React, { Component } from 'react';

class BeverageList extends Component {
  render() {
    return (
      <div>
        {this.props.data.map((data) => {
          <ul key={data.id}>
            {data.name}
            <img src={data.image_thumb_url} ></img>
          </ul>
        })}
      </div>
    )
  }
}

export default BeverageList;
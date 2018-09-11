import React, { Component } from 'react';

class BeverageList extends Component {
  render() {
    return (
      <div>
        {this.props.data.map((data) => {
          console.log(data);
          return (
            <div key={data.id}>
            {data.name}
              <img src={data.image_thumb_url} ></img>
            </div>

          );
        })}
      </div>
    )
  }
}

export default BeverageList;
import React, { Component } from 'react';

const Green = (props) => (
  <div className="green-component">
    {props.number}
  </div>
);

const Blue = (props) => (
  <div className="blue-component">
    <Green number={props.number} />
  </div>
);

class Red extends Component {
  state = {
    number: 1337
  }

  render() {
    return (
      <div className="red-component">
        {this.state.number}

        <Blue number={this.state.number} />
      </div>
    );
  }
}

export default Red;

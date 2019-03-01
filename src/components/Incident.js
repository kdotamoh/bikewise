import React, { Component } from 'react';

class Incident extends Component {
  render() {
    return (
      <div>
        <div>{this.props.title}</div>
        <div>{this.props.description}</div>
        <div>{this.props.occuredAt}</div>
      </div>
    );
  }
}

export default Incident;
import React, { Component } from 'react';
import { withRouter } from "react-router-dom"

class Incident extends Component {
  handleClick = () => {
    this.props.history.push(`/detail/${this.props.id}`)
  }
  render() { 
    return (
      <div onClick={this.handleClick}>
        <div>{this.props.title}</div>
        <div>{this.props.description}</div>
        <div>{this.props.occuredAt}</div>
      </div>
    );
  }
}

export default withRouter(Incident);
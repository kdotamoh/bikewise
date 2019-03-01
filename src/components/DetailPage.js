import React, { Component } from 'react';
import axios from "axios";

class DetailPage extends Component {
  componentDidMount() {
    let { id } = this.props.match.params
    console.log(id)
    axios
      .get()
  }
  render() {
    return (
      <div>
        Detail
      </div>
    );
  }
}

export default DetailPage;
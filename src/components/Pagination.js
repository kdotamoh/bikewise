import React, { Component } from 'react';

class Pagination extends Component {
  render() {
    return (
      <div style={{display: "flex"}}>
        <button>First</button>
        <button>Prev</button>
        <button>Next</button>
        <button>Last</button>
      </div>
    );
  }
}

export default Pagination;
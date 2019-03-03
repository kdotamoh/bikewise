import React, { Component } from "react";

class Search extends Component {
  state = {
    title: "",
    startDate: null,
    endDate: null
  };

  onInputChange = e => {
    this.setState({
      title: e.target.value
    });
  };
  render() {
    return (
      <div style={{ display: "flex" }}>
        <input
          placeholder="Search case titles"
          onChange={this.onInputChange}
          value={this.state.title}
        />
        <input placeholder="from" />
        <input placeholder="to" />
        <button>Find cases</button>
      </div>
    );
  }
}

export default Search;

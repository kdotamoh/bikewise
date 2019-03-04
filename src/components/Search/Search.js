import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Search extends Component {
  state = {
    title: "",
    startDate: null,
    endDate: null,
    filtered: []
  };

  onInputChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  onDateChange = stateName => date => {
    this.setState({
      [stateName]: date
    })
  }

  handleSearch = (event) => {
    event.preventDefault();
    this.setState({
      title: event.target.value
    })
    const regex = new RegExp(event.target.value, 'gi')
    let incidents = this.props.incidents;
    const filtered = incidents.filter(incident => {
      if (incident.title !== null && incident.description !== null) {
        return incident.title.match(regex) || incident.description.match(regex)
      }
    })
    this.setState({
      filtered: filtered
    })
    this.props.onSearch(filtered)
  }
  render() {
    // console.log(this.state.filtered)
    return (
      <div style={{ display: "flex" }}>
        <input
          placeholder="Search case titles"
          // onChange={this.onInputChange}
          onChange={this.handleSearch}
          value={this.state.title}
        />
        {/* <input placeholder="from" /> */}
        <DatePicker
          selected={this.state.startDate}
          placeholderText="from"
          dateFormat="dd/MM/yyyy"
          // className="form__input"
          onChange={this.onDateChange("startDate")}
        />
        <DatePicker
          selected={this.state.endDate}
          placeholderText="to"
          dateFormat="dd/MM/yyyy"
          // className="form__input"
          onChange={this.onDateChange("endDate")}
        />
        {/* <input placeholder="to" /> */}
        <button>Find cases</button>
      </div>
    );
  }
}

export default Search;

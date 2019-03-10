/** @jsx jsx */
import { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { jsx } from "@emotion/core";
import * as styles from "./styles";

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
      // if (incident.title !== null && incident.description !== null) {
      //   return incident.title.match(regex) || incident.description.match(regex)
      // }
      if (incident.title !== null) {
        return incident.title.match(regex)
      }
    })
    this.setState({
      filtered: filtered
    })
    this.props.onSearch(filtered)
  }
  render() {
    return (
      <div css={styles.search}>
        <input
          css={styles.search__input}
          placeholder="Search case titles"
          // onChange={this.onInputChange}
          onChange={this.handleSearch}
          value={this.state.title}
        />
        <DatePicker
          selected={this.state.startDate}
          placeholderText="from"
          dateFormat="dd/MM/yyyy"
          onChange={this.onDateChange("startDate")}
        />
        <DatePicker
          selected={this.state.endDate}
          placeholderText="to"
          dateFormat="dd/MM/yyyy"
          onChange={this.onDateChange("endDate")}
        />
        <button css={styles.search__button}>Find cases</button>
      </div>
    );
  }
}

export default Search;

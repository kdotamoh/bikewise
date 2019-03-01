import React, { Component } from "react";
import axios from "axios";

import IncidentList from "./IncidentList";
import Search from "./Search";
import Pagination from "./Pagination";

class IndexPage extends Component {
  state = {
    incidents: [],
    currentPage: 1
  };

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_API_BASE}/incidents`).then(res => {
      this.setState({
        incidents: res.data.incidents
      });
    });
  }
  render() {
    let incidents = this.state.incidents.slice(0, 10);
    return (
      <div>
        <h2>Police Department of Berlin</h2>
        <p>Stolen bikes</p>
        <Search />
        <IncidentList incidents={incidents} />
        <Pagination />
      </div>
    );
  }
}

export default IndexPage;

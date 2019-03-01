/** @jsx jsx */
import { Component } from "react";
import axios from "axios";
import { jsx } from "@emotion/core";

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
        <div css={{ display: "flex" }}>
          <div>Logo</div>
          <div css={{ display: "flex", flexDirection: "column"}}>
            <h2 css={{ color: "red" }}>Police Department of Berlin</h2>
            <p>Stolen bikes</p>
          </div>
        </div>
        <Search />
        <p>
          Total stolen bikes:{" "}
          {this.state.incidents.length ? this.state.incidents.length : null}
        </p>
        <IncidentList incidents={incidents} />
        <Pagination />
      </div>
    );
  }
}

export default IndexPage;

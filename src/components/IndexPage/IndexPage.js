/** @jsx jsx */
import { Component } from "react";
import axios from "axios";
import { css, jsx } from "@emotion/core";

import IncidentList from "../IncidentList";
import Search from "../Search";
import Pagination from "../Pagination";

const indexPage = css`
  background: #f4f7f8;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class IndexPage extends Component {
  state = {
    incidents: [],
    filtered: [],
    currentPage: 1,
    loaded: false,
    message: "Fetching..."
  };

  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_API_BASE}/incidents`)
      .then(res => {
        let incidents = res.data.incidents.filter(
          incident => incident.description !== null || incident.title !== null
        );

        this.setState({
          incidents: incidents,
          filtered: incidents,
          loaded: true
        });
      })
      .catch(err => {
        this.setState({
          loaded: false,
          message: "An error occurred. List unavailable."
        });
      });
  }

  onSearch = results => {
    this.setState({
      filtered: results
    });
  };
  render() {
    console.log(this.state.filtered);
    return (
      <div css={indexPage}>
        <div style={{ transform: "translateY(-10rem)" }}>
          <Search incidents={this.state.incidents} onSearch={this.onSearch} />

          {/* {
            this.state.loaded ? <IncidentList incidents={this.state.filtered} /> : this.state.message
          } */}
          <IncidentList incidents={this.state.filtered} />
          <Pagination />
        </div>

      </div>
    );
  }
}

export default IndexPage;

/** @jsx jsx */
import { Component } from "react";
import axios from "axios";
import { jsx } from "@emotion/core";
import * as styles from './styles'

import IncidentList from "../IncidentList";
import Search from "../Search";
import Pagination from "../Pagination";

class IndexPage extends Component {
  state = {
    incidents: [],
    filtered: [],
    currentPage: 1
  };

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_API_BASE}/incidents`).then(res => {
      this.setState({
        incidents: res.data.incidents,
        filtered: res.data.incidents
      });
    });
  }

  onSearch = (results) => {
    this.setState({
      filtered: results
    })
  }
  render() {
    console.log(this.state.filtered)
    return (
      <div>
        <div css={styles.flex}>
          <div>Logo</div>
          <div css={styles.flexColumn}>
            <h2 css={styles.red}>Police Department of Berlin</h2>
            <p>Stolen bikes</p>
          </div>
        </div>
        <Search 
          incidents={this.state.incidents}
          onSearch={this.onSearch}
        />
        <p>
          Total stolen bikes:{" "}
          {this.state.incidents.length ? this.state.incidents.length : null}
        </p>
        <IncidentList incidents={this.state.filtered} />
        <Pagination />
      </div>
    );
  }
}

export default IndexPage;

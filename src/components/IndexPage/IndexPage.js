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
    currentPage: 1,
    loaded: false,
    message: "Fetching..."
  };

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_API_BASE}/incidents`)
      .then(res => {
        this.setState({
          incidents: res.data.incidents,
          filtered: res.data.incidents,
          loaded: true
        });
      })
      .catch(err => {
        this.setState({
          loaded: false,
          message: "An error occurred. List unavailable."
        })
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
      <div css={styles.flexColumn}>
        <div css={styles.header}>
          <div>Logo</div>
          <div css={styles.flexColumn}>
            <h2 css={styles.red}>Police Department of Berlin</h2>
            <p>Stolen bikes</p>
          </div>
        </div>
        <div style={{transform: "translateY(-100px)"}}>
          <Search 
            incidents={this.state.incidents}
            onSearch={this.onSearch}
          />
          
          {
            this.state.loaded ? <IncidentList incidents={this.state.filtered} /> : this.state.message
          }
        </div>
        
        <Pagination />
      </div>
    );
  }
}

export default IndexPage;

/** @jsx jsx */
import { Component } from "react";
import axios from "axios";
import { css, jsx } from "@emotion/core";

import LoadedState from "../hoc/LoadedState";
import IncidentList from "../IncidentList";
import Search from "../Search";
import Pagination from "../Pagination";

const indexPage = css`
  background: #f4f7f8;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const loading = css`
  background: #fff;
  height: 100px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 20px 4px 4px 4px;
  width: 70vw;
  text-align: center;
  box-shadow: 0 2px 4px 0 rgba(14, 30, 37, 0.12);
`;

const loader = (props) => (
  <div css={loading}>
    {props.message}
  </div>
)

const WithLoading = LoadedState(loader);

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
    return (
      <div css={indexPage}>
        <div style={{ transform: "translateY(-10rem)" }}>
          <Search incidents={this.state.incidents} onSearch={this.onSearch} />

          {/* {
            this.state.loaded ? <IncidentList incidents={this.state.filtered} /> : this.state.message
          } */}
          <WithLoading isLoaded={this.state.loaded} message={this.state.message}>
            <IncidentList incidents={this.state.filtered}/>
          </WithLoading>

          <Pagination />
        </div>

      </div>
    );
  }
}

export default IndexPage;

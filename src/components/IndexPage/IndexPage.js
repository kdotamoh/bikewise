/** @jsx jsx */
import { Component } from "react";
import axios from "axios";
import { css, jsx } from "@emotion/core";

import LoadedState from "../hoc/LoadedState";
import IncidentList from "../IncidentList";
import Search from "../Search";
import Pagination from "../Pagination";

import { mq } from "../../constants"

const indexPage = css`
  background: #f4f7f8;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const indexPage__transform = css`
  transform: translateY(-10rem);

  ${mq[0]} {
    transform: translateY(-6rem)
  }
`

const loading = css`
  background: #fff;
  height: 100px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 20px 4px 4px 4px;
  width: 70vw;
  text-align: center;
  box-shadow: 0 2px 4px 0 rgba(14, 30, 37, 0.12);

  ${mq[0]} {
    width: 85vw;
  }
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
    currentPage: 0,
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

  handlePaginateNext = () => {
    let  { currentPage } = this.state;
    let pages = Math.floor(this.state.incidents.length / 10)
    if (currentPage < pages) {
      this.setState({
        currentPage: currentPage + 1
      })
      window.scrollTo(0, 0)
    }
  }

  handlePaginatePrev = () => {
    let  { currentPage } = this.state;
    if (currentPage > 0) {
      this.setState({
        currentPage: currentPage - 1
      })
      window.scrollTo(0, 0)
    }
  }
  render() {
    let incidentLength = this.state.incidents.length
    let currentStart = (this.state.currentPage * 10)
    let currentEnd = currentStart + 10
    let selection = this.state.filtered.slice(currentStart, currentEnd)
    console.log(selection)
    return (
      <div css={indexPage}>
        <div css={indexPage__transform}>
          <Search incidents={this.state.incidents} onSearch={this.onSearch} />

          <WithLoading isLoaded={this.state.loaded} message={this.state.message}>
            <IncidentList incidents={selection} length={incidentLength}/>
          </WithLoading>

          {
            this.state.loaded ? (
              <Pagination 
                onPaginateNext={this.handlePaginateNext} 
                onPaginatePrev={this.handlePaginatePrev}
              />
            ) : null
          }
        </div>

      </div>
    );
  }
}

export default IndexPage;

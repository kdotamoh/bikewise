/** @jsx jsx */
import { Component } from "react";
import axios from "axios";
import { css, jsx } from "@emotion/core";

import LoadedState from "../hoc/LoadedState";

const detailPage = css`
  background: #f4f7f8;
  min-height: calc(100vh - 300px);
  padding: 4rem 8rem;
`;

const mb2rem = css`
  margin-bottom: 2rem;
`

const title = css`
  font-size: 2.2rem;
`;

const loader = () => (
  <div>
    Please wait...
  </div>
)

const WithLoading = LoadedState(loader)

class DetailPage extends Component {
  state = {
    incident: {
      address: null,
      description: null,
      id: null,
      location_description: null,
      location_type: null,
      media: {
        image_url: null,
        image_url_thumb: null
      },
      occurred_at: null,
      source: {
        api_url: null,
        html_url: null,
        name: null
      },
      title: null,
      type: null,
      type_properties: null,
      updated_at: null,
      url: null
    },
    loaded: false
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(`${process.env.REACT_APP_API_BASE}/incidents/${id}`).then(res => {
      this.setState({
        incident: res.data.incident,
        loaded: true
      });
    });
  }
  render() {
    console.log(this.state.incident);
    let { incident } = this.state;
    const date = new Date(incident.occurred_at * 1000).toDateString();
    return (
        <div css={detailPage}>
          <WithLoading isLoaded={this.state.loaded} incident={this.state.incident}>
              <div css={[title, mb2rem]}>{incident.title}</div>
              <div css={mb2rem}>
                <span><strong>{incident.type} &sdot; </strong> <strong>{date}</strong>, at <strong>{incident.address}</strong></span>
              </div>

              <div><strong>Description of Incident</strong></div>
              <div>{incident.description}</div>
          </WithLoading>
        </div>
    );
  }
}

export default DetailPage;

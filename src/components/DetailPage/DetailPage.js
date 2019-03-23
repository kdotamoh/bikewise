/** @jsx jsx */
import { Component } from "react";
import axios from "axios";
import { css, jsx } from "@emotion/core";

import LoadedState from "../hoc/LoadedState";
import Map from "../Map"

const detailPage = css`
  background: #f4f7f8;
  min-height: calc(100vh - 300px);
  padding: 4rem 8rem;
`;

const mb2rem = css`
  margin-bottom: 2rem;
`

const mt2rem = css`
  margin-top: 2rem;
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
    location: {
      "type": "",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "id": null,
            "type": null,
            "occurred_at": null
          },
          "geometry": {
            "type": null,
            "coordinates": []
          }
        }
      ]
    },
    loaded: false,
    mapLoaded: false
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    const URL = `${process.env.REACT_APP_API_BASE}/incidents/${id}`
    axios.get(URL)
      .then(res => {
        this.setState({
          incident: res.data.incident,
        });
        return axios.get(`${process.env.REACT_APP_API_BASE}/locations?occurred_before=${res.data.incident.occurred_at}&occurred_after=${res.data.incident.occurred_at}&proximity_square=100`)
      })
      .then(res => {
        console.log(res.data)
        if (res.data.features.length) {
          this.setState({
            location: res.data,
            loaded: true
          })
        } else {
          this.setState({
            loaded: true
          })
        }
      });
      
  }
  render() {
    let { incident } = this.state;
    const date = new Date(incident.occurred_at * 1000).toDateString();
    const center = this.state.location.features[0].geometry.coordinates || null
    return (
        <div css={detailPage}>
          <WithLoading isLoaded={this.state.loaded} incident={this.state.incident}>
            <div css={[title, mb2rem]}>{incident.title}</div>
            <div css={mb2rem}>
              <span><strong>{incident.type} &sdot; </strong> <strong>{date}</strong>, at <strong>{incident.address}</strong></span>
            </div>
            
            {
              center.length ? <Map location={this.state.location} center={center}/> : <div style={{color: "#757575"}}>No location data</div>
            }

            <div css={mt2rem}><strong>Description of Incident</strong></div>
            <div style={{color: "#757575", marginTop: "2rem"}}>{incident.description ? incident.description : "No description"}</div>
          </WithLoading>
        </div>
    );
  }
}

export default DetailPage;

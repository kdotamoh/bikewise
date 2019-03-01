import React, { Component } from "react";
import axios from "axios";

import Incident from "./Incident";

class IndexPage extends Component {
  state = {
    incidents: []
  };

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_API_BASE}/incidents`).then(res => {
      this.setState({
        incidents: res.data.incidents
      });
    });
  }
  render() {
    console.log(this.state.incidents);
    const { incidents } = this.state;
    return (
      <div>
        {this.state.incidents ? (
          incidents.map(incident => (
            <Incident
              id={incident.id}
              key={incident.id}
              title={incident.title}
              description={incident.description}
              occuredAt={incident.occured_at}
            />
          ))
        ) : (
          <p>Fetching Incidents</p>
        )}
      </div>
    );
  }
}

export default IndexPage;

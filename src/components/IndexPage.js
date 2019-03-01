import React, { Component } from "react";
import axios from "axios";

import IncidentList from "./IncidentList";

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
    return (
      <div>
        <h2>Police Department of Berlin</h2>
        <p>Stolen bikes</p>
        <IncidentList 
          incidents={this.state.incidents}
        />
      </div>
    );
  }
}

export default IndexPage;

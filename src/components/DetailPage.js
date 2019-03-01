import React, { Component } from "react";
import axios from "axios";

class DetailPage extends Component {
  state = {
    incident: null
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(`${process.env.REACT_APP_API_BASE}/incidents/${id}`).then(res => {
      this.setState({
        incident: res.data.incident
      });
    });
  }
  render() {
    console.log(this.state.incident);
    let { incident } = this.state;
    return (
      <div>
        {incident ? (
          <React.Fragment>
            <div>{incident.address}</div>
            <div>{incident.description}</div>
            <div>{incident.occurred_at}</div>
          </React.Fragment>
        ) : null}
      </div>
    );
  }
}

export default DetailPage;

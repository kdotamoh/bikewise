import React, { Component } from "react";
import Incident from "../Incident";
import PropTypes from "prop-types";

class IncidentList extends Component {
  render() {
    const incidents = this.props.incidents;
    return (
      <div>
        {incidents.length
          ? incidents.map(incident => (
              <Incident
                id={incident.id}
                key={incident.id}
                title={incident.title}
                description={incident.description}
                occuredAt={incident.occured_at}
              />
            ))
          : "Fetching..."}
      </div>
    );
  }
}

IncidentList.propTypes = {
  incidents: PropTypes.array.isRequired
}

export default IncidentList;

import React, { Component } from 'react';
import Incident from "./Incident"

class IncidentList extends Component {
  render() {
    const incidents = this.props.incidents;
    return (
      <div>
        {
          incidents ? (
            incidents.map(incident => (
              <Incident
                id={incident.id}
                key={incident.id}
                title={incident.title}
                description={incident.description}
                occuredAt={incident.occured_at}
              />
            ))
          ) : null
        }
      </div>
    );
  }
}

export default IncidentList;
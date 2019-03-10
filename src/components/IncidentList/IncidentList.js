/** @jsx jsx */
import React, { Component } from "react";
import Incident from "../Incident";
import PropTypes from "prop-types";
import { jsx } from "@emotion/core"

import * as styles from "./styles";

class IncidentList extends Component {
  render() {
    const incidents = this.props.incidents;
    return (
      <div css={styles.incidentList}>
        <p>
          Total stolen bikes:{" "}
          {incidents.length ? incidents.length : null}
        </p>
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
          : "No results"}
      </div>
    );
  }
}

IncidentList.propTypes = {
  incidents: PropTypes.array.isRequired
}

export default IncidentList;

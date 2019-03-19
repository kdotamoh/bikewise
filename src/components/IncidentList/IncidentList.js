/** @jsx jsx */
import { Component } from "react";
import Incident from "../Incident";
import PropTypes from "prop-types";
import { jsx } from "@emotion/core"

import * as styles from "./styles";

class IncidentList extends Component {
  render() {
    const incidents = this.props.incidents;
    return (
      <div css={styles.incidentList}>
        <p style={{fontFamily: "Inter Medium"}}>
          Total stolen bikes:{" "}
          <span style={{textDecoration: "underline"}}>
            {this.props.length ? this.props.length : null}
          </span>
        </p>
        {incidents.length
          ? incidents.map(incident => (
              <Incident
                id={incident.id}
                key={incident.id}
                title={incident.title}
                description={incident.description}
                occurredAt={incident.occurred_at}
                address={incident.address}
                thumb={incident.media.image_url_thumb}
              />
            ))
          : "No results"}
      </div>
    );
  }
}

IncidentList.propTypes = {
  incidents: PropTypes.array.isRequired,
  length: PropTypes.number
}

export default IncidentList;

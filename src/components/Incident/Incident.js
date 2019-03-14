/** @jsx jsx */
import { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { jsx } from "@emotion/core";

import * as styles from "./styles";

class Incident extends Component {
  handleClick = () => {
    this.props.history.push(`/detail/${this.props.id}`);
  };
  render() {
    return (
      <div css={styles.incident}>
        <div css={styles.incident__imageContainer}>
          {
            this.props.thumb ? (
              <img
                src={this.props.thumb}
                alt=""
                css={styles.incident__image}
              />
            ) : "No image"
          }
        </div>

        <div css={styles.incident__textContainer}>
          <div onClick={this.handleClick} css={styles.incident__title}>{this.props.title}</div>
          {this.props.description ? <div css={styles.incident__description}>{this.props.description}</div>: <em style={{color: "#757575"}}>No description</em>}
          {/* <div style={{marginTop: "10px"}}>{Date.parse(this.props.occurredAt)}</div> */}
          <div css={[styles.incident__address]}>{this.props.address}</div>
        </div>
      </div>
    );
  }
}

Incident.propTypes = {
  id: PropTypes.number,
  key: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  occuredAt: PropTypes.number
};

export default withRouter(Incident);

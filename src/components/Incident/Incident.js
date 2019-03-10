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
      <div onClick={this.handleClick} css={styles.incident}>
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
          <div css={styles.incident__title}>{this.props.title}</div>
          <div css={styles.incident__description}>{this.props.description}</div>
          <div style={{marginTop: "10px"}}>{this.props.occuredAt}</div>
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

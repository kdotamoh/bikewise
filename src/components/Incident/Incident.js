/** @jsx jsx */
import { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { jsx } from "@emotion/core"

import * as styles from "./styles"

class Incident extends Component {
  handleClick = () => {
    this.props.history.push(`/detail/${this.props.id}`);
  };
  render() {
    return (
      <div onClick={this.handleClick} css={styles.incident}>
        <div>{this.props.title}</div>
        <div>{this.props.description}</div>
        <div>{this.props.occuredAt}</div>
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
}

export default withRouter(Incident);

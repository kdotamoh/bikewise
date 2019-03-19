/** @jsx jsx */
import { Component } from "react";
import { css, jsx } from "@emotion/core";
import PropTypes from "prop-types";

const pagination = css`
  display: flex;
  justify-content: center;
  margin: 2rem 0;

  button {
    padding: 1.5rem 2rem;
    color: #fff;
    border: 0;
    border-radius: 4px;
    background: #250066;
  }

  button:hover {
    cursor: pointer;
  }
  
  button:not(:last-child) {
    margin-right: 1.5rem;
  }
`

class Pagination extends Component {
  render() {
    return (
      <div css={pagination}>
        {/* <button>First</button> */}
        <button onClick={this.props.onPaginatePrev}>Prev</button>
        <button onClick={this.props.onPaginateNext}>Next</button>
        {/* <button>Last</button> */}
      </div>
    );
  }
}

Pagination.propTypes = {
  onPaginateNext: PropTypes.func,
  onPginatePrev: PropTypes.func
}

export default Pagination;

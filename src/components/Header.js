/** @jsx jsx */
import { Component } from "react";
import { css, jsx } from "@emotion/core";
import { Link } from "react-router-dom";

import logo from "../images/berlin-pd-logo.png";

const flexColumn = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const header = css`
  display: flex;
  justify-content: center;
  // align-items: center;
  padding-top: 50px;
  height: 300px;
  background: #250066;
  width: 100%;
  color: #fff;
`;

const header__elems = css`
  display: flex;
  width: 70vw;
  justify-content: center;
  position: relative;

  img {
    position: absolute;
    left: 0;
    max-width: 7rem;
    max-height: 7rem;
  }

  div {
    margin-top: 2rem;
  }
`;

const header__h2 = css`
  font-size: 3rem;
  margin-bottom: 2rem;
`;

class Header extends Component {
  render() {
    return (
      <div css={header}>
        <div css={header__elems}>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <div css={flexColumn}>
            <h2 css={header__h2}>Police Department of Berlin</h2>
            <p>Stolen bikes</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;

import { css } from "@emotion/core";
import { mq } from "../../constants"

export const search = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70vw;
  height: 10rem;
  background: #fff;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  ${mq[0]} {
    height: 7.5rem;
    width: 85vw;
  }
`

export const search__field = css`
  // position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  // border: 1px solid blue;
  border-radius: 4px;
  padding: 0 .5rem;
  height: 4rem;
  width: 60%;
  background: #eee;
`

export const search__input = css`
  height: 2rem;
  // text-indent: 2rem;
  // margin-right: 2rem;
  outline: 0;
  border: 0;
  background: transparent;
  width: 90%;
  // border-bottom: 1px solid black;
`

export const search__button = css`
  height: 2rem;
`

export const search__icon = css`
  max-height: 1.5rem;
  margin-right: 1rem;
  // transform: translateX(2rem) translateY(.2rem);
  // position: absolute;
  // right: 7.5rem;
  // top: 2px;
`
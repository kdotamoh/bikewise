import { css } from "@emotion/core";

export const incident = css`
  // margin: 10px;
  // border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  min-height: 150px;
  display: flex;
  align-items: center;
  padding: 2rem;
  text-align: left;
`

export const incident__imageContainer = css`
  height: 150px;
  width: 150px; 
  border: 1px solid #eee;
  background: #eee;
  color: #757575;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const incident__image = css`
  height: 150px;
  width: 150px;
  object-fit: contain;
`

export const incident__textContainer = css`
  width: 60%;
  min-height: inherit;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  // justify-content: center;
`

export const incident__title = css`
  font-size: 2rem;
  margin-bottom: 1rem;
  height: 20%;
`

export const incident__description = css`
  font-size: ""
`
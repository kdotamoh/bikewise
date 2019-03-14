import { css } from "@emotion/core";

export const incident = css`
  min-height: 150px;
  display: flex;
  align-items: center;
  padding: 2rem;
  text-align: left;
  position: relative;

  &:not(:last-child) {
    border-bottom: 1px solid #eee;
  }
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
  font-family: "Inter Medium";
  font-size: 2rem;
  margin-bottom: 1rem;
  height: 20%;
  text-decoration: underline;

  &:hover {
    cursor: pointer;
    color: #250066
  }
`

export const incident__description = css`
  font-size: "";
  margin-bottom: 4rem;
`
export const incident__address = css`
  font-size: 80%;
  position: absolute;
  bottom: 2rem;
  color: #757575;
`
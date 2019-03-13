import { css } from "@emotion/core";

export const indexPage = css`
  background: #f4f7f8;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const flexColumn = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const header = css`
  display: flex;
  justify-content: center;
  // align-items: center;
  padding-top: 50px;
  height: 300px;
  background: #250066;
  width: 100%;
  color: #fff;
`;

export const header__elems = css`
  display: flex;
  width: 70vw;
  justify-content: center;

  img {
    max-width: 7rem; 
    max-height: 7rem; 
    margin-right: auto; 
  }
`;

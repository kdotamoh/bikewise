import { css } from "@emotion/core";
import { mq } from "../constants"

export const incidentList = css`
  background: #fff;
  min-height: 500px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 4px;
  width: 70vw;
  text-align: center;
  box-shadow: 0 2px 4px 0 rgba(14,30,37,.12);

  ${mq[0]} {
    width: 85vw;
  }
`
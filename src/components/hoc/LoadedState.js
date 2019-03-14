/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const loading = css`
background: #fff;
height: 100px;
border-bottom-left-radius: 8px;
border-bottom-right-radius: 8px;
padding: 20px 4px 4px 4px;
width: 70vw;
text-align: center;
box-shadow: 0 2px 4px 0 rgba(14,30,37,.12);
`

const LoadedState = WrappedComponent => {
  return function WithLoadedState ({ isLoaded, ...props }) {
    if (isLoaded) return (<WrappedComponent {...props} />);
    return (
      <div css={loading}>
        {props.message}
      </div>
    )
  }
}

export default LoadedState;
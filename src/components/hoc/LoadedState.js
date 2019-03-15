import React from "react"

const LoadedState = WrappedComponent => {
  return function WithLoadedState ({ isLoaded, ...props }) {
    if (!isLoaded) return (<WrappedComponent {...props} />);
    return (
      <div>
        {props.children}
      </div>
    )
  }
}

export default LoadedState;
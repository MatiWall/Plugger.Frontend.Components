import React from 'react'
import {ErrorBoundary as ReactErrorBoundary} from 'react-error-boundary'

const FallbackDefault = ({error, resetErrorBoundary}) =>{

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  )
  
}

const ErrorBoundary = ({children, Fallback}) => {
  
  const FallbackComponent = Fallback || FallbackDefault

  return (
  <ReactErrorBoundary FallbackComponent={FallbackComponent}>
    {children}
  </ReactErrorBoundary>)
}


export {
    ErrorBoundary
}
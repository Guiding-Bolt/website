import React from 'https://dev.jspm.io/react@16.13.1'

export function Title({ children, className = '', small = false }) {
  return (
    <h1 className={`gb-title ${small ? 'small' : ' '}${className}`}>
      {children}
    </h1>
  )
}

export function Text({ className = '', ...props }) {
  return <p className={`gb-text ${className}`} {...props} />
}

export function Button({ className = '', highlight = false, ...props }) {
  if (highlight) className += ' highlight'
  return <a className={`gb-button ${className}`} {...props} />
}

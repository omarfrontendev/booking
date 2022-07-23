import React from 'react'

const Container = ({ children, classes }) => {
  return (
    <div className={`container ${classes}`}>{children}</div>
  )
}

export default Container
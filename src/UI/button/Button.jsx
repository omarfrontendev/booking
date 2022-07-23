import React from 'react'

import './button.css'

const Button = ({ children, type, classes, onClick }) => {
  return (
    <button
    onClick={onClick}
    className={`button ${classes}`}
    type={type || 'button'}
    >{children}</button>
  )
}

export default Button
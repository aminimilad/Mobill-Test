import React, { Children } from 'react'
import './buttoncontinue.css'

function buttoncontinue({children, ...buttonProps}) {
  return (
    <button class="continue" {...buttonProps}>{children}</button>
  )
}

export default buttoncontinue
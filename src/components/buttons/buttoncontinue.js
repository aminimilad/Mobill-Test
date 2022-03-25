import React, { Children } from 'react'
import './buttoncontinue.css'

function buttoncontinue({children, ...buttonProps}) {
  return (
    <button class="continue" {...buttonProps}><p>{children}</p></button>
  )
}

export default buttoncontinue
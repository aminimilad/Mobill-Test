import React, { Children } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import './buttoncontinue.css'

function buttoncontinue({ children, ...buttonProps }) {
  return (
    <button class="continue" {...buttonProps}>{children}
      <CircularProgress color="success" />
    </button>
  )
}

export default buttoncontinue
import React, { Children } from 'react'
import './stopCharging.css'

function stopCharging({ children, ...buttonProps }) {
    return (
        <button class="stopCharging" {...buttonProps}>{children}</button>
    )
}

export default stopCharging
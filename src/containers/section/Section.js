import React from 'react';
import './Section.css';


export default function Section(props) {
  return (
    <div class="section">
      <div class="container">
 
        {props.children}
      </div>
    </div>
  )
}
//
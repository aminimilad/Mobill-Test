import React from 'react'
import './Form2.css';
import '../form1/Form1';
export default function Form2({opacity2,...props}) {
  return (
    <div id="Form2" style={{opacity:opacity2}}>
      <div class="form1c">
        <div class="zoncont">
        <div class="headercontainer">
          <h2 class="h1-custom">Välj ett betalningsalternativ</h2>
        </div>
        </div>
        {props.children}
      </div>
      
    </div>
    
  )
}
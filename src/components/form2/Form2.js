import React from 'react'
import './Form2.css';
import '../form1/Form1';
export default function Form2({transform,...props}) {
  return (
    <div id="Form2"style={{transform: transform}}><h2 class="h1-custom">Betalning</h2>
    <div id="Aw">
      <video id="e" src="https://c.tenor.com/SSrY_oxMoccAAAAC/50cent-not-funny.gif"
       autoplay loop width="200px" height="200px"></video>

    </div>
    
    <div class="btn-box">
     {props.children}
    </div></div>
  )
  }
import React from 'react'
import './Form2.css';
import '../form1/Form1';
export const Form2 = () => {
  return (
    <div id="Form2" ><h2 class="h1-custom">Betalning</h2>
    <div id="Aw">
      <video id="e" src="https://c.tenor.com/SSrY_oxMoccAAAAC/50cent-not-funny.gif"
       autoplay loop width="200px" height="200px"></video>

    </div>
    
    <div class="btn-box">
      <button class = "button" id="Back2">Tillbaka</button>
      <button class = "buttonforward" id="Ad">Bankkort</button>
      <button class = "buttonforward" id="Kad">Klarna</button>
      <button class="buttonforward" disabled id="Next3">Välj</button> 
    </div></div>
  )
}
export default Form2
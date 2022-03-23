import React from 'react'
import Button from '@mui/material/Button';
import setActiveStep from '../stepper/demo';

export const Form1 = () => {
  return (
    <div id="Form1">
              <h2 class="h1-custom">Zoninfo</h2>
                <div id="Zon" class="zon">

                  <div id="Head" class="head">
                    <p class="status">✓ Tillgänglig</p>
                    <p class="ss">burlöv center</p> 
                  </div>

                  <div class="spec">
                    <div class="zonid">
                      <span>zon id</span>
                      <span class="a">101</span>
                    </div>
                    <div class="uttagid">
                      <span>uttag</span>
                      <span class="a">111</span>
                    </div>
                    <div class="pris">
                      <span>PRIS/kWh</span>
                      <span class="a">3kr</span>
                    </div>
                  </div>

                  <div class="chargespec">
                    <div class="leftcont">
                      <div class="chargeimg"></div>
                      <div class="info">
                      <p>CHAdeMO</p>
                      <p>50kW</p>
                    </div>

                    </div>
                    <div class="provider"></div>
                    
                  </div>


                </div>
              <p id="demo"></p>
              <div class="btn-box-f1">
                <button class = "button" id="Back1">fel station?</button>
                <button class = "buttonforward" id="Next2">Välj</button>
              </div>

          </div>
  )
}
export default Form1
import React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import setActiveStep from '../stepper/demo';
import './Form1.css';
import CustomizedSteppers from '../stepper/demo';
import ReactDOM from 'react';
import { Fd } from '..';

export default function Form1({transform}){

  
  
  return (
    <div id='Form1' style={{transform: transform}}>
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
              
              
                
              </div>
              
          </div>
          
  )
}

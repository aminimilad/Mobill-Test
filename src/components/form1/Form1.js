import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import { useState } from 'react';
import Button from '@mui/material/Button';
import setActiveStep from '../stepper/demo';
import './Form1.css';
import CustomizedSteppers from '../stepper/demo';
import ReactDOM from 'react';
import { Fd } from '..';

export default function Form1({transform,...props}){
  return (
    <div id='Form1' style={{transform: transform}}>
     <div class="form1c">
     <div id="Zon" class="zon">

<div id="Head" class="head">
  <div class="headrow">
    <div class="status"><CheckCircleIcon/><p>Tillgänglig</p></div>
    <div class="QR"></div>
  </div>
  
  <p class="ss">burlöv medborgarhuset</p> 
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
<div class="providerContainer"><div class="provider"></div></div>



</div>
<p id="demo"></p>
<div class="btn-box">
<div class="btn-text"><div class="de">Se till att laddningskabeln redan nu är inkopplad (test)</div></div>
{props.children}
</div>
       </div>         
    
              
    </div>   
  )
}

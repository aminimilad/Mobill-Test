import React from 'react'
import { QrReader } from 'react-qr-reader';
import { QRscan } from '../../components/';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './Zone.css';

export default function Zone(props) {
  return (
  
  <div class="zoncont">

<div class="zon">

<div id="Head" class="head">
  <div class="headrow">
    <div class="status"><CheckCircleIcon/><p>Tillgänglig</p></div>
    {props.children}
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

  </div>
  
  )
}

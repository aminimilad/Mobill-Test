import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './Form1.css';



export default function Form1({opacity,...props}){
  
      const [data, setData] = React.useState('No result');

  return (
    <div id='Form1' style={{opacity: opacity}}>
     <div class="form1c">
        {props.children}
       </div>         
    
              
    </div>   
  )
}

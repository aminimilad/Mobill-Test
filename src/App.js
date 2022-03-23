
import './App.css';
import React from 'react';
import {Form1, Form2, Form3, Form4} from './components';
import {Header} from './containers';
import {Section} from './containers';
import {Fd} from './components';
import Button from '@mui/material/Button';
import CustomizedSteppers from './components/stepper/demo';
const App = () => {
  const[activeStep, setActiveStep] = React.useState(0);
  return (
    //STEPPER under section
    <>  
      <Header />
        <Section class="section">
          <Fd />
          <Form1 />
          <Form2 />
          <Form3 />
          <Form4 />
        </Section>
        
    </>
    

            

          

      

    

  );
}


export default App;

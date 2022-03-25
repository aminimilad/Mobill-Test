
import './App.css';
import React from 'react';
import {Form1, Form2, Form3, Form4} from './components';
import {Header} from './containers';
import {Section} from './containers';
import {Forms} from './containers'
import Button from '@mui/material/Button';
import CustomizedSteppers from './components/stepper/demo';
import {FF} from './containers';
import { ButtonContinue } from './components';
const App = () => {
  
  const [activeStep, setActiveStep] = React.useState(0);
      function handleNext(){
          
        };

  const [transform, transformit] = React.useState("TranslateX(0px)");
  const [transform2, transformit2] = React.useState("TranslateX(740px)");
  
  function fram() {  
    transformit("TranslateX(-740px)");
    transformit2("TranslateX(0px)");
    setActiveStep(activeStep+1);
  };

  function fram2() {  
    transformit2("TranslateX(740px)");
    transformit("TranslateX(0px)");
    setActiveStep(activeStep-1);
  };
  
    
  return (
    //STEPPER under section //Button css separat, button navigation transform
    //lägg button från rad 37 på rad 39 så funkar det! --------------------------------------------------------- den ska va på rad 37 egentligen
    <>  
      <Header />
        <Section class="section">
        
          <CustomizedSteppers activeStep={activeStep}/>
          <Forms>
         
            <Form1 transform={transform}> 
                <ButtonContinue onClick={() => {fram();}}>välj betalsätt</ButtonContinue>
            </Form1>
            
            <Form2 transform={transform2}>
              <Button onClick={() => {fram2();}}>w World</Button>
            </Form2>

            <Form3 />
            <Form4 />
          </Forms>
        </Section>
        
    </>
    
  );
}


export default App;
//<Button onClick={() => {fram();}}>w World</Button> 
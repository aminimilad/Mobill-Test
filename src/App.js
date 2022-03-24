
import './App.css';
import React from 'react';
import {Form1, Form2, Form3, Form4} from './components';
import {Header} from './containers';
import {Section} from './containers';
import {Forms} from './containers'
import Button from '@mui/material/Button';
import CustomizedSteppers from './components/stepper/demo';


const App = () => {
  
  const [activeStep, setActiveStep] = React.useState(0);
      const handleNext = () => {
          setActiveStep(activeStep+1);
        };

  const [transform, transformit] = React.useState("TranslateX(0px)");
  
  const fram = () => {  
    transformit("TranslateX(-740px)");
  };
  
    
  return (
    //STEPPER under section //Button css separat, button navigation transform
    //lägg button från rad 37 på rad 39 så funkar det! --------------------------------------------------------- den ska va på rad 37 egentligen
    <>  
      <Header />
        <Section class="section">
        
          <CustomizedSteppers activeStep={activeStep} handleNext={handleNext}/>
          <Forms>
            
            <Form1 transform={transform}>
              <button onClick={() => {handleNext();fram();}}>w World</button> 
            </Form1>
            
            <Form2 />
            <Form3 />
            <Form4 />
          </Forms>
        </Section>
        
    </>
    

            

          

      

    

  );
}


export default App;

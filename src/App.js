import "./App.css";
import React from "react";
import { Form1, Form2, Form3, Form4 } from "./components";
import { Header } from "./containers";
import { Section } from "./containers";
import { Forms } from "./containers";
import CustomizedSteppers from "./components/stepper/demo";
import { ButtonContinue } from "./components";
import { StopCharging } from "./components";

import { QrReader } from "modern-react-qr-reader";

import { QRscanButton } from "./components";
import { Zon } from "./containers";
import "./components/buttons/buttoncontinue.css";
import Form5 from "./components/form5/Form5";
import CircularProgress from '@mui/material/CircularProgress';
import Test from "./Test";

const App = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const [opacity, opacitySet] = React.useState(1);
  const [opacity2, opacitySet2] = React.useState(1);
  const [opacity3, opacitySet3] = React.useState(1);
  const [isQrActive, setQrState] = React.useState(false);
  const [chargeState, setChargeState] = React.useState(false);
  const [showStep, setDisplayStep] = React.useState(true);
  const [text, setText] = React.useState(<p>börja ladda</p>);
  const show = (
    
    <Zon>
      <QRscanButton onClick={QR} />
    </Zon>
  );
  const qrdiv = <div class="qrread">
    <Test/></div>;

  const one = (
    <>
      <div class="btn-text">Håll kameran mot QR-Koden</div>
      <ButtonContinue
        onClick={() => {
          QR();
        }}
        style={{ backgroundColor: "#d54040" }}
      >
        <p>avbryt</p>
      </ButtonContinue>
    </>
  );

  const two = (
    <>
      <div class="btn-text">
        Se till att laddningskabeln redan nu är inkopplad (test)
      </div>
      <div class="btn-cont">
      <ButtonContinue
        onClick={() => {
          fram();
        }}
      >
        <p>välj betalsätt</p>
      </ButtonContinue>
      </div>
    </>
  );

  

  function QR() {  //metoden opacityset o setQrstate körs efter 400ms - osv

    opacitySet(0);
    setTimeout(() => {

      opacitySet(1);
      setDisplayStep(!showStep);
      setQrState(!isQrActive);
    }, 400);


  }

  function charge(){
    //TEXT initiate med timer - poll
    setText(<p>kontrollerar anslutningen...</p>);

    setTimeout(() => {
      beginCharge();
      
    }, 5000);
    
  }

  function beginCharge(){
    setText(<p>förbereder...</p>);
    setChargeState(!chargeState);
    setTimeout(() => {

      fram3();
    }, 3000);
  }

  function fram() {
    opacitySet(0);

    setTimeout(() => {
      opacitySet(1);
      setActiveStep(activeStep + 1);
    }, 400);
  }

  function fram2() {
    opacitySet2(0);

    setTimeout(() => {
      setActiveStep(activeStep + 1);
    }, 400);
  }

  function fram3() {
    opacitySet3(0);

    setTimeout(() => {
      setActiveStep(activeStep + 1);
    },400);
  }

  function getStepContent(step) {
    //PRELIMINÄR - stor del av koden kmr att inkapslas -----------------------------------------------------------
    switch (step) {
      case 0:
        return (
          <Form1 activeStep={activeStep} opacity={opacity}>
            {isQrActive ? qrdiv : show}
            <div class="btnholder">
            <div class="btn-box">{isQrActive ? one : two}</div>
            </div>
            
           </Form1>
        );
      case 1:
        return (
          <Form2 activeStep={activeStep} opacity2={opacity2}>
            <div class="btnholder">
            <div class="btn-box">
              <ButtonContinue
                onClick={() => {
                  fram2();
                }}
              >
                <div class="payex"></div>
                <div class="textbox">
                <div class="text">
                  Kortregistrering
                  <div class="alttxt">via Swedbank Pay</div>
                </div>
                </div>
               
              </ButtonContinue>

              <div class="btn-text">
                <p class="eller">eller</p>
              </div>

              <ButtonContinue>
                <div class="swish"></div>
                <div class="textbox">
                <div class="text">
                  Swish
                  <div class="alttxt">Betala med Swish</div>
                </div>
                </div>
                
              </ButtonContinue>
            </div>

            </div>
            
          </Form2>
        );

      case 2:
        return (
          <Form3 activeStep={activeStep} opacity3={opacity3}>
            <div class="btn-box">
              <div class="btn-text">
              Genom att trycka på börja ladda så godkänner du Mobills användarvillkor
              </div>
              <ButtonContinue style={{color:'white'}}
                onClick={() => {
                  charge();
                }}
              ><div class="btnf3">
                {text}
              </div>
                <CircularProgress color="inherit" style={{display: chargeState ? 'block' : 'none', width: '25px', height:'25px', position: 'absolute', marginLeft: '55%'}}/>
              </ButtonContinue>
            </div>
          </Form3>
        );
      case 3:
        return (
           <Form4>
             <div class="btn-box">
               <div class="btn-text">
                 Tryck för att avsluta sessionen
             </div>
               <StopCharging
               onClick={() => {
                 fram();
               }}
             >
              <p>avsluta laddning</p>
            </StopCharging>
           </div>
         </Form4>
        );
      case 4: 
               return(
                <Form5>

                </Form5>
               );
      default:
        throw new Error("Mis-step!");
    }
  }

  return (
    //STEPPER under section //Button css separat, button navigation transform
    <>
      <Header />
      <Section class="section">
        <CustomizedSteppers activeStep={activeStep} opacity={!isQrActive ? opacity3 : 0} showStep={showStep} />
        <Forms>{getStepContent(activeStep)}</Forms>
      </Section>
    </>
  );
};

export default App;
//Ändra klassnamn
//<Button onClick={() => {fram();}}>w World</Button>

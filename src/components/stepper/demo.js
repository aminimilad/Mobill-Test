import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PaymentIcon from '@mui/icons-material/Payment';
import EvStationOutlinedIcon from '@mui/icons-material/EvStationOutlined';
import './demo.css'
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import Button from '@mui/material/Button';


const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: '28%',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
        backgroundColor:
        '#4f234c', width: '100%', transition:'width 0.3s ease-in',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor:
      '#05b2ab',width:'100%',
      transition:'0.3s ease-in',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 9,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#000',
    borderRadius: 1,width:0,
  },
  
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#000',
  zIndex: 1,
  color: '#fff',
  transition: '0.3s ease-in',
  width: 58.5,
  height: 58.5,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundColor: '#4f234c',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundColor:
      '#05b2ab',
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: completed ? <Check /> : <LocationOnOutlinedIcon/>,
    2: completed ? <Check /> : <PaymentIcon/>,
    3: completed ? <Check /> : <EvStationOutlinedIcon/>,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}



ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,color: 'red',
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,color: 'red',
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

  const steps = ['Zoninfo', 'Betalsätt', 'Börja ladda'];

export default function CustomizedSteppers({activeStep, opacity}) {


     

  return (
      <div class="d" style={{opacity:opacity}}>

      <Stack sx={{ width: '100%',
    '& .css-qivjh0-MuiStepLabel-label':{
      fontFamily:'Circular'},
      '& .css-qivjh0-MuiStepLabel-label.MuiStepLabel-alternativeLabel':{
        marginTop:'8px',
      },
      '& .css-farnub-MuiStepLabel-label':{
        fontFamily:'Circular'},
        '& .css-farnubs-MuiStepLabel-label.MuiStepLabel-alternativeLabel':{
          marginTop:'8px',
        },
    }}>
        
    

        <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector/>}>
          
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
  
     
      </Stack>
      </div>
    
    
  );
}

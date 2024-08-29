import React, { useEffect, useState } from 'react';
import { Box, Stepper, Step, StepLabel, Button, Typography } from '@mui/material';
import PersonalInformation from './PersonalDetails';
import EducationExperience from './EducationExperience';
import Projects from './Projects';
import Consent from './Consent';
import Review from './Review';
import { useDispatch, useSelector } from 'react-redux';
import { uploadUserData } from '../../redux/Action';
import { useNavigate } from 'react-router-dom';

const steps = ['Personal Information', 'Education & Experience', 'Projects', 'Consent', 'Review'];

const SignupForm = ({setVisible}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.userData);
  const { userData, error, loading } = user || {};
  
  const [activeStep, setActiveStep] = useState(0);
  const [data, setData] = useState({
    personalData: {
      firstName: '',
      lastName: '',
      email: '',
      dob: ''
    },
    education: [],
    experience: [],
    projects: [],
    resume: null,
    consent: false
  });
  
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleNext = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const getStepContent = (step) => {
    switch (step) {
      case 0: return <PersonalInformation data={data} setData={setData} />;
      case 1: return <EducationExperience data={data} setData={setData} />;
      case 2: return <Projects data={data} setData={setData} />;
      case 3: return <Consent data={data} setData={setData} />;
      case 4: return <Review formData={data} />;
      default: return 'Unknown step';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null); 
    try {
      await dispatch(uploadUserData(data));
      setSubmitStatus('success');
        setVisible(false);
       setTimeout(() => {
        navigate('/confirm')
       }, 500);
       
    } catch (error) {
      setSubmitStatus('error');
    }
  };

  useEffect(() => {
    console.log("main data is: ", data);
  }, [data]);

  return (
    <Box sx={{ width: '60%', mx: 'auto' , my:'100px'}}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ mt: 2 }}>
        {getStepContent(activeStep)}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Button disabled={activeStep === 0} onClick={handleBack}>Back</Button>
          {activeStep < steps.length - 1 ? (
            <Button variant="contained" onClick={handleNext}>Next</Button>
          ) : (
            <Button
              variant="contained"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Submit'}
            </Button>
          )}
        </Box>
        {submitStatus === 'success' && (
          <Typography variant="body1" color="success.main" sx={{ mt: 2 }}>
            Data submitted successfully!
          </Typography>
        )}
        {submitStatus === 'error' && (
          <Typography variant="body1" color="error.main" sx={{ mt: 2 }}>
            Failed to submit data. Please try again.
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default SignupForm;

import React, { useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Confirmation = () => {
  const  navigate =  useNavigate();

  useEffect(()=>{
    setTimeout(() => {
      navigate('/')
    }, 2000);
  }, [])

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Thank you for signing up!
      </Typography>
      <Typography variant="body1">
        We have received your information and will get back to you soon.
      </Typography>
    </Container>
  );
};

export default Confirmation;

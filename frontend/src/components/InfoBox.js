import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import {useNavigate } from 'react-router-dom';

const InfoBox = () => {
    const navigate = useNavigate();
    const  [visible , setVisible] = useState(true);
    const continueHandler = (e) => {
      e.preventDefault();
      setVisible(false)
      navigate("/signup"); 
    };
  return (
    <>
    {visible &&  
        <Box
        sx={{
          width: '100%',
          padding: 2,
          border: '1px solid #ccc', 
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          textAlign: 'center'
        }}
      >
          <Typography variant="body2" gutterBottom>
          Fill in information so that we can assist you in applying for jobs and recommendations.<br/>
          Click the button to continue:
        </Typography>
        <Button variant="contained" color="primary" onClick={(e)=> continueHandler(e)}>
          Continue
        </Button>
      </Box>
    }
        </>
  );
};

export default InfoBox;

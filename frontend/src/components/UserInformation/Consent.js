import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Checkbox, Typography, FormControlLabel } from '@mui/material';
import { updateUserData } from '../../redux/reducer'; // Import your action

const Consent = ({setData}) => {
  const dispatch = useDispatch();
  
  // Local state for consent
  const [consent, setConsent] = useState(false);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setConsent(checked);
    // Dispatch the update action
    // dispatch(updateUserData({ [name]: checked }));
  };
  
  useEffect(()=>{
    setData((prevData) => ({
      ...prevData,
      consent: consent
    }));
    console.log( "personal info is:" , consent)
  }, [consent]);

  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="h6">Consent</Typography>
      <Typography variant="body2" sx={{ mb: 1 }}>
        I consent to the use of my data for job applications and recommendations.
      </Typography>
      <FormControlLabel
        control={
          <Checkbox
            name="consent"
            checked={consent}
            onChange={handleChange}
          />
        }
        label="I Agree"
      />
    </Box>
  );
};

export default Consent;

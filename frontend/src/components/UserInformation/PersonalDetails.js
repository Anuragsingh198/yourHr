import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, TextField, Typography } from '@mui/material';
import { updateUserData } from '../../redux/reducer'; // Import your action

const PersonalInformation = ({setData}) => {
  const dispatch = useDispatch();
  
  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dob: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPersonalInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));

    // dispatch(updateUserData({ [name]: value }));
  };

  useEffect(()=>{
    setData((prevData) => ({
      ...prevData,
      personalData:personalInfo
    }));
    console.log( "personal info is:" , personalInfo)
  }, [personalInfo]);
  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="h6">Personal Information</Typography>
      <TextField
        fullWidth
        margin="normal"
        label="First Name"
        name="firstName"
        value={personalInfo.firstName}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Last Name"
        name="lastName"
        value={personalInfo.lastName}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Email"
        name="email"
        type="email"
        value={personalInfo.email}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Date of Birth"
        name="dob"
        type="date"
        InputLabelProps={{ shrink: true }}
        value={personalInfo.dob}
        onChange={handleChange}
      />
    </Box>
  );
};

export default PersonalInformation;

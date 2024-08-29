import React, { useState } from 'react';
import {
  Grid,
  TextField,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormControl,
  FormLabel,
  Button,
  Typography,
  Checkbox,
  Card,
  Tabs,
  Tab,
  Avatar,
} from '@mui/material';

const EditProfile = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Edit Profile
      </Typography>

      <Tabs value={selectedTab} onChange={handleTabChange} centered>
        <Tab label="My Details" />
        <Tab label="My Location" />
        <Tab label="My CV" />
        <Tab label="Education" />
        <Tab label="My Driver's License" />
        <Tab label="My Employment" />
      </Tabs>

      <Grid container spacing={3} style={{ marginTop: '20px' }}>
        <Grid item xs={12} sm={4}>
          <Card style={{ padding: '20px', textAlign: 'center' }}>
            <Avatar
              alt="Profile Picture"
              src=""
              style={{ width: '120px', height: '120px', margin: '0 auto' }}
            />
            <Button variant="outlined" component="label" style={{ marginTop: '10px' }}>
              Upload Photo
              <input type="file" hidden />
            </Button>
            <Typography variant="caption" display="block" style={{ marginTop: '10px' }}>
              Click here for help
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={12} sm={8}>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Name" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Surname" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Email Address" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Cellular Number" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="ID / Passport Number" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Age" variant="outlined" />
              </Grid>

              <Grid item xs={12}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Are you looking for a new job opportunity?</FormLabel>
                  <RadioGroup row>
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Gender</FormLabel>
                  <RadioGroup row>
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <TextField select label="Race" SelectProps={{ native: true }}>
                    <option value="Black African">Black African</option>
                    <option value="Coloured">Coloured</option>
                    <option value="Indian or Asian">Indian or Asian</option>
                    <option value="White">White</option>
                    <option value="Other">Other</option>
                  </TextField>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="I am disabled or have a disability"
                />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="I give permission for my identity to be verified by Secure Citizen and accept their Terms & Conditions and Privacy Policy"
                />
              </Grid>

              <Grid item xs={12}>
                <Button variant="contained" color="primary">
                  Save
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default EditProfile;

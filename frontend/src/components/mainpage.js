import React, { useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardContent, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import InfoBox from './InfoBox';


const MainPage = ({visible}) => {
  // Dummy job data
  const jobs = [
    { title: 'Software Engineer', company: 'Tech Corp', location: 'San Francisco, CA' },
    { title: 'Frontend Developer', company: 'Web Solutions', location: 'New York, NY' },
    { title: 'Backend Developer', company: 'Data Systems', location: 'Austin, TX' },
    { title: 'Backend Developer', company: 'Data Systems', location: 'Austin, TX' },
    { title: 'Backend Developer', company: 'Data Systems', location: 'Austin, TX' },
    { title: 'Backend Developer', company: 'Data Systems', location: 'Austin, TX' },
    { title: 'Backend Developer', company: 'Data Systems', location: 'Austin, TX' },
    { title: 'Backend Developer', company: 'Data Systems', location: 'Austin, TX' },
    { title: 'Backend Developer', company: 'Data Systems', location: 'Austin, TX' },
  ];
 useEffect(()=>{
  console.log('visible : ', visible);
 } , [visible])
  return (
    <div>
      {/* AppBar for navigation */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Job Seeker App
          </Typography>
          <Button color="inherit" component={Link} to="/signup">
            Signup
          </Button>
        </Toolbar>
      </AppBar>
      {visible=== true ? <InfoBox/> : ''}
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Available Jobs
        </Typography>
        
        <Grid container spacing={4}>
          {jobs.map((job, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {job.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {job.company}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {job.location}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default MainPage;

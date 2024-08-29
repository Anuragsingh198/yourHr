import React, { useState } from 'react';
import { Box, Typography, Button, Card } from '@mui/material';

const Review = ({ formData }) => {
  const [reviewVisible, setReviewVisible] = useState(false);

  const handleReview = (e) => {
    e.preventDefault();
    setReviewVisible(true);
  };

  return (
    <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card sx={{ padding: '10px 10px' }}>
        {reviewVisible ? (
          <>
            <Typography variant="h6">Review Your Information</Typography>
            <Typography variant="subtitle1" sx={{ mt: 2 }}>Personal Information</Typography>
            <Typography>Name: {formData.personalData.firstName} {formData.personalData.lastName}</Typography>
            <Typography>Email: {formData.personalData.email}</Typography>
            <Typography>Date of Birth: {formData.personalData.dob}</Typography>

            <Typography variant="subtitle1" sx={{ mt: 2 }}>Education</Typography>
            {formData.education.map((edu, index) => (
              <Typography key={index}>Institute: {edu.institute}, CPI: {edu.cpi}, Graduation Year: {edu.year}</Typography>
            ))}

            <Typography variant="subtitle1" sx={{ mt: 2 }}>Experience</Typography>
            {formData.experience.map((exp, index) => (
              <Typography key={index}>Job: {exp.jobDescription}, Years: {exp.years}, Start Date: {exp.startDate}</Typography>
            ))}

            <Typography variant="subtitle1" sx={{ mt: 2 }}>Projects</Typography>
            {formData.projects.map((project, index) => (
              <Typography key={index}>Description: {project.description}, Link: {project.link}</Typography>
            ))}

            <Typography variant="subtitle1" sx={{ mt: 2 }}>Consent</Typography>
            <Typography>{formData.consent ? "Agreed" : "Not Agreed"}</Typography>
          </>
        ) : (
          <Button variant="contained" color="primary" onClick={handleReview}>
            Review
          </Button>
        )}

      </Card>
    </Box>
  );
};

export default Review;

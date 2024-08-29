import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { updateUserData } from '../../redux/reducer';
import { uploadUserData } from '../../redux/Action';

const EducationExperience = ({  data, setData }) => {
  const dispatch = useDispatch();
  //
  // Default values in case data is undefined
  const initialEducation = data?.education || [{ institute: '', cpi: '', year: '' }];
  const initialExperience = data?.experience || [{ jobDescription: '', years: '', startDate: '' }];

  const [educationList, setEducationList] = useState(initialEducation);
  const [experienceList, setExperienceList] = useState(initialExperience);
  const [file, setFile] = useState(data?.resume || null);

  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    const updatedEducationList = educationList.map((education, i) =>
      i === index ? { ...education, [name]: value } : education
    );
    setEducationList(updatedEducationList);
  };

  const handleExperienceChange = (index, e) => {
    const { name, value } = e.target;
    const updatedExperienceList = experienceList.map((experience, i) =>
      i === index ? { ...experience, [name]: value } : experience
    );
    setExperienceList(updatedExperienceList);
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const handleAddEducation = () => {
    setEducationList([...educationList, { institute: '', cpi: '', year: '' }]);
  };

  const handleAddExperience = () => {
    setExperienceList([...experienceList, { jobDescription: '', years: '', startDate: '' }]);
  };

  useEffect(() => {
    if (setData) {
      setData((prevData) => ({
        ...prevData,
        education: educationList,
        experience: experienceList,
        resume: file
      }));
    }
  }, [file, educationList, experienceList, setData]);

  return (
    <Box>
      <Typography variant="h6">Add Education Details</Typography>
      {educationList.map((education, index) => (
        <Box key={index} sx={{ mt: 2 }}>
          <TextField
            label="Institute Name"
            name="institute"
            value={education.institute}
            onChange={(e) => handleEducationChange(index, e)}
            sx={{ mr: 2 }}
          />
          <TextField
            label="CPI"
            name="cpi"
            value={education.cpi}
            onChange={(e) => handleEducationChange(index, e)}
            sx={{ mr: 2 }}
          />
          <TextField
            label="Year of Graduation"
            name="year"
            value={education.year}
            onChange={(e) => handleEducationChange(index, e)}
          />
        </Box>
      ))}
      <Button onClick={handleAddEducation} variant="outlined" sx={{ mt: 2 }}>Add Education</Button>

      <Typography variant="h6" sx={{ mt: 4 }}>Add Experience Details</Typography>
      {experienceList.map((experience, index) => (
        <Box key={index} sx={{ mt: 2 }}>
          <TextField
            label="Job Description"
            name="jobDescription"
            value={experience.jobDescription}
            onChange={(e) => handleExperienceChange(index, e)}
            sx={{ mr: 2 }}
          />
          <TextField
            label="Years of Experience"
            name="years"
            value={experience.years}
            onChange={(e) => handleExperienceChange(index, e)}
            sx={{ mr: 2 }}
          />
          <TextField
            label="Start Date"
            name="startDate"
            value={experience.startDate}
            onChange={(e) => handleExperienceChange(index, e)}
          />
        </Box>
      ))}
      <Button onClick={handleAddExperience} variant="outlined" sx={{ mt: 2 }}>Add Experience</Button>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6">Upload Resume</Typography>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          style={{ marginTop: '10px' }}
        />
      </Box>
    </Box>
  );
};

export default EducationExperience;

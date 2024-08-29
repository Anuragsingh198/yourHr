import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, TextField, Typography, Button } from '@mui/material';
import { updateUserData } from '../../redux/reducer'; // Import your action

const Projects = ({ data , setData}) => {
  const initialProjects = data?.projects || [{description: '', link: '' }];
  const dispatch = useDispatch();

  // Local state for managing multiple projects
  const [projects, setProjects] = useState(initialProjects);

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const updatedProjects = projects.map((project, i) =>
      i === index ? { ...project, [name]: value } : project
    );
    setProjects(updatedProjects);
  };

  const handleAddProject = () => {
    // Add a new project form
    const newProjects = [...projects, { description: '', link: '' }];
    setProjects(newProjects);
    // Dispatch the updated projects list to Redux store
    // dispatch(updateUserData({ projects: newProjects }));
  };
  useEffect(()=>{
    setData((prevData) => ({
      ...prevData,
      projects:projects
    }));
    console.log("projects are , :" , projects)
  }, [projects])
  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="h6">Projects</Typography>
      {projects.map((project, index) => (
        <Box key={index} sx={{ mb: 2 }}>
          <TextField
            fullWidth
            margin="normal"
            label="Project Description"
            name="description"
            value={project.description}
            onChange={(e) => handleInputChange(index, e)}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Project Link"
            name="link"
            value={project.link}
            onChange={(e) => handleInputChange(index, e)}
          />
        </Box>
      ))}
      <Button variant="outlined" onClick={handleAddProject} sx={{ mt: 2 }}>
        Add Project
      </Button>
    </Box>
  );
};

export default Projects;

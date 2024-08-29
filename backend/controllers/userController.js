
const User = require('../models/User');
const uploadUserData = async (req, res) => {
  const { name, email, dob, education, experience, projects } = req.body;

  const newUser = new User({
    name,
    email,
    dob,
    education: JSON.parse(education),
    experience: JSON.parse(experience),
    projects: JSON.parse(projects),
    resume: {
      data: req.file.buffer, 
      contentType: req.file.mimetype, 
    },
  });

  try {
    await newUser.save();
    res.status(200).send('User data and file uploaded successfully!');
  } catch (err) {
    res.status(500).send('Error saving data and file.');
  }
};
module.exports = {
  uploadUserData,
};

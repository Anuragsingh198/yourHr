// routes/userRouter.js
const express = require('express');
const multer = require('multer');
const { uploadUserData } = require('../controllers/userController'); 

const router = express.Router();
const upload = multer(); 

router.post('/upload', upload.single('resume'), uploadUserData);

module.exports = router;

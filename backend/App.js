const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');
const dotenv = require('dotenv')
const app = express();
connectDB();
dotenv.config()
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', process.env.URL);
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
    next();
});

app.use(express.json({ limit: '10mb' }));
app.use('/api' , userRoutes);
app.use((req, res) => {
    res.status(404).json({ success: false, message: 'Not Found' });
});


const PORT = process.env.PORT || 5000;    
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

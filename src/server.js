const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const winston = require('../utils/logger');
const authRoutes = require('../routes/routes');

dotenv.config();

const app = express();
app.use(express.json());

// Database Connection
// mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => winston.info('Connected to the database'))
//     .catch(err => winston.error('Database connection error: ', err));

// Routes
app.use('/api/auth', authRoutes);

app.get('/get', (req, res) => {
    res.send("test get");
})

app.get('/', (req, res) => {
    res.send("test blank");
})

app.listen(process.env.PORT, () => {
    winston.info(`Server is running on port ${process.env.PORT}`);
});

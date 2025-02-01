const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const winston = require('../utils/logger');
const authRoutes = require('../routes/routes');
const sequelize = require('../config/db');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Sync database
sequelize.sync({alter:true})
  .then(() => winston.info('Database synchronized'))
  .catch(err => winston.error('Database sync error:', err));

app.use('/api/auth', authRoutes);

app.listen(process.env.PORT, () => {
  winston.info(`Server is running on port ${process.env.PORT}`);
});

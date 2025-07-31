const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const qaRoutes = require('./routes/qaRoutes');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use('/api/qa', qaRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  app.listen(5000, () => console.log('Server running on port 5000'));
}).catch(err => console.error(err));

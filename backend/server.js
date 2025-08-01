const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const qaRoutes = require('./routes/qaRoutes');

dotenv.config();
const app = express();
app.use(cors({
  origin : 'https://qa-audio-trainer.netlify.app'
}));
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use('/api/qa', qaRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error(err));

const express = require('express');
const multer = require('multer');
const Question = require('../models/Question');

const router = express.Router();
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

router.post('/', upload.single('audio'), async (req, res) => {
  try {
    const { questionText, answerText } = req.body;
    const newQA = new Question({
      questionText,
      answerText,
      audioPath: req.file ? req.file.path : ''
    });
    const savedQA = await newQA.save();
    res.json(savedQA);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});


router.get('/random', async (req, res) => {
  const count = await Question.countDocuments();
  const randomIndex = Math.floor(Math.random() * count);
  const randomQA = await Question.findOne().skip(randomIndex);
  res.json(randomQA);
});

module.exports = router;

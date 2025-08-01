import React, { useState } from 'react';
import axios from 'axios';
import './PostingPage.css'; // We'll use a CSS file for styling

const PostingPage = () => {
  const [questionText, setQuestionText] = useState('');
  const [answerText, setAnswerText] = useState('');
  const [audio, setAudio] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('questionText', questionText);
    formData.append('answerText', answerText);
    if (audio) formData.append('audio', audio);

    try {
      await axios.post('https://qa-audio-trainer.onrender.com//api/qa', formData);
      alert('Question saved!');
    } catch (error) {
      console.error(error);
      alert('Something went wrong. See console for details.');
    }

    setQuestionText('');
    setAnswerText('');
    setAudio(null);
  };

  return (
    <div className="posting-container">
      <form onSubmit={handleSubmit} className="posting-form">
        <h2>📝 Post a Question</h2>

        <label>Question</label>
        <input
          type="text"
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
          placeholder="Enter your question..."
          required
        />

        <label>Answer</label>
        <input
          type="text"
          value={answerText}
          onChange={(e) => setAnswerText(e.target.value)}
          placeholder="Enter the answer..."
          required
        />

        <label>Upload Audio</label>
        <input
          type="file"
          accept="audio/*"
          onChange={(e) => setAudio(e.target.files[0])}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PostingPage;

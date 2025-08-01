import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './AskingPage.css';

const AskingPage = () => {
  const [currentQA, setCurrentQA] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isAsking, setIsAsking] = useState(false);
  const audioRef = useRef();

  useEffect(() => {
    let timer1, timer2;
    if (isAsking) {
      getNewQuestion();
    }

    async function getNewQuestion() {
      const res = await axios.get('https://qa-audio-trainer.onrender.com/api/qa/random');
      setCurrentQA(res.data);
      setShowAnswer(false);
      if (audioRef.current) audioRef.current.pause();

      timer1 = setTimeout(() => {
        setShowAnswer(true);
        timer2 = setTimeout(() => {
          if (isAsking) getNewQuestion();
        }, 5000);
      }, 5000);
    }

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [isAsking]);

  // ✅ Safe to log here


  return (
    <div className="asking-container">
      <div className="asking-box">
        <h2>🎧 Ask Questions</h2>
        <button
          className={`ask-toggle-btn ${isAsking ? 'stop' : 'start'}`}
          onClick={() => setIsAsking(!isAsking)}
        >
          {isAsking ? '🛑 Stop Asking' : '▶️ Start Asking'}
        </button>

        {currentQA && (
          <div className="qa-card">
            <div className="qa-block">
              <h3>🟠 Question</h3>
              <p>{currentQA.questionText}</p>
            </div>
            <audio ref={audioRef} src={currentQA.audioPath} autoPlay controls />
            {showAnswer && (
              <div className="qa-block answer">
                <h3>✅ Answer</h3>
                <p>{currentQA.answerText}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AskingPage;

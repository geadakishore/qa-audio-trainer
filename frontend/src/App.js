import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PostingPage from './components/PostingPage';
import AskingPage from './components/AskingPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App" style={{ backgroundColor: '#121212', color: '#FFA500', minHeight: '100vh', padding: '20px' }}>
        <h1 style={{ textAlign: 'center', color: '#FFA500', marginBottom: '20px' }}>🎧 Q&A Audio Trainer</h1>

        <nav style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '30px' }}>
          <Link to="/post">
            <button style={buttonStyle}>Post Question</button>
          </Link>
          <Link to="/ask">
            <button style={buttonStyle}>Ask Questions</button>
          </Link>
        </nav>

        <Routes>
          <Route path="/post" element={<PostingPage />} />
          <Route path="/ask" element={<AskingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#FFA500',
  color: '#121212',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontWeight: 'bold',
  transition: 'background-color 0.3s',
};

export default App;

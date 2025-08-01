import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PostingPage from './components/PostingPage';
import AskingPage from './components/AskingPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1 className="app-title">🎧 Q&A Audio Trainer</h1>

        <nav>
          <Link to="/post">
            <button className="nav-btn">Post Question</button>
          </Link>
          <Link to="/ask">
            <button className="nav-btn">Ask Questions</button>
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

export default App;

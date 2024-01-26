
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupPage from './pages/SignupPage';
import GameplayPage from './pages/GameplayPage';
import FinishPage from './pages/FinishPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/MatchingGame" element={<SignupPage />} />
        <Route path="/MatchingGame/gameplay" element={<GameplayPage />} />
        <Route path="/MatchingGame/finish" element={<FinishPage />} />
      </Routes>
    </Router>
  );
}

export default App;

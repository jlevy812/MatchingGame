
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupPage from './pages/SignupPage';
import GameplayPage from './pages/GameplayPage';
import FinishPage from './pages/FinishPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/gameplay" element={<GameplayPage />} />
        <Route path="/finish" element={<FinishPage />} />
      </Routes>
    </Router>
  );
}

export default App;

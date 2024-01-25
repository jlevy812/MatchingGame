// SignupPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function SignupPage() {
  const navigate = useNavigate();

  const handleStartGame = () => {
    // Redirect to GameplayPage
    navigate('/gameplay');
  };

  return (
    <div>
      <h1>Signup Page</h1>
      <button onClick={handleStartGame}>Start Game</button>
    </div>
  );
}

export default SignupPage;
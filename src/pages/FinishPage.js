// FinishPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function FinishPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/gameplay');
  };

  return (
    <div className='finishContainer'>
      <div className='congratsText'>CONGRATS</div>
      <div className='youWonText'>YOU&nbsp;WON!</div>
      <div className='winnerPhoto'></div>
      <div className='finishRedBack'>
        <div className='gradientTop'></div>
        <div className="finishPlayAgainContainer">
          <div className="restartBackground">
            <button className="restartButton" onClick={handleClick}>PLAY AGAIN</button>
          </div>
        </div>
        <div className='gradientBottom'></div>
      </div>
    </div>
  );
}

export default FinishPage;
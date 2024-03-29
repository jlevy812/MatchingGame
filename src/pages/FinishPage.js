import React from 'react';
import { useNavigate } from 'react-router-dom';

function FinishPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/MatchingGame/gameplay');
  };

  return (
    <div className='finishContainer'>
      <div className='congratsText'>CONGRATS</div>
      <div className='youWonText'>YOU&nbsp;WON!</div>
      <div className='winnerPhoto'></div>
      <div className='shareLine'>
        <div className='leftRedLine'></div>
        <div className='shareText'>SHARE</div>
        <div className='rightRedLine'></div>
      </div>
      <div className='logosLine'>
        <div className='facebookLogo'></div>
        <div className='xLogo'></div>
        <div className='instagramLogo'></div>
      </div>
      <div className='checkEmailText'>CHECK YOUR EMAIL FOR YOUR PRIZE DETAILS</div>
      <div className='finishRedBack'>
        <div className='gradientTop finishGradientTop'></div>
        <div className="finishPlayAgainContainer">
          <div className="restartBackground">
            <button className="restartButton" onClick={handleClick}>PLAY AGAIN</button>
          </div>
        </div>
        <div className='gradientBottom finishGradientBottom'></div>
      </div>
    </div>
  );
}

export default FinishPage;
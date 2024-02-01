// SignupPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './../App.css';
import { Row, Col } from 'react-bootstrap';

function SignupPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/MatchingGame/gameplay');
  };

  return (
    <div className="signupContainer">
      <div className="teamNameContainer signupTeamNameContainer">
        <div className="teamNameBackground signupTeamNameBackground">
          <div className="teamName">TORONTO RAPTORS</div>
        </div>
      </div>
      <div className='signupRedBack'>
        <div className='gradientTop'></div>
        <div className="topDesignRectangles signupTopDesignRectangles">
          <div className="topLeftRectangle"></div>
          <div className="topRightRectangle"></div>
        </div>
        <div className='signupMatchContainer'>
          <div className='signupMatchLogo'></div>
        </div>
        <div className="bottomDesignRectangles">
          <div className="bottomLeftRectangle"></div>
          <div className="bottomRightRectangle"></div>
        </div>
        <div className='gradientBottom'></div>
      </div>
      <div className="sponsorContainer signupSponsorContainer">
        <div className="sponsorBackground signupSponsorBackground">
          <Row className='sponsorRow'>
            <Col className="sponsorColumn" xs={8} md={8}>
              <div className="sponsorName">PRESENTED BY</div>
            </Col>
            <Col className="sponsorColumn" xs={4} md={4}>
              <div className="sponsorPicture"></div>
            </Col>
          </Row>
        </div>
      </div>
      <div className='signupTextBoxes'>
        <div className="inputBox">
          <input type="text" className="inputField" placeholder='First Name'/>
        </div>
        <div className="inputBox">
          <input type="text" className="inputField" placeholder='Last Name'/>
        </div>
        <div className="inputBox">
          <input type="text" className="inputField" placeholder='Email'/>
        </div>
      </div>
      <div className="checkbox-container">
        <label className="checkboxLabel">
          <input type="checkbox" id="agreeCheckbox" className="checkbox" />
          <span className="whiteText">I have read and agreed to the&nbsp;</span>
          <span className="termsAndConditionsText">Terms & Conditions</span>
        </label>
      </div>
      <div className="signupStartContainer">
        <div className="restartBackground">
          <button className="restartButton" onClick={handleClick}>START</button>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
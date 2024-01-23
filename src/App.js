import Card from "./components/card";
import { Row, Col } from 'react-bootstrap';
import React, { useState } from 'react';
import './App.css';

var card1Id;
var card1Style;
var card1Clicked = false;
var everythingFrozen = false;
var stylesArrayGrid = [];
var numTurns = 0;

const stylesArray = ['card-back-1', 'card-back-1', 'card-back-2', 'card-back-2', 'card-back-3', 'card-back-3', 'card-back-4', 'card-back-4', 'card-back-5', 'card-back-5', 'card-back-6', 'card-back-6'];
stylesArrayGrid = [[stylesArray[0], stylesArray[1], stylesArray[2]], [stylesArray[3], stylesArray[4], stylesArray[5]], [stylesArray[6], stylesArray[7], stylesArray[8]], [stylesArray[9], stylesArray[10], stylesArray[11]]]; 

const isFrozen = Array(12).fill(true);

const App = () => {
  const [internalIsFlipped, setInternalIsFlipped] = useState([]);

  const handleClick = () => {

    //NEED TO FLIP BACK CARDS BEFORE NEW RANDOM

    for (let i = stylesArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [stylesArray[i], stylesArray[j]] = [stylesArray[j], stylesArray[i]];
    }
    
    stylesArrayGrid = [[stylesArray[0], stylesArray[1], stylesArray[2]], [stylesArray[3], stylesArray[4], stylesArray[5]], [stylesArray[6], stylesArray[7], stylesArray[8]], [stylesArray[9], stylesArray[10], stylesArray[11]]]; 
    
    for (let i = 0; i < 12; i++){
      isFrozen[i] = false;
    }

    setInternalIsFlipped(["card0", "card1", "card2", "card3", "card4", "card5", "card6", "card7", "card8", "card9", "card10", "card11"]);

    everythingFrozen = true;
    for (let i = 0; i < 12; i++){
      isFrozen[i] = true;
    }

    setTimeout(() => {
      for (let i = 0; i < 12; i++){
        isFrozen[i] = false;
      }
      setInternalIsFlipped([]);

    }, 3000);
    everythingFrozen = false;

  };

  const handleCardClick = (clickedStyle, clickedId) => {

    if (!everythingFrozen){
      if (!card1Clicked){
        card1Id = clickedId;
        card1Style = clickedStyle;
        card1Clicked = true;
        isFrozen[parseInt(card1Id.replace('card', ''), 10)] = true;
  
      } else {
        numTurns++;
        if (card1Id !== clickedId && card1Style === clickedStyle){
          //FREEZE BOTH CARDS
          isFrozen[parseInt(card1Id.replace('card', ''), 10)] = true;
          isFrozen[parseInt(clickedId.replace('card', ''), 10)] = true;
  
        } else {
          //FLIP BACK BOTH CARDS
          everythingFrozen = true;
          const oldFreeze = [...isFrozen];
          for (let i = 0; i < 12; i++){
            isFrozen[i] = true;
          }
  
          setTimeout(() => {
            everythingFrozen = false;
            for (let i = 0; i < 12; i++){
              isFrozen[i] = oldFreeze[i];
            }
            isFrozen[parseInt(card1Id.replace('card', ''), 10)] = false;
            const removingArray = [...internalIsFlipped];
            const index1 = internalIsFlipped.indexOf(clickedId);
            removingArray.splice(index1, 1);
            const index2 = internalIsFlipped.indexOf(card1Id);
            removingArray.splice(index2, 1);
            setInternalIsFlipped(removingArray);
          }, 1000);
        }
        card1Clicked = false;
      }
    }
    
  };

  return (
    <div className="container">
      <div className="backgroundContainer">
        <div className="teamNameBackground">
          <div className="teamName">TORONTO RAPTORS</div>
        </div>
      </div>
      <div className="red-back">
        <div className="topDesignRectangles">
          <div className="topLeftRectangle"></div>
          <div className="topRightRectangle"></div>
        </div>
        <div className="matchContainer">
          <div className="matchLogo"></div>
        </div>
        <div className="board">
          <div className="turnsText">
            <span className="turns-label">TURNS: </span>
            <span className="turns-value">{numTurns}/8</span>
          </div>
          <Row>
            {stylesArrayGrid[0].map((style, index) => (
              <Col className="paddedColumn" key={`card${index}`}>
                <Card style={stylesArrayGrid[0][index]} id={`card${index}`} onCardClick={handleCardClick} isFrozen={isFrozen[index]} internalIsFlipped={internalIsFlipped} setInternalIsFlipped={setInternalIsFlipped}/>
              </Col>
            ))}
          </Row>
          <Row>
            {stylesArrayGrid[1].map((style, index) => (
              <Col className="paddedColumn" key={`card${index + 3}`}>
                <Card style={stylesArrayGrid[1][index]} id={`card${index + 3}`} onCardClick={handleCardClick} isFrozen={isFrozen[index + 3]} internalIsFlipped={internalIsFlipped} setInternalIsFlipped={setInternalIsFlipped}/>
              </Col>
            ))}
          </Row>
          <Row>
            {stylesArrayGrid[2].map((style, index) => (
              <Col className="paddedColumn" key={`card${index + 6}`}>
                <Card style={stylesArrayGrid[2][index]} id={`card${index + 6}`} onCardClick={handleCardClick} isFrozen={isFrozen[index + 6]} internalIsFlipped={internalIsFlipped} setInternalIsFlipped={setInternalIsFlipped}/>
              </Col>
            ))}
          </Row>
          <Row>
            {stylesArrayGrid[3].map((style, index) => (
              <Col className="paddedColumn" key={`card${index + 9}`}>
                <Card style={stylesArrayGrid[3][index]} id={`card${index + 9}`} onCardClick={handleCardClick} isFrozen={isFrozen[index + 9]} internalIsFlipped={internalIsFlipped} setInternalIsFlipped={setInternalIsFlipped}/>
              </Col>
            ))}
          </Row>
        </div>
        <br></br>
        <div className="restartBackground">
          <button className="restartButton" onClick={handleClick}>RESTART</button>
        </div>
        <div className="bottomDesignRectangles">
          <div className="bottomLeftRectangle"></div>
          <div className="bottomRightRectangle"></div>
        </div>
      </div>
      <div className="sponsorContainer">
        <div className="sponsorBackground">
          <Row>
            <Col className="sponsorColumn" xs={8} md={8}>
              <div className="sponsorName">PRESENTED BY</div>
            </Col>
            <Col className="sponsorColumn" xs={4} md={4}>
              <div className="sponsorPicture"></div>
            </Col>
          </Row>
        </div>
      </div>
      
      
    </div>
  );
}

export default App;
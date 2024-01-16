import Card from "./components/card";
import { Row, Col } from 'react-bootstrap';
import React, { useState } from 'react';
import './App.css';

var card1Id;
var card1Style;
var card1Clicked = false;

const stylesArray = ['card-back-1', 'card-back-1', 'card-back-2', 'card-back-2', 'card-back-3', 'card-back-3', 'card-back-4', 'card-back-4', 'card-back-5', 'card-back-5', 'card-back-6', 'card-back-6'];
const isFrozen = Array(12).fill(false);

for (let i = stylesArray.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [stylesArray[i], stylesArray[j]] = [stylesArray[j], stylesArray[i]];
}

const stylesArrayGrid = [[stylesArray[0], stylesArray[1], stylesArray[2]], [stylesArray[3], stylesArray[4], stylesArray[5]], [stylesArray[6], stylesArray[7], stylesArray[8]], [stylesArray[9], stylesArray[10], stylesArray[11]]]; 

const App = () => {
  const [cardStates, setCardStates] = useState(Array(12).fill(false));

  const handleClick = () => {
    setCardStates(prevStates => prevStates.map(() => !prevStates[0]));

    for (let i = 0; i < 12; i++){
      isFrozen[i] = true;
    }

    setTimeout(() => {
      for (let i = 0; i < 12; i++){
        isFrozen[i] = false;
      }
      setCardStates(prevStates => prevStates.map(() => !prevStates[0]));
    }, 3000);
  };

  const handleCardClick = (clickedStyle, clickedId) => {

    if (!card1Clicked){
      card1Id = clickedId;
      card1Style = clickedStyle;
      card1Clicked = true;
      isFrozen[parseInt(card1Id.replace('card', ''), 10)] = true;
      setCardStates(prevStates => prevStates.map(() => prevStates[0]));

    } else {
      if (card1Id !== clickedId && card1Style === clickedStyle){
        console.log("match");
        //ADD POINTS
        //FREEZE BOTH CARDS
        isFrozen[parseInt(card1Id.replace('card', ''), 10)] = true;
        isFrozen[parseInt(clickedId.replace('card', ''), 10)] = true;

        setCardStates(prevStates => prevStates.map(() => prevStates[0]));
      } else {
        //SUBTRACT POINTS
        //FLIP BACK BOTH CARDS
        //UNFREEZE FIRST CARD
        isFrozen[parseInt(card1Id.replace('card', ''), 10)] = false;
        setCardStates(prevStates => prevStates.map(() => prevStates[0]));
      }
      card1Clicked = false;
    }
  };

  return (
    <div className="container">
      <button className="startButton" onClick={handleClick}>Start</button>

      <Row>
        {stylesArrayGrid[0].map((style, index) => (
          <Col key={`card${index}`}>
            <Card style={stylesArrayGrid[0][index]} isFlipped={cardStates[index]} id={`card${index}`} onCardClick={handleCardClick} isFrozen={isFrozen[index]}/>
          </Col>
        ))}
      </Row>
      <br></br>
      <Row>
        {stylesArrayGrid[1].map((style, index) => (
          <Col key={`card${index + 3}`}>
            <Card style={stylesArrayGrid[1][index]} isFlipped={cardStates[index + 3]} id={`card${index + 3}`} onCardClick={handleCardClick} isFrozen={isFrozen[index + 3]}/>
          </Col>
        ))}
      </Row>
      <br></br>
      <Row>
        {stylesArrayGrid[2].map((style, index) => (
          <Col key={`card${index + 6}`}>
            <Card style={stylesArrayGrid[2][index]} isFlipped={cardStates[index + 6]} id={`card${index + 6}`} onCardClick={handleCardClick} isFrozen={isFrozen[index + 6]}/>
          </Col>
        ))}
      </Row>
      <br></br>
      <Row>
        {stylesArrayGrid[3].map((style, index) => (
          <Col key={`card${index + 9}`}>
            <Card style={stylesArrayGrid[3][index]} isFlipped={cardStates[index + 9]} id={`card${index + 9}`} onCardClick={handleCardClick} isFrozen={isFrozen[index + 9]}/>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default App;
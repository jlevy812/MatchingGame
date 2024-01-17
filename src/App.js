import Card from "./components/card";
import { Row, Col } from 'react-bootstrap';
import React, { useState } from 'react';
import './App.css';

var card1Id;
var card1Style;
var card1Clicked = false;

const stylesArray = ['card-back-1', 'card-back-1', 'card-back-2', 'card-back-2', 'card-back-3', 'card-back-3', 'card-back-4', 'card-back-4', 'card-back-5', 'card-back-5', 'card-back-6', 'card-back-6'];
const isFrozen = Array(12).fill(true);

for (let i = stylesArray.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [stylesArray[i], stylesArray[j]] = [stylesArray[j], stylesArray[i]];
}

const stylesArrayGrid = [[stylesArray[0], stylesArray[1], stylesArray[2]], [stylesArray[3], stylesArray[4], stylesArray[5]], [stylesArray[6], stylesArray[7], stylesArray[8]], [stylesArray[9], stylesArray[10], stylesArray[11]]]; 

const App = () => {
  const [internalIsFlipped, setInternalIsFlipped] = useState([]);

  const handleClick = () => {

    for (let i = 0; i < 12; i++){
      isFrozen[i] = false;
    }

    setInternalIsFlipped(["card0", "card1", "card2", "card3", "card4", "card5", "card6", "card7", "card8", "card9", "card10", "card11",]);

    for (let i = 0; i < 12; i++){
      isFrozen[i] = true;
    }

    setTimeout(() => {
      for (let i = 0; i < 12; i++){
        isFrozen[i] = false;
      }
      setInternalIsFlipped([]);

    }, 3000);
  };

  const handleCardClick = (clickedStyle, clickedId) => {

    if (!card1Clicked){
      card1Id = clickedId;
      card1Style = clickedStyle;
      card1Clicked = true;
      isFrozen[parseInt(card1Id.replace('card', ''), 10)] = true;

    } else {
      if (card1Id !== clickedId && card1Style === clickedStyle){
        console.log("match");
        //ADD POINTS
        //FREEZE BOTH CARDS
        isFrozen[parseInt(card1Id.replace('card', ''), 10)] = true;
        isFrozen[parseInt(clickedId.replace('card', ''), 10)] = true;

      } else {
        //SUBTRACT POINTS
        //FLIP BACK BOTH CARDS

        setTimeout(() => {
          const removingArray = [...internalIsFlipped];
          const index1 = internalIsFlipped.indexOf(clickedId);
          removingArray.splice(index1, 1);
          const index2 = internalIsFlipped.indexOf(card1Id);
          removingArray.splice(index2, 1);
          setInternalIsFlipped(removingArray);
        }, 1000);

        //UNFREEZE FIRST CARD
        isFrozen[parseInt(card1Id.replace('card', ''), 10)] = false;
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
            <Card style={stylesArrayGrid[0][index]} id={`card${index}`} onCardClick={handleCardClick} isFrozen={isFrozen[index]} internalIsFlipped={internalIsFlipped} setInternalIsFlipped={setInternalIsFlipped}/>
          </Col>
        ))}
      </Row>
      <br></br>
      <Row>
        {stylesArrayGrid[1].map((style, index) => (
          <Col key={`card${index + 3}`}>
            <Card style={stylesArrayGrid[1][index]} id={`card${index + 3}`} onCardClick={handleCardClick} isFrozen={isFrozen[index + 3]} internalIsFlipped={internalIsFlipped} setInternalIsFlipped={setInternalIsFlipped}/>
          </Col>
        ))}
      </Row>
      <br></br>
      <Row>
        {stylesArrayGrid[2].map((style, index) => (
          <Col key={`card${index + 6}`}>
            <Card style={stylesArrayGrid[2][index]} id={`card${index + 6}`} onCardClick={handleCardClick} isFrozen={isFrozen[index + 6]} internalIsFlipped={internalIsFlipped} setInternalIsFlipped={setInternalIsFlipped}/>
          </Col>
        ))}
      </Row>
      <br></br>
      <Row>
        {stylesArrayGrid[3].map((style, index) => (
          <Col key={`card${index + 9}`}>
            <Card style={stylesArrayGrid[3][index]} id={`card${index + 9}`} onCardClick={handleCardClick} isFrozen={isFrozen[index + 9]} internalIsFlipped={internalIsFlipped} setInternalIsFlipped={setInternalIsFlipped}/>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default App;
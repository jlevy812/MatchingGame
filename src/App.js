import Card from "./components/card";
import { Row, Col } from 'react-bootstrap';
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const stylesArray = ['card-back-1', 'card-back-1', 'card-back-2', 'card-back-2', 'card-back-3', 'card-back-3', 'card-back-4', 'card-back-4', 'card-back-5', 'card-back-5', 'card-back-6', 'card-back-6'];

    for (let i = stylesArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [stylesArray[i], stylesArray[j]] = [stylesArray[j], stylesArray[i]];
    }

  const stylesArray1 = [stylesArray[0], stylesArray[1], stylesArray[2]];
  const stylesArray2 = [stylesArray[3], stylesArray[4], stylesArray[5]];
  const stylesArray3 = [stylesArray[6], stylesArray[7], stylesArray[8]];
  const stylesArray4 = [stylesArray[9], stylesArray[10], stylesArray[11]];

  const [cardStates, setCardStates] = useState(Array(12).fill(false));

  const handleClick = () => {
    setCardStates(prevStates => prevStates.map(() => !prevStates[0]));

    setTimeout(() => {
      setCardStates(prevStates => prevStates.map(() => !prevStates[0]));
    }, 3000);
  };

  return (
    <div className="container">
      <button className="startButton" onClick={handleClick}>Start</button>

      <Row>
        {stylesArray1.map((style, index) => (
          <Col key={`card${index}`}>
            <Card style={stylesArray1[index]} isFlipped={cardStates[index]} />
          </Col>
        ))}
      </Row>
      <Row>
        {stylesArray2.map((style, index) => (
          <Col key={`card${index + 3}`}>
            <Card style={stylesArray2[index]} isFlipped={cardStates[index + 3]} />
          </Col>
        ))}
      </Row>
      <Row>
        {stylesArray3.map((style, index) => (
          <Col key={`card${index + 6}`}>
            <Card style={stylesArray3[index]} isFlipped={cardStates[index + 6]} />
          </Col>
        ))}
      </Row>
      <Row>
        {stylesArray4.map((style, index) => (
          <Col key={`card${index + 9}`}>
            <Card style={stylesArray4[index]} isFlipped={cardStates[index + 9]} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default App;
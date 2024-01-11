import Card from "./components/card";
import { Row, Col } from 'react-bootstrap';
import './App.css';

const App = () => {

  const stylesArray = ['card-back-1', 'card-back-1', 'card-back-2', 'card-back-2', 'card-back-3', 'card-back-3', 'card-back-4', 'card-back-4', 'card-back-5', 'card-back-5', 'card-back-6', 'card-back-6'];
  
  for (let i = stylesArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [stylesArray[i], stylesArray[j]] = [stylesArray[j], stylesArray[i]];
  }

  const handleClick = () => {
    setTimeout(() => {
        for (let i = 0; i < 11; i++){
          
        }
    }, 3000);
  };

  return (
    <div className="container">

      <button className="startButton" onClick={handleClick}>Start</button>

      <Row>
        <Col >
          <Card style={stylesArray[0]} id="card0"/>
        </Col>
        
        <Col>
          <Card style={stylesArray[1]} id="card1"/>
        </Col>

        <Col>
          <Card style={stylesArray[2]} id="card2"/>
        </Col>
      </Row>

      <br></br>

      <Row>
        <Col>
          <Card style={stylesArray[3]} id="card3"/>
        </Col>
        
        <Col>
          <Card style={stylesArray[4]} id="card4"/>
        </Col>

        <Col>
          <Card style={stylesArray[5]} id="card5"/>
        </Col>
      </Row>

      <br></br>

      <Row>
        <Col>
          <Card style={stylesArray[6]} id="card6"/>
        </Col>
        
        <Col>
          <Card style={stylesArray[7]} id="card7"/>
        </Col>

        <Col>
          <Card style={stylesArray[8]} id="card8"/>
        </Col>
      </Row>

      <br></br>

      <Row>
        <Col>
          <Card style={stylesArray[9]} id="card9"/>
        </Col>
        
        <Col>
          <Card style={stylesArray[10]} id="card10"/>
        </Col>

        <Col>
          <Card style={stylesArray[11]} id="card11"/>
        </Col>
      </Row>

    </div>
  )

}

export default App;

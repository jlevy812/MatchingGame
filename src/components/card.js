import { useState, useEffect } from 'react'
import ReactCardFlip from 'react-card-flip'

const Card = ({ style }) => {
    const [isFlipped, setIsFlipped] = useState(false);
  
    const flipCard = () => {
      setIsFlipped(!isFlipped);
    };
  
    return (
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div className={`card`} onClick={flipCard}>
        </div>
        <div className={`card ${style}`} onClick={flipCard}>
        </div>
      </ReactCardFlip>
    );
  };

export default Card

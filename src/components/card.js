import { useState, useEffect } from 'react'
import ReactCardFlip from 'react-card-flip'

const Card = ({ style, isFlipped, id, onCardClick, isFrozen }) => {
  const [internalIsFlipped, setInternalIsFlipped] = useState(false);

  useEffect(() => {
    setInternalIsFlipped(isFlipped);
  }, [isFlipped]);

  const flipCard = () => {
    if (!isFrozen){
      setInternalIsFlipped(!internalIsFlipped);
      onCardClick(style, id); 
    }
  };

  return (
    <ReactCardFlip isFlipped={internalIsFlipped} flipDirection="vertical">
      <div className={`card`} onClick={flipCard}>
      </div>
      <div className={`card ${style}`} onClick={flipCard}>
      </div>
    </ReactCardFlip>
  );
};

export default Card;
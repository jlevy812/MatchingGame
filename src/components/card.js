import { useState, useEffect } from 'react'
import ReactCardFlip from 'react-card-flip'

const Card = ({ style, isFlipped }) => {
  const [internalIsFlipped, setInternalIsFlipped] = useState(false);

  useEffect(() => {
    setInternalIsFlipped(isFlipped);
  }, [isFlipped]);

  const flipCard = () => {
    setInternalIsFlipped(!internalIsFlipped);
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
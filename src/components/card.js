import ReactCardFlip from 'react-card-flip'

const Card = ({ style, id, onCardClick, isFrozen, internalIsFlipped, setInternalIsFlipped }) => {

  const flipCard = () => {
    if (!isFrozen){
      if (internalIsFlipped.includes(id)){
        const index = internalIsFlipped.indexOf(id);
        internalIsFlipped.splice(index, 1);
        onCardClick(style, id); 
      } else {
        setInternalIsFlipped([...internalIsFlipped, id]);
        onCardClick(style, id); 
      } 
    }
  };

  return (
    <ReactCardFlip isFlipped={internalIsFlipped.includes(id)} flipDirection="vertical">
      <div className={`card`} onClick={flipCard}>
      </div>
      <div className={`card ${style}`} onClick={flipCard}>
      </div>
    </ReactCardFlip>
  );
};

export default Card;
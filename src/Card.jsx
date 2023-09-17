import React from 'react';
import Tags from './Tags';

function Card({ imageUrl, name, description, tagText, tagColor }) {
  const cardStyle = {
    maxWidth: '300px',
    margin: '10px',
  };

  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
  };

  return (
    <div className="card" style={cardStyle}>
      <img src={imageUrl} alt={name} style={imageStyle} />
      <div className="card-body">
        <h2>{name}</h2>
        <p>{description}</p>
        <Tags text={tagText} color={tagColor} />
      </div>
    </div>
  );
}

export default Card;


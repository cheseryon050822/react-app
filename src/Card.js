import React from 'react';
import './Card.css';

const Card  = (props) =>{
  const{Name,date}=props

    return (
  <div className="wrapper">
      <h1>Card</h1>
      {Name}/{date}
  </div>
    );
};

export default Card;
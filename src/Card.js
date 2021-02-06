import React from 'react';
import './Card.css';

const Card  = (props) =>{
  const{id,Name,date}=props

    return (
  <div className="wrapper">
      <h1>Card</h1>
       <h1>{id}</h1>
       <h1>{Name}</h1>
       <h1>{date}</h1>
  </div>
    );
};

export default Card;
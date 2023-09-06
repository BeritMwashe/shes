import React from 'react';
import './Card.css'; 
import 'font-awesome/css/font-awesome.min.css';


function Card({ title, content, icon, bgColor ,toClick}) {
  const cardStyle = {
    backgroundColor: bgColor,
  };
  

  return (
    <div className="card" style={cardStyle} onClick={
      toClick
    }>
      
      <i className={`fa fa-${icon} fa-3x card-icon`} aria-hidden="true"></i>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

export default Card;

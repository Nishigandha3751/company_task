

import React from 'react';
import './Slide.css';

const Slide = ({ slide }) => {
  return (
    <div className="slide">
      <img src={slide.image} alt={slide.title} className="slide-img" />
      <div className="centered-text">
        <h2>{slide.title}</h2>
        <p>{slide.description}</p>
      </div>
    </div>
  );
};

export default Slide;
